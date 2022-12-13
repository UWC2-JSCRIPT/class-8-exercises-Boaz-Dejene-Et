document.addEventListener("DOMContentLoaded", function () {
    const maintenanceWrapper = document.getElementById('maintenance-notice');
    setTimeout(()=>{
        maintenanceWrapper.remove()
    },5000)
})