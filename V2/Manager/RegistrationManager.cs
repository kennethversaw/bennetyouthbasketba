using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataContracts;
using DataAccessors;

namespace Manager
{
    class RegistrationManager
    {
        public void AddRegistration(Guardian guardian, Player player, string connectionString)
        {
            int? guardianId = guardian.Id;

            if (guardianId == null)
            {
                GuardianAccessor guardianAccessor = new GuardianAccessor();
                guardianId=guardianAccessor.AddGuardian(guardian, connectionString);

            }

            PlayerAccessor playerAccessor = new PlayerAccessor();

            player.GuardianId = guardianId;
            playerAccessor.AddPlayer(player, connectionString);
        }
    }
}
