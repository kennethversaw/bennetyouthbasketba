
var player = function (firstName, lastName, grade, gender, medicalConditions, needJeresy, jeresySize, numberRequest, buttons) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Grade = grade;
    this.Gender = gender;
    this.MedicalConditions = medicalConditions;
    this.NeedJeresy = needJeresy;
    this.JeresySize = jeresySize;
    this.NumberRequest = numberRequest;
    this.Buttons = buttons;
    alert("Player registration successfully added");
    $('#playerFirstName').val("")
    $('#playerLastName').val("")
    $('#playerGrade').val("")
    $('#playerGender').val("")
    $('#playerMedicalConditions').val("")
    $('#playerNeedJeresy').val("")
    $('#playerJeresySize').val("")
    $('#playerNumberRequest').val("")
    $('#playerButtons').val("")
}

function SetRegistrationViewModel() {
    var self = this;
    var viewModel = {
        guardian: {
            FirstName: ko.observable(""),
            LastName: ko.observable(""),
            Email: ko.observable(""),
            PhoneNumber: ko.observable(""),
        },
        players: ko.observableArray(null),
        save: function () {
            $.ajax({
                type: "POST",
                url: "/Home/Registration",
                data: ko.toJSON(viewModel),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $("#resultCount").html(data);
                }
            })
        },
        addRegistration: function () {         
            this.players.push(new player(
                $('#playerFirstName').val(),
                $('#playerLastName').val(),
                $('#playerGrade').val(),
                $('#playerGender').val(),
                $('#playerMedicalConditions').val(),
                $('#playerNeedJeresy').val(),
                $('#playerJeresySize').val(),
                $('#playerNumberRequest').val(),
                $('#playerButtons').val()
                ));
           this.UpdateTotals();
            //this.registrationSubTotal(this.registrationSubTotal() + 25);
        },
        registrationSubTotal: ko.observable(0),
        jeresyTotal: ko.observable(0),
        buttonTotal: ko.observable(0),
        donationTotal: ko.observable(0),
        totalTotal: ko.observable(0),
        UpdateTotals: function () {
            this.registrationSubTotal(this.players().length * 25);
            var needJeresys = JSLINQ(this.players).Where(function (item) { return item.NeedJeresy() == "on"; }).Select(function(item){ return item.FirstName; });
            this.jeresyTotal(0);
        }
       // totalTotal: ko.computed(function () {
       //     return this.registrationSubTotal() + this.jeresyTotal() + this.buttonTotal() + this.donationTotal();
       //}, this)
    };
    ko.applyBindings(viewModel);  
};