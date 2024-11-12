/* Variablen */
let playButton = document.querySelector("#play_bg");
let playBack = document.querySelector("#play_back");
let playNext = document.querySelector("#play_next");
let song1 = new Audio("resources/audio/lost-in-city-lights-145038.mp3");
let song2 = new Audio("resources/audio/forest-lullaby-110624.mp3");
let songlist = [song1, song2];
let player = document.querySelector("#player");
let currentSongIndex = 0;
let currentSong = songlist[currentSongIndex];
let songContainer = document.querySelector("#song_container");
let controls = document.querySelector("#controls");
let progressBar = document.querySelector("#prg_drag");

let progressContainer = document.querySelector("#bar");
let progressFill = document.querySelector("#prg_bar_fill");
let playtimeDisplay = document.querySelector("#playtime");
let durationDisplay = document.querySelector("#duration");

/* Listener */

playButton.addEventListener("click", playMusic);
playBack.addEventListener("click", restartSong);
playNext.addEventListener("click", nextSong);
currentSong.addEventListener("timeupdate", updateProgress);
currentSong.addEventListener("canplay", () => {
    durationDisplay.textContent = formatTime(currentSong.duration);
});
progressBar.addEventListener("click", progressClick);

/* Functions */

function playMusic() {
    if(currentSong.paused == true) {
        currentSong.play();
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/pause-button-svgrepo-com.svg" title="" alt="" id="pause" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
    } else {
        currentSong.pause();
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/Play_fill.svg" title="" alt="" id="play" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
    }
}

function restartSong() {
    if(currentSongIndex == 0){
        currentSong.currentTime = 0;
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/pause-button-svgrepo-com.svg" title="" alt="" id="pause" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSongIndex -= 1;
        currentSong = songlist[currentSongIndex];
        console.log(currentSongIndex);
        currentSong.addEventListener("timeupdate", updateProgress);
        currentSong.addEventListener("canplay", () => {
            durationDisplay.textContent = formatTime(currentSong.duration);
        });
        songContainer.innerHTML = `
        <div id="song_container">
                <img src="resources/images/cover-1.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Lost in the City Lights</h2>
                    <p id="artist_name">Cosmo Sheldrake</p>
                </div>
            </div>
        `;
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/pause-button-svgrepo-com.svg" title="" alt="" id="pause" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
    }
    currentSong.play();
}

function nextSong() {
    if(currentSongIndex == 1) {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSongIndex -= 1;
        currentSong = songlist[currentSongIndex];
        console.log(currentSongIndex);
        currentSong.addEventListener("timeupdate", updateProgress);
        currentSong.addEventListener("canplay", () => {
            durationDisplay.textContent = formatTime(currentSong.duration);
        });  
        songContainer.innerHTML = `
        <div id="song_container">
                <img src="resources/images/cover-1.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Lost in the City Lights</h2>
                    <p id="artist_name">Cosmo Sheldrake</p>
                </div>
            </div>
        `;
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/pause-button-svgrepo-com.svg" title="" alt="" id="pause" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
        currentSong.play();
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSongIndex += 1;
        currentSong = songlist[currentSongIndex];
        console.log(currentSongIndex);
        currentSong.addEventListener("timeupdate", updateProgress);
        currentSong.addEventListener("canplay", () => {
            durationDisplay.textContent = formatTime(currentSong.duration);
        });
        songContainer.innerHTML = `
        <div id="song_container">
                <img src="resources/images/cover-2.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Forest Lullaby</h2>
                    <p id="artist_name">Lesfm</p>
                </div>
            </div>
        `;
        controls.innerHTML = `
        <div id="controls">
                <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                <div id="play_bg" onclick="playMusic()">
                    <img src="resources/icons/pause-button-svgrepo-com.svg" title="" alt="" id="pause" >
                </div>
                <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
            </div>
        `;
        currentSong.play();
    }
}

function updateProgress() {
    const progressPercent = (currentSong.currentTime / currentSong.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;

    playtimeDisplay.textContent = formatTime(currentSong.currentTime);

    if (isNaN(currentSong.duration)) {
        durationDisplay.textContent = "0:00";
    } else if (durationDisplay.textContent === "0:00") {
        durationDisplay.textContent = formatTime(currentSong.duration);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function progressClick(e) {
    let width = progressContainer.clientWidth;
    let clickx = e.offsetX;
    let duration = currentSong.duration;

    currentSong.currentTime = (clickx / width) * duration;
}