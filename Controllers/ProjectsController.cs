using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test.Models;

namespace test.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Page Name"] = "ProductsHome";
            ViewData["Title"] = "Products Home";
            return View();
        }
        public IActionResult battery()
        {
            ViewData["Page Name"] = "BatteryProducts";
            ViewData["Title"] = "BatteryProducts";
            return View();
        }
        public IActionResult NSI()
        {
            ViewData["Page Name"] = "NSI";
            ViewData["Title"] = "NSI";
            return View();
        }
        public IActionResult RoughRhino()
        {
            ViewData["Page Name"] = "RoughRhino";
            ViewData["Title"] = "Rough Rhino";
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
