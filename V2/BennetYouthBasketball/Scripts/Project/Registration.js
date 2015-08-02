
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
                ))
        }
    }
    ko.applyBindings(viewModel);
    $('.UpdateVariablesBeforeSending').click(function (event) {
        $('#guardian_FirstName').val(viewModel.guardian.FirstName());

    });
};