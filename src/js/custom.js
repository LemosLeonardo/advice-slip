const URL_API = 'https://api.adviceslip.com/advice'

function getAdvice() {
    //ADD SPIN ON BUTTON
    $('#getAdvice').html("<span class='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span><span class='spinner-grow spinner-grow-sm mx-2' role='status' aria-hidden='true'></span><span class='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span>").attr("disabled", true);

    //REQUEST
    $.ajax({
        type: "GET",
        url: URL_API,
        success: function (data) {
            let result = JSON.parse(data);
            $('#content').html("<h1 class='advice'>&ldquo;" + result.slip.advice + "&rdquo;</h1>");
            $('#getAdvice').html("Try Again").attr("disabled", false);
        }
    });
}
