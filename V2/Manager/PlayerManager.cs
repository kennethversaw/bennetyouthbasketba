using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataContracts;
using DataAccessors;
namespace Manager
{
    public class PlayerManager
    {
        public void AddPlayer(Player player)
        {
            PlayerAccessor accessor = new PlayerAccessor();

           // accessor.AddPlayer(player);
        }
    }
}