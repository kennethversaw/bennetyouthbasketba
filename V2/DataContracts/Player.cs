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
       public class Player
    {
        [DataMember]
        [Key]
        public int Id { get; set; }

        [DataMember]
        public string FirstName { get; set; }

        [DataMember]
        public string LastName{get;set;}

        [DataMember]
        public int? Grade { get; set; }

        [DataMember]
        public Gender Gender { get; set; }

        [DataMember]
        public string MedicalConditions { get; set; }

        [DataMember]
        public bool NeedUniform { get; set; }

        [DataMember]
        public string JeresySize { get; set; }

        [DataMember]
        public int? NumberRequest { get; set; }

        [DataMember]
        public int? Buttons { get; set; }

        [DataMember]
        public int? GuardianId { get; set; }

        [DataMember]
        [ForeignKey("GuardianId")]
        public virtual Guardian Guardian { get; set; }

        [DataMember]
        public int? TeamId { get; set; }

        [DataMember]
        [ForeignKey("TeamId")]
        public virtual Team Team { get; set; }
    }
}
