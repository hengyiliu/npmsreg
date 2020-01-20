using npmsreg.Helpers;
using npmsreg.Models;

namespace npmsreg.Helpers
{
    public static class StudentsExtension
    {
        public static void CopyFrom(this Students s, StudentRegistration sr)
        {
            s.ChineseName = sr.ChineseName;
            s.FirstName = sr.FirstName;
            s.LastName = sr.LastName;
            s.Gender = sr.Gender;
            s.Birthday = sr.Birthday;
        }
    }
}
