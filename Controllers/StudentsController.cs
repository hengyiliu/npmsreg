using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using npmsreg.Helpers;
using npmsreg.Models;

namespace npmsreg.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly SchoolContext _context;

        public StudentsController(SchoolContext context)
        {
            _context = context;
        }

        // GET: api/Students/1
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentRegistration>> GetStudents(int id)
        {
            var sr = await GetStudentsDetails(_context, new int[] { id });

            if (sr == null || sr.Count() == 0)
            {
                return NotFound();
            }

            return sr.FirstOrDefault();
        }

        [HttpPut]
        public async Task<ActionResult<IEnumerable<StudentRegistration>>> PutStudents(IEnumerable<StudentRegistration> studentRegs)
        {
            int schoolYear = 20192020;

            var sids = studentRegs.Select(s => s.Id).ToList();
            var students = await _context.Students.Include(s => s.Registrations).Where(s => sids.Contains(s.Id)).ToListAsync();

            foreach (var stu in students)
            {
                var sr = studentRegs.First(s => s.Id == stu.Id);
                stu.CopyFrom(sr);

                var currentReg = stu.Registrations.FirstOrDefault(r => r.SchoolYear == schoolYear);
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
                            SchoolYear = schoolYear,
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

        public static async Task<IEnumerable<StudentRegistration>> GetStudentsDetails(SchoolContext context, IEnumerable<int> ids)
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

            return sr.Select(x => new StudentRegistration(x.Student, x.Registration)).ToList();
        }

        public static async Task<IEnumerable<StudentRegistration>> GetStudentsDetailsByFamily(SchoolContext context, int fid)
        {
            int schoolYear = 20192020;

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

            return sr.Select(x => new StudentRegistration(x.Student, x.Registration)).ToList();
        }

    }
}
