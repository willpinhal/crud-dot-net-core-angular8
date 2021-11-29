using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DeviceManager.Models
{
    [Table("category")]
    public class Category
    {        
        public Category()
        {
           
        }

        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
