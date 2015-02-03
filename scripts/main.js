$(document).ready(function () {

    selectContent(returnURLstringAfterHash());

    $(".navBar li").click(function () {
        var id = $(this).attr("id");
        selectContent(id);
    });


    $(window).on('hashchange', function () {
        console.log("Has has changed to : " + window.location.hash);

    });

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        paginationNumbers: true,
        mouseDrag: false

    });


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


    function selectContent(id) {

        hideAllContent();

        $(".navBar li").each(function () {
            $(this).removeClass("selected");
            $(this).addClass("unselected");
        });

        if (!$("#" + id).length) {
            console.log("Element does NOT exist");
            id = "Home";
        }
        else {
            console.log("Element does exist");

        }

        $("#"+ id).addClass("selected");
        $("#" + id).removeClass("unselected");

        switch (id) {
            case "":
            case "Home":
                window.location.hash = "#Home";
                $(".Home").show();
                break;
            case "CV":
                window.location.hash = "#CV";
                $(".CV").show();
                $("#iframe").attr("src", "David Hannaford CV.pdf"); //will not retreive url until 'CV' tab selected
                break;
            case "Portfolio":
                window.location.hash = "#Portfolio";
                $(".Portfolio").show();
                break;
            case "Contact":
                window.location.hash = "#Contact";
                $(".Contact").show();
                break;
            default:
                window.location.hash = "#Home";
                $(".Home").show();

        }

    }


    function hideAllContent() {
        $(".subSection").each(function () {
            $(this).hide();
        });
    }



});
