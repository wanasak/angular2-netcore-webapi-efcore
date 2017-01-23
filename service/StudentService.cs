using System.Collections.Generic;
using data;
using model;
using System.Linq;

namespace service
{
    public class StudentService
    {
        public readonly AppContext _context;

        public StudentService(AppContext context)
        {
            _context = context;
        }

        public IEnumerable<Student> GetStuednts()
        {
            return _context.Students
                .OrderBy(s => s.StudentID)
                .ToList();
        }
        public Student GetStudent(int studentID)
        {
            return _context.Students
                .Find(studentID);
        }
        public void AddStudent(Student student)
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
            Student _student = _context.Students.Find(student.StudentID);
            if (_student != null)
            {
                _student.Name = student.Name;
                _student.Major = student.Major;
                _student.Year = student.Year;

                for (int i = 0; i < student.Enrollments.Count; i++)
                {
                    
                }
            }
        }   
        public void DeleteStudent(int studentID)
        {
            Student _student = new Student { StudentID = 1 };
            _context.Students.Remove(_student);
            _context.SaveChanges();
        }
    }
}