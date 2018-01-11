$(document).ready(function(){

	console.log("functions here");

	$("#defaultOpen").click();

    $(".twenty-container").twentytwenty();

    $('.tab_display').on('click', function(){
        var parent = $(this).parent(); 
        parent.find('div.colapse_content').slideToggle("slow");
    });

    $('.nowadays_btn').on('click', function(){
        console.log('click');
        $(this).addClass('active');
        $(this).parent().find('.comparison_btn').removeClass('active');

        $(this).parent().parent().find('.figure_container1').hide();
        $(this).parent().parent().find('.figure_container2').show();
    });

    $('.comparison_btn').on('click', function(){
        console.log('click');
        $(this).addClass('active');
        $(this).parent().find('.nowadays_btn').removeClass('active');

        $(this).parent().parent().find('.figure_container1').show();
        $(this).parent().parent().find('.figure_container2').hide();
    });

});//END DOCUMENT READY

function opentab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

