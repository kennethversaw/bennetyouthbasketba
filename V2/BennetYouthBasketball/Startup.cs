using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BennetYouthBasketball.Startup))]
namespace BennetYouthBasketball
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
