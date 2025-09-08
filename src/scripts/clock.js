const clock = (() => {
    const clockElmt = document.querySelector('.clock');

    function updateClock() {
        let date = new Date();

        let hour = ('0' + date.getHours()).slice(-2);
        let minute = ('0' + date.getMinutes()).slice(-2);
        let second = ('0' + date.getSeconds()).slice(-2);

        clockElmt.textContent = `${hour}:${minute}:${second}`;
    }

    function setUp() {
        setInterval(updateClock, 1000);
    }

    return { setUp };
})();
export { clock };
