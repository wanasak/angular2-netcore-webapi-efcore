using System.Collections.Generic;
using data;
using model;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace service
{
    public class StudentService
    {
        public readonly StudentContext _context;

        public StudentService(StudentContext context)
        {
            _context = context;
        }

        public IEnumerable<Student> GetStuednts()
        {
            return _context.Students
                .OrderBy(s => s.StudentId)
                .ToList();
        }
        public Student GetStudent(int studentID)
        {
            return _context.Students
                .Include(s => s.Enrollments)
                    .ThenInclude(e => e.Course)
                .FirstOrDefault(s => s.StudentId == studentID);
        }
        public void CreateStudent(Student student)
        {
            var _student = new Student
            {
                Name = student.Name,
                Major = student.Major,
                Year = student.Year
            };

            _context.Students.Add(_student);
            _context.SaveChanges();
        }
        public void UpdateStudent(Student student)
        {
            Student _student = _context.Students.Find(student.StudentId);
            if (_student != null)
            {
                _student.Name = student.Name;
                _student.Major = student.Major;
                _student.Year = student.Year;

                _student.Enrollments = new List<Enrollment>();

                foreach (var enrollment in student.Enrollments)
                {
                    _student.Enrollments.Add(new Enrollment { StudentId = student.StudentId, CourseId = enrollment.CourseId });
                }

                _context.Students.Update(_student);
                _context.SaveChanges();
            }
        }
        public void DeleteStudent(int studentID)
        {
            Student _student = new Student { StudentId = 1 };
            _context.Students.Remove(_student);
            _context.SaveChanges();
        }
    }
}