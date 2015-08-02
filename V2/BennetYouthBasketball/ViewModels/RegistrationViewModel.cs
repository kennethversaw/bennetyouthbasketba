using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DataContracts;
namespace BennetYouthBasketball.ViewModels
{
    public class RegistrationViewModel
    {
        public ICollection<Player> player { get; set; }
        public Guardian guardian { get; set; }
    }
}