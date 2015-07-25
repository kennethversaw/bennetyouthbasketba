using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DataAccessors;
using DataContracts;
using Common;
using System.Configuration;

namespace AccessorTests
{
    [TestClass]
    public class PlayerAccessorTest
    {
        [TestMethod]
        public void AddPlayerTest()
        {
            Player testPlayer = new Player
            {
                FirstName = "Ken",
                LastName = "Versaw",
                Grade = 3,
                Gender = Gender.Male,
                MedicalConditions = "Allegies",
                NeedUniform = true,
                JeresySize = "XL",
                NumberRequest = 41,
                Buttons = 3,
                TeamId=null,
                GuardianId=null
            };

            PlayerAccessor accessor = new PlayerAccessor();
            string connection = ConfigurationManager.ConnectionStrings["BennetYouthBasketballDb"].ConnectionString;
            accessor.AddPlayer(testPlayer, connection);

        }
    }
}
