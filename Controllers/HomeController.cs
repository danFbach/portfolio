using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test.Models;

namespace test.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            @ViewData["Page Name"] = "HOME";
            @ViewData["Title"] = "Test Home";
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";
            @ViewData["Page Name"] = "About";
            @ViewData["Title"] = "Aboute";
            return View();
        }

        public IActionResult Contact()
        {
            @ViewData["Page Name"] = "Contact";
            ViewData["Message"] = "Your contact page.";
            @ViewData["Title"] = "Contact";
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
