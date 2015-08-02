using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BennetYouthBasketball.ViewModels;
using DataContracts;

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
            RegistrationViewModel rvm = new RegistrationViewModel { guardian = new Guardian(), player = new List<Player>() };
            return PartialView("_Register", rvm);
        }

        [HttpPost]
        public ActionResult Registration(RegistrationViewModel rvm)
        {
           return RedirectToAction("Register");
        }
    }
}