console.log("lets write some javascript");
let currentSong = new Audio();
let songs;
let audio = new Audio();
let duration = document.getElementById("duration");

let currentTime = document.getElementById("currentTime");
let vol = document.getElementById("volrange");
let volValue = document.getElementById("volValue");
let tempvol;
console.log(vol.value);


// Function to convert seconds to minutes in the format mm:ss
function convertSecondsToMinutes(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// var playbtn;

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }

    return songs;

};



const playMusic = (track) => {
    console.log("Playing track: " + track);
    audio = new Audio("/songs/" + track)
    audio.volume = vol.value / 100;
    audio.play();
    // currentSong=audio;


    return audio;
};







(async function () {


    //get the songs from the server
    songs = await getSongs();


    //show all the song in the playlist
    let songUL = document.querySelector("#aside2").getElementsByTagName("ul")[0];
    let i = 0;
    for (const song of songs) {
        // console.log("Song :"+song.replaceAll("%20"," "));
        let songTitle = song.split("-")[0].replaceAll("%20", " ");

        // console.log("Song Title :"+songTitle.replaceAll("%20"," "));
        let artist = song.split("-")[1];

        // console.log("Artist :"+artist.replaceAll("%20"," "));
        let artistName = artist.split(".")[0].replaceAll("%20", " ").replaceAll("_", ". ");
        // console.log("Artist Name :"+artistName.replaceAll("%20"," "));

        songUL.innerHTML = songUL.innerHTML + `<li id="${i}"> 
       
       
                        <img src="img/music.svg" class="icon" alt="" title="Songs" srcset="">
                        <div>
                            <h4>Title : ${songTitle}</h4>
                            <p>Artist : ${artistName}</p>
                        </div>
                        <img id="i" src="img/play.svg" alt="" class="icon" title="Play" srcset="">
                    </li>`;
        i++;
    }

    //Attache to event listener to each song
    Array.from(document.querySelectorAll("#aside2 ul li")).forEach(e => {

        e.addEventListener("click", element => {
            if (audio.played) {
                console.log(audio.played)
                audio.pause();

            }
            duration.innerText = "0:00";
            currentTime.innerText = "0:00";
            // duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));

            document.getElementById("player").style.visibility = "visible";

            console.log(e.querySelector("h4").innerHTML);
            document.getElementById("songdetail").innerHTML = `<h3>${e.querySelector("h4").innerHTML}</h3> <p>${e.querySelector("p").innerHTML}</p>`;



            // let currentplaying = e.querySelector("#i");
            // currentplaying.src = "/img/pause.svg";
            // console.log(currentplaying)

            currentSong = songs[e.id];
            console.log("Current Song :" + e.querySelector("h4").innerHTML.split(":")[1]);
            playMusic(currentSong);
            console.log("Playing..." + e.querySelector("h4").innerHTML.split(":")[1]);//playing.. Song Name
            play.src = "/img/pause.svg";

        })
    });

    // Attache event listner to play, next and previous button
    let play = document.getElementById("playbtns").getElementsByTagName("img")[1];
    play.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            console.log("Continue... " + audio.src.split("/songs/")[1].split("-")[0].replaceAll("%20", " "))
            play.src = "/img/pause.svg";
        }
        else {
            audio.pause();
            console.log(audio.src.split("/songs/")[1].split("-")[0].replaceAll("%20", " ") + "Stopped");
            play.src = "/img/play.svg";
        }
    });

    //Attache event to cross button
    let closebtn = document.getElementById("cross");
    // console.log(closebtn);
    let player = document.getElementById("player");
    closebtn.addEventListener("click", () => {
        player.style.visibility = "hidden";
        audio.pause();
        console.log(audio.src.split("/songs/")[1].split("-")[0].replaceAll("%20", " ") + "Closed");

    });

    //listen for timeupdate event


    if (audio.paused) {

        setInterval(() => {
            duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));
            currentTime.innerText = convertSecondsToMinutes(Math.floor(audio.currentTime));
            let circle = document.getElementById("circle");
            circle.style.left = ((audio.currentTime / audio.duration) * 100) -2 + "%";
        }, 1000);
    }



    //Add an event listener for seekbar
    let seekbar = document.getElementById("seekbar");
    seekbar.addEventListener("click", (e) => {


        let seekbarWidth = seekbar.offsetWidth;
        let clickX = e.offsetX;
        let percentage = (clickX / seekbarWidth);
        audio.currentTime = percentage * audio.duration;
        console.log("Seeked to: " + audio.currentTime);


        //SECOND WAY TO SEEK
        // let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
        // let circle = document.getElementById("circle");
        // circle.style.left = percent+"%";
        // audio.currentTime=((audio.duration*percent)/100);

    });


    //Add an event listener for previous next button
    let previous = document.getElementById("prevbtn");
    previous.addEventListener("click", () => {
        console.log("prev clicked");
        audio.pause();
        let index = songs.indexOf(currentSong);
        console.log(songs, index);
        console.log(index - 1 >= 0);
        console.log(songs.length);
        console.log(index - 1);

        if (index - 1 >= 0) {
            console.log(songs[index - 1]);
            playMusic(songs[index - 1]);
            currentSong = songs[index - 1];
            document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
        }
        else {
            playMusic(currentSong)
        }
    });


    let next = document.getElementById("nextbtn");
    next.addEventListener("click", () => {
        console.log("Next clicked");
        audio.pause();
        let index = songs.indexOf(currentSong);
        console.log(index + 1 < songs.length);
        console.log(songs.length);
        console.log(index + 1);

        if (index + 1 < songs.length) {
            console.log(songs[index + 1]);
            playMusic(songs[index + 1]);
            currentSong = songs[index + 1];
            console.log(currentSong);

            document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
        }
        else {
            playMusic(currentSong)
        }


    });

    //Add an event on volume
    vol.addEventListener("change", (e) => {
        console.log(e.target.value);
        audio.volume = parseInt(e.target.value) / 100;
volValue.innerText=`${e.target.value} %`;
        if (vol.value == 0) {
            document.getElementById("volimg").src = "img/mute.svg";
        }
        else {
            document.getElementById("volimg").src = "img/volume.svg";

        }
    })
    document.getElementById("volimg").addEventListener("click", (e) => {
        // tempvol=vol.value;
        if (vol.value != 0) {
            console.log(vol.value);

            tempvol = parseInt(vol.value);
            vol.value = 0;
            audio.volume = 0;
            e.target.src = "img/mute.svg";
            volValue.innerText=`${vol.value} %`;
            console.log(tempvol);
        }
        else if (vol.value == 0) {
            vol.value = tempvol;
            e.target.src = "img/volume.svg";
            console.log(tempvol);
            console.log(vol.value);
            volValue.innerText=`${vol.value} %`;
            audio.volume = parseInt(vol.value) / 100;
        }

    })







})();