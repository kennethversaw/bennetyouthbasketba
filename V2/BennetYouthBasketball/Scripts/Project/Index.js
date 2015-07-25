$('li').click(function (e) {
    var $this = $(this);
    $('li.menuLink').removeClass('active');
    $this.addClass("active");
    $('a.active').removeClass();
    $this.find('a').addClass('active');
});
