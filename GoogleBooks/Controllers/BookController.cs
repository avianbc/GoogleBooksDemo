using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GoogleBooks.Controllers
{
    public class BookController : Controller
    {
        public ActionResult Index()
        {
            if (Request.IsAjaxRequest())
            {
                return PartialView();
            }

            return View();
        }

        public ActionResult Login()
        {
            return PartialView();
        }

        public ActionResult Register()
        {
            return PartialView();
        }

        [Authorize]
        public ActionResult Search()
        {
            return PartialView();
        }
    }
}
