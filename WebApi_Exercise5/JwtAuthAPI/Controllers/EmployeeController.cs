using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin,POC")]  // ✅ Secured with roles
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var employees = new[]
            {
                new { Id = 1, Name = "Saravana", Department = "IT", Salary = 50000 },
                new { Id = 2, Name = "Kumar", Department = "HR", Salary = 45000 }
            };

            return Ok(employees);
        }
    }
}
