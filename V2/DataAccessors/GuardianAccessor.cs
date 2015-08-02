using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataContracts;

namespace DataAccessors
{
    public class GuardianAccessor
    {
        public int AddGuardian(Guardian guardian, string connectionString)
        {

            int id;
            using (BennetBasketballDb db = new BennetBasketballDb(connectionString))
            {
                db.Guardians.Add(guardian);
                db.SaveChanges();
                id = guardian.Id;

            }
            return id;

        }
    }
}
