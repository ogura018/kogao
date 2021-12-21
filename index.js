let box = document.querySelectorAll('.box');
let agoBox = document.querySelector('.box__ago');
let eyeBox = document.querySelector('.box__eye');

let _v_stretch_random = ["stretch01"];
let _v_niko_random = ["nikoniko01", "nikoniko02"];
let _v_aiueo_random = ["aiueo01", "aiueo02"];

let _v_stretch = 1 + Math.floor(Math.random() * 3);
let _v_niko = 1 + Math.floor(Math.random() * 2);
let _v_aiueo = 1 + Math.floor(Math.random() * 2);

function parts(p) {
    if (p == "eye") {
        localStorage.setItem(`"${p}"`, `http://noncha.net/video/stretch0${_v_stretch}`);
        console.log(p);
    } else if (p == "cheek") {
        localStorage.setItem(`"${p}"`, `http://noncha.net/video/aiueo0${_v_aiueo}`);
        console.log(p);
    } else if (p == "mouse") {
        localStorage.setItem(`"${p}"`, 'http://noncha.net/video/guruguru01');
        console.log(p);
    } else if (p == "faceline") {
        localStorage.setItem(`"${p}"`, `http://noncha.net/video/nikoniko0${_v_niko}`);
        console.log(p);
    };
};

function ClearStorageItem() {
    localStorage.clear();
};

box.forEach(element => {
    element.addEventListener("click", () => {
        setInterval(ClearStorageItem(), 5000);
    });
});


for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {

        parts(box[i].getAttribute("data-id"));
        window.location.href = 'video.html';

    });
};





let videoBG = document.querySelector('.video');

let countText = document.querySelector('.video__text');

const COUNT_IMG = document.getElementById("video__text_img");
console.log(countText.innerHTML);
let _count = 4;

console.log(_count);







window.addEventListener('load', () => {
    countdown();
});

let count = 4;
let countdown = function () {
    console.log(count--);
    let id = setTimeout(countdown, 1000);
    countText.innerHTML = count;
    if (count < 1) {
        if (count == 0) {
            countText.textContent = "GO";
            countText.style.display = "none";

            let newVideo = document.createElement('video');
            newVideo.className = 'videowaku';


            for (let i = 0; i < localStorage.length; i++) {
                newVideo.src = `${localStorage.getItem(localStorage.key(i))}.mp4`;
            };

            newVideo.controls = true;
            newVideo.autoplay = true;
            newVideo.muted = true;
            document.getElementById('videodouga').appendChild(newVideo);
        };

        clearTimeout(id);
    };
};



// camera
async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ 'audio': true, 'video': true });
    const video = document.getElementById('video');
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            video.width = video.videoWidth / 3;
            video.height = video.videoHeight / 3;
            resolve();
        };
    });
}

async function start() {
    await setupCamera();
    const deviceInfos = await navigator.mediaDevices.enumerateDevices();
    deviceInfos.forEach(deviceInfo => {
        console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
    });
    const constraints = await navigator.mediaDevices.getSupportedConstraints();
    for (const [key, value] of Object.entries(constraints)) {
        console.log(`${key}: ${value}`);
    };
    navigator.mediaDevices.ondevicechange = function (event) {
        console.log("ondevicechange", event)
    };
};

window.addEventListener('load', async () => {
    if (!navigator.permissions || !navigator.permissions.query) {
        console.log("this browser doesn't have permission API", navigator.userAgent)
    };
    if (!navigator.mediaDevices.getDisplayMedia) {
        console.log("this browser doesn't have getDisplayMedia", navigator.userAgent)
    };
    const deviceInfos = await navigator.mediaDevices.enumerateDevices();
    deviceInfos.forEach(deviceInfo => {
        console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
    });
});




/* let stampBtn = document.querySelector(".stamp__btn"); */