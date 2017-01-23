using System;
using System.Collections.Generic;
using model;

namespace data
{
    public class AppInitializer
    {
        private static AppContext _context;
        public static void Initialize(IServiceProvider serviceProvider)
        {
            _context = (AppContext)serviceProvider.GetService(typeof(AppContext));
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
                StudentID = 1,
                Name = "Wanasak",
                Major = "Engineering",
                Year = 1
            };
            var student2 = new Student
            {
                StudentID = 2,
                Name = "Peter",
                Major = "Aggie",
                Year = 1
            };
            var student3 = new Student
            {
                StudentID = 3,
                Name = "Somchai",
                Major = "Account",
                Year = 3
            };
            _context.Students.Add(student1);
            _context.Students.Add(student2);
            _context.Students.Add(student3);
            _context.SaveChanges();
        }
        private static void InitializeCourse()
        {
            var course1 = new Course
            {
                CourseID = 1,
                Name = "Drawing",
                Credits = 4
            };
            var course2 = new Course
            {
                CourseID = 2,
                Name = "Econ100",
                Credits = 3
            };
            var course3 = new Course
            {
                CourseID = 3,
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
                    StudentID = 1,
                    CourseID = 1,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentID = 1,
                    CourseID = 2,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentID = 1,
                    CourseID = 3,
                    Grade = Grade.A
                },
                new Enrollment
                {
                    StudentID = 2,
                    CourseID = 1,
                    Grade = Grade.F
                },
                new Enrollment
                {
                    StudentID = 2,
                    CourseID = 2,
                    Grade = Grade.B
                }
            };
            _context.Enrollments.AddRange(enrollments);
            _context.SaveChanges();
        }
    }
}