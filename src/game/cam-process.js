let delay = 0
let cursorX=0
let cursorY=0

async function setupCamera() {
    const video = document.createElement('video');

    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
    });

    video.srcObject = stream;

    await new Promise((resolve) => {
        video.onloadedmetadata = () => resolve(video);
    });

    video.play();

    const canvas = document.getElementById('cameraCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight * 0.5;

    //flip
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    const hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5,
    });
