using System.Web;
using System.Web.Optimization;

namespace GoogleBooks
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/toastr.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-resource.js",
                      "~/Scripts/angular-cookies.js",
                      "~/Scripts/angular-animate.js",
                      "~/Scripts/loading-bar.js",
                      "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                      "~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                      "~/Scripts/app/app.module.js",
                      "~/Scripts/app/app.routes.js",
                      "~/Scripts/app/bookCtrl.js",
                      "~/Scripts/app/bookService.js",
                      "~/Scripts/app/userService.js",
                      "~/Scripts/app/userCtrl.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css",
                      "~/Content/toastr.css",
                      "~/Content/loading-bar.css",
                      "~/Content/bootstrap.simplex.css"));
        }
    }
}
