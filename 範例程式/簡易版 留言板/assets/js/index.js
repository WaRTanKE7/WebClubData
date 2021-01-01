var name, title, content;
var id = 0;

$(document).ready(function () {
    $("#addMsg").click(function () {
        name = $("#name").val();
        title = $("#title").val();
        content = $("#content").val();
        console.log(name, title, content);

        addMsg();

        $("input").val("");
        $("textarea").val("");
    });

    $("#allMessage").on("click", "#delMsg", function () {
        $(this).parents("#message").remove();
    });
});

function addMsg() {
    var msgDiv = $("<div>");
    id++;
    msgDiv.attr("id", "message");
    msgDiv.append(
        $("<h2>").html(id + "樓：" + name),
        $("<h3>").html(title),
        $("<p>").html(content),
        $("<button>").html("刪除").attr("id", "delMsg")
    );

    $("#allMessage").append(msgDiv);
}