using DeviceManager.Context;
using DeviceManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeviceManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeviceController : Controller
    {
        private readonly ILogger<DeviceController> _logger;

        private readonly AppDbContext _context;

        public DeviceController(ILogger<DeviceController> logger, AppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Device> Get()
        {
            return _context.Devices.Include(c => c.Category).ToList();
        }

        [HttpGet("{id}", Name = "GetDevice")]
        public ActionResult<Device> Get(int id)
        {
            var device = _context.Devices.AsNoTracking().FirstOrDefault(c => c.Id == id);

            if (device == null)
            {
                return NotFound();
            }

            return device;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Device device)
        {
            _context.Devices.Add(device);
            _context.SaveChanges();

            return new CreatedAtRouteResult("GetDevice", new { id = device.Id }, device);
        }

        [HttpDelete]
        public ActionResult<Device> Delete(int id)
        {
            var device = _context.Devices.FirstOrDefault(c => c.Id == id);

            if (device == null)
            {
                return NotFound();
            }

            _context.Devices.Remove(device);
            _context.SaveChanges();
            return device;
        }
    }
}
