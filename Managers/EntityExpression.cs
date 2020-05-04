using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace npmsreg.Managers
{
    public class EntityExpression
    {
        public static Expression<Func<Entities.Families, Models.Family>> AsFamilyModel =>
            e => new Models.Family
            {
                Id = e.Id,
                FatherName = e.FatherName,
                MotherName = e.MotherName,
                FatherChineseName = e.FatherChineseName,
                MotherChineseName = e.MotherChineseName,
                FatherPhone = e.FatherPhone,
                MotherPhone = e.MotherPhone,
                FatherEmail = e.FatherEmail,
                MotherEmail = e.MotherEmail,
                SpokenLanguages = e.SpokenLanguages,
                FatherOccupation = e.FatherOccupation,
                MotherOccupation = e.MotherOccupation,
                FatherHelpArea = e.FatherHelpArea,
                MotherHelpArea = e.MotherHelpArea,
                Address = e.Address,
                City = e.City,
                State = e.State,
                ZipCode = e.ZipCode,

                // Students
            };

        public static Expression<Func<Entities.Students, Models.Student>> AsStudentModel =>
            e => new Models.Student
            {
                Id = e.Id,
                FamilyId = e.FamilyId,
                FirstName = e.FirstName,
                LastName = e.LastName,
                ChineseName = e.ChineseName,
                Birthday = e.Birthday,
                Gender = e.Gender,
                Grade = e.Registrations.First().Grade
            };
    }
}
