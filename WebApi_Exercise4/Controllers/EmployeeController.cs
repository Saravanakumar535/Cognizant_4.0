using Microsoft.AspNetCore.Mvc;
using WebApi_Exercise4.Data;

namespace WebApi_Exercise4.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDbContext _context;

        public EmployeeController(EmployeeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Employees.ToList());
        }
    }
}
