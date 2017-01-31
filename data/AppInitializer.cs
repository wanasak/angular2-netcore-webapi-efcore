using System;
using System.Collections.Generic;
using model;

namespace data
{
    public class AppInitializer
    {
        private static StudentContext _context;
        public static void Initialize(IServiceProvider serviceProvider)
        {
            _context = (StudentContext)serviceProvider.GetService(typeof(StudentContext));
            InitializeData();
        }
        private static void InitializeData()
        {
            InitializeStudent();
            InitializeCourse();
            InitializeEnrollment();
        }
        private static void InitializeStudent()
        {
            var student1 = new Student
            {
                StudentId = 1,
                Name = "Wanasak",
                Major = "Engineering",
                Year = 1
            };
            var student2 = new Student
            {
                StudentId = 2,
                Name = "Peter",
                Major = "Aggie",
                Year = 1
            };
            var student3 = new Student
            {
                StudentId = 3,
                Name = "Somchai",
                Major = "Account",
                Year = 3
            };
            var student4 = new Student
            {
                StudentId = 4,
                Name = "Ron",
                Major = "Medicine",
                Year = 2
            };
            var student5 = new Student
            {
                StudentId = 5,
                Name = "David",
                Major = "Economis",
                Year = 4
            };
            _context.Students.Add(student1);
            _context.Students.Add(student2);
            _context.Students.Add(student3);
            _context.Students.Add(student4);
            _context.Students.Add(student5);
            _context.SaveChanges();
        }
        private static void InitializeCourse()
        {
            var course1 = new Course
            {
                CourseId = 1,
                Name = "Drawing",
                Credits = 4
            };
            var course2 = new Course
            {
                CourseId = 2,
                Name = "Econ100",
                Credits = 3
            };
            var course3 = new Course
            {
                CourseId = 3,
                Name = "Human Relationship",
                Credits = 1
            };
            _context.Courses.Add(course1);
            _context.Courses.Add(course2);
            _context.Courses.Add(course3);
            _context.SaveChanges();
        }
        private static void InitializeEnrollment()
        {
            var enrollments = new List<Enrollment>
            {
                new Enrollment
                {
                    StudentId = 1,
                    CourseId = 1,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentId = 1,
                    CourseId = 2,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentId = 1,
                    CourseId = 3,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentId = 2,
                    CourseId = 1,
                    Grade = Grade.F
                },
                new Enrollment
                {
                    StudentId = 3,
                    CourseId = 2,
                    Grade = Grade.B
                }
            };
            _context.Enrollments.AddRange(enrollments);
            _context.SaveChanges();
        }
    }
}