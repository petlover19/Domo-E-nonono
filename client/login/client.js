const handleLogin = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({
        width: 'hide'
    }, 350);

    if ($("#user").val() == '' || $("#pass ").val() == '') {
        handleError("RAWR! Username or password is empty");
        return false;
    }
    console.log($("input[name=_csrf]").val());
    sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);
    return false;
}