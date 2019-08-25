using System;
using System.Collections.Generic;

namespace npmsreg.Models
{
    public partial class Students
    {
        public int Id { get; set; }
        public int? FamilyId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ChineseName { get; set; }
        public DateTime? Birthday { get; set; }
        public string Gender { get; set; }
    }
}
