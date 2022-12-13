document.addEventListener("DOMContentLoaded", function () {
    let rgb = 0;
    const animate = function () {
        console.log(rgb)
        rgb++;
        if (rgb <= 255) {
            document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
            requestAnimationFrame(animate);
            console.log(rgb);
        }
    }

    requestAnimationFrame(animate);
});