using System.Collections.Generic;
using model;

namespace service
{
    public interface IStudentService
    {
        IEnumerable<Student> GetStuednts();
        Student GetStudent(int studentID);
        void CreateStudent(Student student);
        void UpdateStudent(Student student);
        void DeleteStudent(int studentID);
        
    }
}