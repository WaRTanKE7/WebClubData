var name, title, content;

// main
$(document).ready(function () {
    $("#btn_add").click(function () {
        name = $("#name").val();
        title = $("#title").val();
        content = $("#content").val();

        if (check()) {
            addMsg();
            $("input").val("");
            $("textarea").val("");
        }
    });
    
    $("#allMessage").on("click", "#btn_del", function () {
        $(this).parents("#message").remove();
    });
});

// 輸入驗證
function check() {
    if (name == "") {
        errorAlert("姓名不能為空");
        return false;
    } else if (title == "") {
        errorAlert("標題不能為空");
        return false;
    } else if (content == "") {
        errorAlert("內容不能為空");
        return false;
    } else
        return true;
}

function addMsg() {
    $("#allMessage").append(
        $("<div>")
            .attr({
                "class": "card bg-light text-dark mb-4",
                "id": "message"
            })
            .append(

                //留言姓名
                $("<div>")
                    .addClass("card-header")
                    .append(
                        $("<h2>")
                            .addClass("text-primary")
                            .html(name)
                    ),

                // 留言標題、內容
                $("<div>")
                    .addClass("card-body")
                    .append(
                        $("<h3>")
                            .addClass("card-title text-info")
                            .html(title),
                        $("<p>")
                            .addClass("card-text")
                            .html(content),
                        $("<button>")
                            .attr({
                                "class": "float-right btn btn-danger",
                                "id": "btn_del"
                            })
                            .html("刪除")
                    )
            )
    );
}

// 輸入錯誤提示
function errorAlert(errorContent) {
    $("#errorAlert").html("");
    $("#errorAlert").html(
        $("<div>")
            .addClass("alert alert-danger")
            .append(
                $("<strong>").html("錯誤！"),
                $("<span>").html(errorContent)
            )
    )
}