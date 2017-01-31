using System.Collections.Generic;

namespace model
{
    public class Course
    {
        public Course()
        {
            Enrollments = new List<Enrollment>();
        }
        public int CourseId { get; set; }
        public string Name { get; set; }
        public int Credits { get; set; }

        public List<Enrollment> Enrollments { get; set; }
    }
}