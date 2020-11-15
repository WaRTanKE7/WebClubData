$(document).ready(function () {

    var img = ["../Assets/image/剪刀.jpg", "../Assets/image/石頭.jpg", "../Assets/image/布.jpg"];

    function random_determine() {
        computer = (parseInt(Math.random() * 3));
        $("#com-determine").attr("src", img[computer]);
        return computer;
    }

    function result(user, computer) {
        var result = user - computer;
        if (result === -1 || result === 2) {            // -1 : 石頭 - 布 = 1 - 2  剪刀 - 石頭 = 0 - 1 , 2 : 布 - 剪刀 = 2 - 0
            $("#result-block").attr("class", "alert alert-danger");
            $("#result").html("你 輸 了！");

        } else if (result === 1 || result === -2) {     //  1 : 布 - 石頭 = 2 - 1  石頭 - 剪刀 = 1 - 0 , -2 : 剪刀 - 布 = 0 - 2
            $("#result-block").attr("class", "alert alert-success");
            $("#result").html("你 贏 了！");

        } else {
            $("#result-block").attr("class", "alert alert-warning");
            $("#result").html("平手");

        }
    }

    $(".user_choice").on('click', function () {
        btn_id = $(this).attr("id");
        if (btn_id == "scissors") {
            $("#user_determine").attr("src", img[0]);
            result(0, random_determine());
        }
        else if (btn_id == "stone") {
            $("#user_determine").attr("src", img[1]);
            result(1, random_determine());
        }
        else {
            $("#user_determine").attr("src", img[2]);
            result(2, random_determine());
        }
    });
});