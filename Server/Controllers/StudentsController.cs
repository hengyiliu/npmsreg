using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using npmsreg.Entities;
using npmsreg.Models;
using npmsreg.Managers;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace npmsreg.Controllers
{
    /// <summary>
    /// APIs for creating and managing <see cref="Student"/>
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class StudentsController : ControllerBase
    {
        private readonly SchoolContext _context;
        const int DefaultSchoolYear = 20192020;

        public StudentsController(SchoolContext context)
        {
            _context = context;
        }

        // GET: api/Students/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudents(int id)
        {
            var sr = await GetStudentsDetails(_context, new int[] { id });

            if (sr == null || sr.Count() == 0)
            {
                return NotFound();
            }

            return sr.FirstOrDefault();
        }

        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student sr)
        {
            Students s = new Students
            {
                FirstName = sr.FirstName,
                LastName = sr.LastName,
                ChineseName = sr.ChineseName,
                Birthday = sr.Birthday,
                Gender = sr.Gender,
                FamilyId = sr.FamilyId
            };
            _context.Students.Add(s);
            await _context.SaveChangesAsync();

            Registrations r = new Registrations
            {
                SchoolYear = DefaultSchoolYear,
                StudentId = s.Id,
                Grade = sr.Grade,
            };

            _context.Registrations.Add(r);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudents", new { id = s.Id }, new Student(s, r));
        }

        [HttpPut]
        public async Task<ActionResult<IEnumerable<Student>>> PutStudents(IEnumerable<Student> studentRegs)
        {
            var sids = studentRegs.Select(s => s.Id).ToList();
            var students = await _context.Students.Include(s => s.Registrations).Where(s => sids.Contains(s.Id)).ToListAsync();

            foreach (var stu in students)
            {
                var sr = studentRegs.First(s => s.Id == stu.Id);
                stu.CopyFrom(sr);

                var currentReg = stu.Registrations.FirstOrDefault(r => r.SchoolYear == DefaultSchoolYear);
                if (string.IsNullOrWhiteSpace(sr.Grade))
                {
                    // remove registration if Grade is empty
                    if (currentReg != null)
                    {
                        stu.Registrations.Remove(currentReg);
                    }
                }
                else
                {
                    // add or update registration
                    if (currentReg == null)
                    {
                        currentReg = new Registrations()
                        {
                            SchoolYear = DefaultSchoolYear,
                            Grade = sr.Grade,
                            StudentId = sr.Id
                        };
                        stu.Registrations.Add(currentReg);
                    }
                    else
                    {
                        currentReg.Grade = sr.Grade;
                    }
                }
            }

            await _context.SaveChangesAsync();

            var updatedRegs = await GetStudentsDetails(_context, sids);
            return updatedRegs.ToList();
        }

        public static async Task<IEnumerable<Student>> GetStudentsDetails(SchoolContext context, IEnumerable<int> ids)
        {
            int schoolYear = 20192020;

            var d = from s in context.Students
                    join r in context.Registrations on new { Id = s.Id, Year = schoolYear } equals new { Id = r.StudentId, Year = r.SchoolYear } into sg
                    from r in sg.DefaultIfEmpty()
                    where ids.Contains(s.Id)
                    select new { Student = s, Registration = r };

            var sr = await d.ToListAsync();
            if (sr == null || sr.Count == 0)
            {
                return null;
            }

            return sr.Select(x => StudentAdapter.GetStudent(x.Student, x.Registration)).ToList();
        }

        public static async Task<IEnumerable<Student>> GetStudentsDetailsByFamily(SchoolContext context, int fid, int schoolYear)
        {
            var d = from s in context.Students
                    join r in context.Registrations on new { Id = s.Id, Year = schoolYear } equals new { Id = r.StudentId, Year = r.SchoolYear } into sg
                    from r in sg.DefaultIfEmpty()
                    where s.FamilyId == fid
                    select new { Student = s, Registration = r };

            var sr = await d.ToListAsync();
            if (sr == null || sr.Count == 0)
            {
                return null;
            }

            return sr.Select(x => StudentAdapter.GetStudent(x.Student, x.Registration)).ToList();
        }

    }
}
