using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using Common;

namespace DataContracts
{
    [DataContract]
    public class Team
    {
        [DataMember]
        [Key]
        public int Id { get; set; }

        [DataMember]
        public string CoachFirstName { get; set; }

        [DataMember]
        public string CoachLastName { get; set; }

        [DataMember]
        public string CoachEmail { get; set; }

        [DataMember]
        public string CoachPhoneNumber { get; set; }

        [DataMember]
        public int Grade { get; set; }

        [DataMember]
        public Gender Gender { get; set; }
    }
}
