using System;
using npmsreg.Models;

namespace npmsreg.Helpers
{
    public class StudentRegistration
    {
        public StudentRegistration()
        {
        }

        public StudentRegistration(Students s, Registrations r)
        {
            Id = s.Id;
            FamilyId = s.FamilyId;
            FirstName = s.FirstName;
            LastName = s.LastName;
            ChineseName = s.ChineseName;
            Birthday = s.Birthday;
            Gender = s.Gender;
            Grade = string.Empty;
            if (r != null)
            {
                Grade = r.Grade;
            }
        }
        public int Id { get; set; }
        public int FamilyId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ChineseName { get; set; }
        public DateTime Birthday { get; set; }
        public string Gender { get; set; }
        public string Grade { get; set; }
    }
}
