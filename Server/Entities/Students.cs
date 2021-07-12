using System;
using System.Collections.Generic;

namespace npmsreg.Entities
{
    public partial class Students
    {
        public Students()
        {
            Registrations = new HashSet<Registrations>();
        }

        public int Id { get; set; }
        public int FamilyId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ChineseName { get; set; }
        public DateTime Birthday { get; set; }
        public string Gender { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Families Family { get; set; }
        public virtual ICollection<Registrations> Registrations { get; set; }
    }
}
