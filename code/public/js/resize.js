$(init);

function init()
{
    $(".resizeMe").resizable();

    $(".resizeholder").addClass("ui-widget")
        .addClass("ui-widget-content")
        .addClass("ui-corner-all");
}