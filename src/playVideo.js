function playVideo(stream, idVideo) {
    console.log("playVideo:"+stream);
    const video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = function () {
        video.play();
    };
}

module.exports = playVideo;