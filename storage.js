(function(_window) {
    if ('APP_DATA' in _window) {} else {
        _window.APP_DATA = {}
    }

    function save(key, value) {
        saveToWindow(key, value)
        saveToCookies(key, value)
        saveToLocalStorage(key, value)
    }

    function saveToWindow(key, value) {
        _window.APP_DATA[key] = value
    }

    function saveToCookies(key, value) {
        setCookie(key, value, 1)
    }

    function saveToLocalStorage(key, value){
        _window.localStorage.setItem(key, JSON.stringify(value))
    }

    //     Thanks W3 Schools: https://www.w3schools.com/js/js_cookies.asp
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }

    _window.store = {
        save: save,
        get: function(key){
            return _window.APP_DATA[key]
        },
        remove: ()=>{},
        check: ()=>{}
    }
}
)(window)
