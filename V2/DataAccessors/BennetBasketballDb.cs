using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using DataContracts;
using System.Data.Entity.Core.EntityClient;
namespace DataAccessors
{
    public class BennetBasketballDb : DbContext
    {
        public DbSet<Player> Players { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Guardian> Guardians { get; set; }

        public BennetBasketballDb(string connectionString)
        {

            //  Database.Connection.ConnectionString = ConfigurationManager.ConnectionStrings["BennetYouthBasketballDb"].ConnectionString;
            try
            {

                EntityConnectionStringBuilder enntityConnectionString = new EntityConnectionStringBuilder();
                enntityConnectionString.Provider = "System.Data.SqlClient";
                enntityConnectionString.ProviderConnectionString = connectionString;

                Database.Connection.ConnectionString = enntityConnectionString.ProviderConnectionString;
                Database.SetInitializer<BennetBasketballDb>(null);

            }
            catch(Exception ex)
            {

            }



        }
    }
}
