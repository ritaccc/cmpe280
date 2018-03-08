$(init);

function init()
{
    $(".resizeMe").resizable();

    $(".gallery").addClass("ui-widget")
        .addClass("ui-widget-content")
        .addClass("ui-corner-all");
    $(":header").addClass("ui-widget-header")
        .addClass("ui-corner-all");
}