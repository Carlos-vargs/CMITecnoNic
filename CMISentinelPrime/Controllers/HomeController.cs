﻿using System.Web.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace CMISentinelPrime.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //get data 
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}