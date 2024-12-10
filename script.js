$(document).ready(function () {
    let timer = null; // 設置初始值為 null
    let seconds = 25 * 60; // 預設 25 分鐘
    let notpause = true;

    // 格式化時間顯示
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // 計時功能
    function tik() {
        if (timer !== null) return; // 如果計時器已啟動，直接返回
        timer = setInterval(() => {
            if (seconds > 0) {
                if(notpause)
                    seconds--;
                $("#timer").text(formatTime(seconds));
                console.log($("#timer").text());
            } else {
                clearInterval(timer);
                timer = null; // 重置計時器狀態
                alert("時間到！");
            }
        }, 1000);
    }

    function pause()
    {
        notpause = !notpause;
    }

    function stop()
    {
        clearInterval(timer);
        timer = null; // 重置計時器狀態
        seconds = 25 * 60; 
        $("#timer").text(formatTime(seconds));
    }

    // 綁定按鈕點擊事件
    $("#start-button").on("click", tik);

    $("#pause-button").on("click", pause);

    $("#stop-button").on("click", stop);
});
