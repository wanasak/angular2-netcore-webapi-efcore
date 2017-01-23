using System.Collections.Generic;

namespace model
{
    public class Course
    {
        public int CourseID { get; set; }
        public string Name { get; set; }
        public int Credits { get; set; }

        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}