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
    /// APIs for managing register/unregister
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class RegistrationsController : ControllerBase
    {
        private readonly SchoolContext _context;
        const int schoolYear = 20192020;

        public RegistrationsController(SchoolContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task RegisterStudent([FromQuery] int schoolYear, [FromBody] IEnumerable<RegistrationAction> toAction)
        {
            var regs = await _context.Registrations.Where(s => s.SchoolYear == schoolYear).ToListAsync();

            //  unregister
            var unregList = toAction.Where(t => t.Operation == RegOperation.Unregister).Select(t => t.StudentId).ToList();
            if (unregList.Count > 0)
            {
                var toremove = regs.Where(r => unregList.Contains(r.StudentId)).ToArray();
                _context.Registrations.RemoveRange(toremove);
            }

            // register or change grade
            var regList = toAction.Where(t => t.Operation == RegOperation.Register).ToList();
            foreach (var toreg in regList)
            {
                var existing = regs.Find(r => r.StudentId == toreg.StudentId);
                if (existing == null)
                {
                    // register
                    _context.Registrations.Add(new Registrations()
                    {
                        SchoolYear = schoolYear,
                        StudentId = toreg.StudentId,
                        Grade = toreg.Grade
                    });
                }
                else if (existing.Grade != toreg.Grade)
                {
                    // update
                    existing.Grade = toreg.Grade;
                }
            }

            await _context.SaveChangesAsync();
        }

    }
}
