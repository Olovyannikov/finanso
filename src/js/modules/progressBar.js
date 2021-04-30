export default () => {
    const progresses = document.querySelectorAll(".progress-bar");
    const progressInfos = document.querySelectorAll(".progress-info");

    for (let i = 0; i < progressInfos.length; i++) {
        progressInfos[i].innerHTML +=  progresses[i].getAttribute(
            "data-progress"
        );
        if (progresses[i].getAttribute("data-progress") < 4) {
            progresses[i].style.backgroundColor = "#F49617";
            progressInfos[i].style.color = "#F49617";
        }
        if (progresses[i].getAttribute("data-progress") < 3) {
            progresses[i].style.backgroundColor = "#E06364";
            progressInfos[i].style.color = "#E06364";
        }
    }

    progresses.forEach(function (progress) {
        setTimeout(() => {
            progress.style.opacity = 1;
            progress.style.width = (progress.getAttribute("data-progress") * 100 / 5) + "%";
        }, 500);
    });
};