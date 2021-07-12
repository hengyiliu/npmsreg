using npmsreg.Entities;
using npmsreg.Models;

namespace npmsreg.Managers
{
    public static class StudentAdapter
    {
        public static Models.Student GetStudent(Entities.Students s, Entities.Registrations r)
        {
            return new Models.Student
            {
                Id = s.Id,
                FamilyId = s.FamilyId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                ChineseName = s.ChineseName,
                Birthday = s.Birthday,
                Gender = s.Gender,
                Grade = r == null ? string.Empty : r.Grade
            };
        }
    }

    public static class StudentsExtension
    {
        public static void CopyFrom(this Students s, Student sr)
        {
            s.ChineseName = sr.ChineseName;
            s.FirstName = sr.FirstName;
            s.LastName = sr.LastName;
            s.Gender = sr.Gender;
            s.Birthday = sr.Birthday;
        }
    }
}
