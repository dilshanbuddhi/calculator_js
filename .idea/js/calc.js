function checkdisplay() {
    if ($("#display").val() === 'Error') {
        $("#display").val('');
    }
}

$("#num1").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '1');
});

$("#num2").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '2');
});

$("#num3").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '3');
});

$("#num4").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '4');
});

$("#num5").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '5');
});

$("#num6").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '6');
});

$("#num7").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '7');
});

$("#num8").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '8');
});

$("#num9").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '9');
});

$("#num0").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '0');
});

$("#\\+").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '+');
});

$("#\\-").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '-');
});

$("#\\*").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '*');
});

$("#\\/").on('click', function () {
    checkdisplay();
    $("#display").val($("#display").val() + '/');
});

$("#clear").on('click', function () {
    checkdisplay();
    $("#display").val('');
});

$("#delete").on('click', function () {
    const currentValue = $("#display").val();
    $("#display").val(currentValue.slice(0, -1));
});

$("#equal").on('click', function () {
    checkdisplay();
    let value = $("#display").val();
    try {
        $("#display").val(eval(value));
    } catch (e) {
        $("#display").val('Error');
    }
});
