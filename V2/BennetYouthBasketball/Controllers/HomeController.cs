using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BennetYouthBasketball.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView("_Home");
        }

        public ActionResult Register()
        {
            return PartialView("_Register");
        }
    }
}