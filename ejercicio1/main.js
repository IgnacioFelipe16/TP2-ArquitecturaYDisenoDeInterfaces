window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    function checkBatteryStatus() {
        navigator.getBattery().then(battery => {
            if (battery.level < 0.1 && !battery.charging) {
                loader.classList.remove('cube');
            } else {
                loader.classList.add('cube');
            }
        });
    }
    checkBatteryStatus();
    navigator.getBattery().then(battery => {
        battery.addEventListener('levelchange', checkBatteryStatus);
        battery.addEventListener('chargingchange', checkBatteryStatus);
    });
});