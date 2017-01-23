using System.Collections.Generic;

namespace model
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string Major { get; set; }
        public int Year { get; set; }

        public List<Enrollment> Enrollments { get; set; }
    }
}