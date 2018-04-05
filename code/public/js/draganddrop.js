$(init);

function init()
{
    cloneDragMe();

    $(".dragMe").draggable();
    $("#target").droppable();

    $("#target").bind("drop",    highlightTarget);
    $("#target").bind("dropout", resetTarget);
}

function cloneDragMe()
{
    for (i = 1; i <= 4; i++){
        zValue = 101 + i;
        xPos = 20*i;
        yPos = 80 + 20*i + "px";
        $(".dragMe").clone()
            .append(".dragToDrop")
            .css("left", xPos)
            .css("top", yPos)
            .css("zIndex", zValue)
            .append(" #" + i);
    }
}

function highlightTarget(event, ui)
{
    $("#target").addClass("ui-state-highlight")
        .html("Dropped ")
        .append(ui.draggable.text()).append();
}

function resetTarget(event, ui)
{
    $("#target").removeClass("ui-state-highlight")
        .html("Drop favosites on me");
}