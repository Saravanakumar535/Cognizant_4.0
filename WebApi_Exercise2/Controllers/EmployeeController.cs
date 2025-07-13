using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebApi_Exercise2.Controllers
{
    public class Employee
    {
        public string Name { get; set; }
    }

    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        static List<string> employees = new List<string> { "Ram", "Arun", "Maha" };

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return employees;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            if (string.IsNullOrEmpty(emp.Name))
                return BadRequest("Name is required");

            employees.Add(emp.Name);
            return Created("", emp.Name);
        }
    }
}
