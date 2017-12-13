using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test.Models;

namespace test.Controllers
{
    public class PackagesController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Page Name"] = "PackagesHome";
            ViewData["Title"] = "Packages Home";
            return View();
        }
        public IActionResult anIcons()
        {
            ViewData["Page Name"] = "anIconsHome";
            ViewData["Title"] = "anIcons Home";
            return View();
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
