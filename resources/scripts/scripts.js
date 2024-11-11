/* Variablen */
let playButton = document.querySelector("#play");
let playBack = document.querySelector("#play_back");
let playNext = document.querySelector("#play_next");
let song1 = new Audio("resources/audio/lost-in-city-lights-145038.mp3");
let song2 = new Audio("resources/audio/forest-lullaby-110624.mp3");
let songlist = [song1, song2];
let player = document.querySelector("#player");
let currentSongIndex = 0;
let currentSong = songlist[currentSongIndex];

/* Listener */
playButton.addEventListener("click", playMusic);
playBack.addEventListener("click", restartSong);
playNext.addEventListener("click", nextSong);

/* Functions */

function playMusic() {
    if(currentSong.paused == true) {
        currentSong.play();
    } else {
        currentSong.pause();
    }
}

function restartSong() {
    
    if(currentSongIndex == 0){
        currentSong.currentTime = 0;
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSongIndex -= 1;
        currentSong = songlist[currentSongIndex];
        console.log(currentSongIndex);
        player.innerHTML = `
        <div id="player">
                <img src="resources/images/cover-1.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Lost in the City Lights</h2>
                    <p id="artist_name">Cosmo Sheldrake</p>
                </div>
                <div id="progresscontainer">
                    <div id="times">
                        <p id="playtime">2:33</p>
                        <p id="duration">3:23</p>
                    </div>
                    <div id="bar">
                        <div id="prg_bar_fill"></div>
                        <div id="prg_bar"></div>
                    </div>
                </div>
                <div id="controls">
                    <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                    <div id="play_bg">
                        <img src="resources/icons/Play_fill.svg" title="" alt="" id="play" onclick="playMusic()">
                    </div>
                    <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
                </div>
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
        player.innerHTML = `
        <div id="player">
                <img src="resources/images/cover-1.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Lost in the City Lights</h2>
                    <p id="artist_name">Cosmo Sheldrake</p>
                </div>
                <div id="progresscontainer">
                    <div id="times">
                        <p id="playtime">2:33</p>
                        <p id="duration">3:23</p>
                    </div>
                    <div id="bar">
                        <div id="prg_bar_fill"></div>
                        <div id="prg_bar"></div>
                    </div>
                </div>
                <div id="controls">
                    <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                    <div id="play_bg">
                        <img src="resources/icons/Play_fill.svg" title="" alt="" id="play" onclick="playMusic()">
                    </div>
                    <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
                </div>
            </div>
        `;
        currentSong.play();
    } else {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentSongIndex += 1;
        currentSong = songlist[currentSongIndex];
        console.log(currentSongIndex);
        player.innerHTML = `
        <div id="player">
                <img src="resources/images/cover-2.png" title="" alt="" id="song_img">
                <div id="song_data">
                    <h2 id="song_name">Forest Lullaby</h2>
                    <p id="artist_name">Lesfm</p>
                </div>
                <div id="progresscontainer">
                    <div id="times">
                        <p id="playtime">0:00</p>
                        <p id="duration">3:23</p>
                    </div>
                    <div id="bar">
                        <div id="prg_bar_fill"></div>
                        <div id="prg_bar"></div>
                    </div>
                </div>
                <div id="controls">
                    <img src="resources/icons/Stop_and_play_fill-1.svg" title="" alt="" id="play_back" onclick="restartSong()">
                    <div id="play_bg">
                        <img src="resources/icons/Play_fill.svg" title="" alt="" id="play" onclick="playMusic()">
                    </div>
                    <img src="resources/icons/Stop_and_play_fill.svg" title="" alt="" id="play_next" onclick="nextSong()">
                </div>
            </div>
        `;
        currentSong.play();
    }
    
}