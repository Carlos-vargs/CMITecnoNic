using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CMISentinelPrime.Startup))]
namespace CMISentinelPrime
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
