using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace npmsreg.Models
{
    public enum RegOperation
    {
        Unregister = 0,
        Register = 1
    }

    public class RegistrationAction
    {
        public RegOperation Operation { get; set; }
        public int SchoolYear { get; set; }
        public int StudentId { get; set; }
        public string Grade { get; set; }
    }
}
