using System;
using System.Collections.Generic;

namespace npmsreg.Entities
{
    public partial class Registrations
    {
        public int SchoolYear { get; set; }
        public int StudentId { get; set; }
        public string Grade { get; set; }

        public virtual Students Student { get; set; }
    }
}
