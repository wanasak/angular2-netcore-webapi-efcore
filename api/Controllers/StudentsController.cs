using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using model;
using service;

namespace api
{
    [Route("api/students")]
    public class StudentController: Controller
    {
        private readonly StudentService _studentService;

        public StudentController(StudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public IEnumerable<Student> GetStudents()
        {
            return _studentService.GetStuednts();
        }

        [HttpGet("{id}")]
        public Student GetStudent(int id)
        {
            return _studentService.GetStudent(id);
        }

        [HttpPost]
        public void CreateStudent([FromBody]Student student)
        {
            _studentService.CreateStudent(student);
        }

        [HttpPut("{id}")]
        public void UpdateStudent([FromBody]Student student)
        {
            _studentService.UpdateStudent(student);
        }

        [HttpDelete("{id}")]
        public void DeleteStudent(int id)
        {
            _studentService.DeleteStudent(id);
        }
    }
}