document.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector('body')
    console.log(body.style.backgroundColor)
    let isDark = false
    setInterval(()=>{
        if(isDark) {
            body.style.backgroundColor = '#fff';
        } else if(!isDark) {
            body.style.backgroundColor = '#000';
        }
        isDark = !isDark
    }, 500)
})