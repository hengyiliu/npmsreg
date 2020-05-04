using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using npmsreg.Helpers;
using npmsreg.Entities;
using npmsreg.Models;
using npmsreg.Managers;

namespace npmsreg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamiliesController : ControllerBase
    {
        private readonly SchoolContext _context;

        public FamiliesController(SchoolContext context)
        {
            _context = context;
        }

        // GET: api/Families
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Family>>> GetFamilies()
        {
            return await _context.Families
                            .Select(EntityExpression.AsFamilyModel)
                            .ToListAsync();
        }

        // GET: api/Families/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Family>> GetFamilies(int id)
        {
            var family = await _context.Families.Where(f => f.Id == id)
                                .Select(EntityExpression.AsFamilyModel)
                                .SingleOrDefaultAsync();

            if (family == null)
            {
                return NotFound();
            }

            return family;
        }

        // GET: api/Families/5/Students
        [HttpGet("{id}/students")]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudentsForFamily(int id)
        {
            var students = await StudentsController.GetStudentsDetailsByFamily(_context, id);

            if (students == null)
            {
                return new List<Student>();
            }

            return students.ToList();
        }

        // GET: api/Families/5/Payments
        [HttpGet("{id}/payments")]
        public async Task<ActionResult<IEnumerable<Payments>>> GetPaymentsForFamily(int id)
        {
            int schoolYear = 20192020;

            var pm = from p in _context.Payments
                     where p.FamilyId == id && p.SchoolYear == schoolYear
                     select p;

            var result = await pm.ToListAsync();
            return result;
        }

        // PUT: api/Families/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<ActionResult<Families>> PutFamilies(int id, Families families)
        {
            if (id != families.Id)
            {
                return BadRequest();
            }

            _context.Entry(families).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FamiliesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            var updatedFamilies = await _context.Families.FindAsync(id);
            return updatedFamilies;
        }

        // POST: api/Families
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Families>> PostFamilies(Families families)
        {
            _context.Families.Add(families);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFamilies", new { id = families.Id }, families);
        }

        // DELETE: api/Families/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Families>> DeleteFamilies(int id)
        {
            var families = await _context.Families.FindAsync(id);
            if (families == null)
            {
                return NotFound();
            }

            _context.Families.Remove(families);
            await _context.SaveChangesAsync();

            return families;
        }

        private bool FamiliesExists(int id)
        {
            return _context.Families.Any(e => e.Id == id);
        }
    }
}
