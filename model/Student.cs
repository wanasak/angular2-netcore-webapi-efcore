using System.Collections.Generic;

namespace model
{
    public class Student
    {
        public int StudentID { get; set; }
        public string Name { get; set; }
        public string Major { get; set; }
        public int Year { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }
}