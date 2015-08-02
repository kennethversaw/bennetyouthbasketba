using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataContracts;

namespace DataAccessors
{
    public class PlayerAccessor
    {
        public void AddPlayer(Player player, string connectionString)
        {


            using (BennetBasketballDb db = new BennetBasketballDb(connectionString))
            {
                db.Players.Add(player);
                db.SaveChanges();
            }



        }

    }
}
