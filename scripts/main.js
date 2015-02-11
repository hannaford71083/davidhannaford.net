$(document).ready(function () {

    CurrentPageView = "Home"; //default value

    //on page load, default to home if nothing after # 
    (window.location.hash == "") ? selectContent("Home") : selectContent(returnURLstringAfterHash());

    //Nav click event handler
    $(".navBar li").click(function () {
        var id = $(this).attr("id");
        selectContent(id);
    });

    //Hash navigation change handler 
    $(window).on('hashchange', function () {
        var hash = window.location.hash;        
        var prospectiveID = hash.substr(1, hash.length); //remove # char from hash string
        selectContent(prospectiveID);
    });

    generateThumnails();

    //Carousel as used in Portfolio
    $("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        paginationNumbers: true,
        mouseDrag: true

    });

    //'Lightbox' Picture viewer for Portfolio articles
    $(".fancybox-button").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,
        helpers: {
            title: { type: 'inside' },
            buttons: {}
        }
    });



    function returnURLstringAfterHash() {
        var returnString = window.location.hash;
        var arr = returnString.split("#");
        return arr[1];
    }

    //Route page dependent in ID
    function selectContent(id) {

        // element with id exists
        if (!$("#" + id).length) { id = CurrentPageID; } 

        SelectNavButton(id);
        SelectContent(id);

        //Additional actions
        switch (id) {
            case "CV":
                //Browser requests file only when CV tab selected AND only once
                var CVFileName = "David Hannaford CV.pdf";
                if ($("#iframe").attr("src") != CVFileName) {
                    //will not retreive url until 'CV' tab selected
                    $("#iframe").attr("src", CVFileName);
                }
                break;
            default:
                //no actions
        }

        CurrentPageID = id;
        
    }


    function SelectContent(id) {
        hideAllContent();
        window.location.hash = "#" + id;
        $("." + id).show();
    }

    // Adds/removes css class for Nav button indents
    function SelectNavButton(id) {
        $(".navBar li").each(function () {
            $(this).removeClass("selected");
            $(this).addClass("unselected");
        });
        $("#" + id).addClass("selected");
        $("#" + id).removeClass("unselected");
    }


    function hideAllContent() {
        $(".subSection").each(function () {
            $(this).hide();
        });
    }


    /*
    Generate all thumnail HTML from a JSON object - include HTML code below in index.html 'Portfolio' section 

    <div class="createThumbnails"></div>
    */
    function generateThumbnailElement() {
        var element;
        element += "<a class='fancybox-button' rel='fancybox-button' href='images/Zetica_RASC_DC_main.png' title='Screenshot of main dash board'>";
        element += "<img class='thumbnail' src='images/Zetica_RASC_DC_main.png' alt='' />";
        element += "</a>"
        return element;
    }

    //included before owl slider is instantiated
    function generateThumnails() {
        $(".createThumbnails").append(generateThumbnailElement());
    }


});
