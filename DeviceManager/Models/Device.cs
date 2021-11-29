using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeviceManager.Models
{
    [Table("device")]
    public class Device
    {
        [Key]
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string Color { get; set; }

        public int PartNumber { get; set; }

        public virtual Category Category { get; set; }
    }
}
