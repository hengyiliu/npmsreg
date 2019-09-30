using System;
using System.Collections.Generic;

namespace npmsreg.Models
{
    public partial class Families
    {
        public Families()
        {
            Students = new HashSet<Students>();
        }

        public int Id { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string FatherChineseName { get; set; }
        public string MotherChineseName { get; set; }
        public string FatherPhone { get; set; }
        public string MotherPhone { get; set; }
        public string FatherEmail { get; set; }
        public string MotherEmail { get; set; }
        public string SpokenLanguages { get; set; }
        public string FatherOccupation { get; set; }
        public string MotherOccupation { get; set; }
        public string FatherHelpArea { get; set; }
        public string MotherHelpArea { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<Students> Students { get; set; }
    }
}
