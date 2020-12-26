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

        public static Expression<Func<Entities.Students, Entities.Registrations, Models.Student>> AsStudentModel =>
            (e, r) => new Models.Student
            {
                Id = e.Id,
                FamilyId = e.FamilyId,
                FirstName = e.FirstName,
                LastName = e.LastName,
                ChineseName = e.ChineseName,
                Birthday = e.Birthday,
                Gender = e.Gender,
                Grade = (r == null ? "" : r.Grade)
            };

        public static void FamilyModelToEntity(Entities.Families fa, Models.Family e)
        {
            fa.FatherName = e.FatherName;
            fa.MotherName = e.MotherName;
            fa.FatherChineseName = e.FatherChineseName;
            fa.MotherChineseName = e.MotherChineseName;
            fa.FatherPhone = e.FatherPhone;
            fa.MotherPhone = e.MotherPhone;
            fa.FatherEmail = e.FatherEmail;
            fa.MotherEmail = e.MotherEmail;
            fa.SpokenLanguages = e.SpokenLanguages;
            fa.FatherOccupation = e.FatherOccupation;
            fa.MotherOccupation = e.MotherOccupation;
            fa.FatherHelpArea = e.FatherHelpArea;
            fa.MotherHelpArea = e.MotherHelpArea;
            fa.Address = e.Address;
            fa.City = e.City;
            fa.State = e.State;
            fa.ZipCode = e.ZipCode;
        }
    }
}
