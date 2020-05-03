using System;
using System.Collections.Generic;

namespace npmsreg.Models
{
    public partial class Payments
    {
        public int Id { get; set; }
        public int SchoolYear { get; set; }
        public int FamilyId { get; set; }
        public decimal Amount { get; set; }
        public string Method { get; set; }
        public string TransactionRef { get; set; }
        public DateTime CreatedAt { get; set; }

        public virtual Families Family { get; set; }
    }
}
