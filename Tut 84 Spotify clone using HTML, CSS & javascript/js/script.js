console.log("lets write some javascript");
let currentSong = new Audio();
let songs = [];
let songinfo = [];
let audio = new Audio();
let duration = document.getElementById("duration");

let play = document.getElementById("playbtns").getElementsByTagName("img")[1];

let songUL = document.querySelector("#aside2").getElementsByTagName("ul")[0];

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

    let a = await fetch(`/songs`);
    // console.log(a);
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

async function getSongs2() {
    const apiUrl = "https://api.github.com/repos/saksham-pahadi/Web-development-series/contents/Tut%2084%20Spotify%20clone%20using%20HTML%2C%20CSS%20%26%20javascript/songs";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const files = await response.json();

        const songs = files
            .filter(file => file.name.endsWith(".mp3"))
            .map(file => ({
                name: file.name,
                url: file.download_url
            }));

        // console.log("Fetched songs:", songs);
        return songs;

    } catch (error) {
        console.error("Error fetching songs:", error);
    }
}

async function getSongArray() {
    console.log(songs.length);

    songs = await getSongs2();
    // console.log(songs)
    // let URL=songs[1].url;
    let URL = [];
    for (let index = 0; index < songs.length; index++) {
        URL.push(songs[index].url)

    }
    // console.log(URL)

    let AURL = [];
    for (let index = 0; index < URL.length; index++) {
        AURL.push(`https://github.com/saksham-pahadi/Web-development-series/blob/main/Tut%2084%20Spotify%20clone%20using%20HTML%2C%20CSS%20%26%20javascript/songs/${URL[index].split("/songs/")[1]}?raw=true`)

    }




    //   console.log(AURL);
    return AURL;
}
















const playMusic = (track) => {
    console.log("Playing track: " + track);
    // audio = new Audio("/songs/" + track)
    audio = new Audio(track)
    audio.volume = vol.value / 100;
    play.src = "/img/pause.svg";
    try{

        audio.play();
    }
    catch(err){
        console.log(err)
    }

    currentSong = track;


    return audio;
};





//MAIN FUNCTION

(async function () {


    //get the songs from the server
    songs = await getSongArray();
    console.log(songs);
    // songinfo=songs;
    for (let index = 0; index < songs.length; index++) {
        songinfo.push(songs[index].split("/songs/")[1].split("?")[0]);

    }
    console.log(songinfo);


    //show all the song in the playlist
    //  songUL = document.querySelector("#aside2").getElementsByTagName("ul")[0]; 
    let i = 0;
    for (const song of songinfo) {
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
    let songlist = document.querySelectorAll("#aside2 ul li");
    Array.from(songlist).forEach(e => {

        e.addEventListener("click", element => {
            if (audio.played) {
                console.log(audio.played)
                audio.pause();

            }

            // duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));

            document.getElementById("player").style.visibility = "visible";

            console.log(e.querySelector("h4").innerHTML);
            document.getElementById("songdetail").innerHTML = `<h3>${e.querySelector("h4").innerHTML}</h3> <p>${e.querySelector("p").innerHTML}</p>`;
            // duration.innerText = "Loading...";
            // currentTime.innerText = "0:00";




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

    // Attache event listner to play btn

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






    setInterval(() => {
        let circle = document.getElementById("circle");



        if (audio.currentTime == 0) {
            // duration.innerText ="Loading...";
            duration.innerHTML = `<div class="spinner"></div>`;
            circle.style.left = "0%";
        }
        else {

            duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));
        }

        currentTime.innerText = convertSecondsToMinutes(Math.floor(audio.currentTime));
        circle.style.left = ((audio.currentTime / audio.duration) * 100) - 2 + "%";
        // console.log(audio.duration)

        // console.log(!(audio.duration==NaN)) 

        // play next when song ends
        if (audio.duration == audio.currentTime) {
            playnext();
        }

    }, 1000);



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
            // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
            console.log(songlist[index - 1].querySelector("h4").innerHTML);
            document.getElementById("songdetail").innerHTML = `<h3>${songlist[index - 1].querySelector("h4").innerHTML}</h3> <p>${songlist[index - 1].querySelector("p").innerHTML}</p>`;
        }
        else {
            playMusic(currentSong)
        }
    });

    // play next song
    function playnext() {
        let index = songs.indexOf(currentSong);
        console.log(index + 1 < songs.length);
        console.log(songs.length);
        console.log(index + 1);

        if (index + 1 < songs.length) {
            console.log(songs[index + 1]);
            playMusic(songs[index + 1]);
            currentSong = songs[index + 1];
            console.log(currentSong);

            // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
            console.log(songlist[index + 1].querySelector("h4").innerHTML);
            document.getElementById("songdetail").innerHTML = `<h3>${songlist[index + 1].querySelector("h4").innerHTML}</h3> <p>${songlist[index + 1].querySelector("p").innerHTML}</p>`;
        }
        else {
            playMusic(currentSong)
        }

    }
    let next = document.getElementById("nextbtn");
    next.addEventListener("click", () => {
        console.log("Next clicked");
        audio.pause();
        playnext();


    });



    //Add an event on volume
    vol.addEventListener("change", (e) => {
        console.log(e.target.value);
        audio.volume = parseInt(e.target.value) / 100;
        volValue.innerText = `${e.target.value} %`;
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
            volValue.innerText = `${vol.value} %`;
            console.log(tempvol);
        }
        else if (vol.value == 0) {
            vol.value = tempvol;
            e.target.src = "img/volume.svg";
            console.log(tempvol);
            console.log(vol.value);
            volValue.innerText = `${vol.value} %`;
            audio.volume = parseInt(vol.value) / 100;
        }

    })

    //Attache event to each trending song cover
    let hoverLi = document.getElementsByClassName("hoverLi");
    Array.from(hoverLi).forEach(e => {

        e.addEventListener("mouseenter", () => {
            let hoverplay = document.getElementById(`m${e.id}`);

            hoverplay.style.bottom = "60px";
            hoverplay.style.opacity = "1";
            // console.log(e);
        })
        e.addEventListener("mouseleave", () => {
            let hoverplay = document.getElementById(`m${e.id}`);
            hoverplay.style.bottom = "45px";
            hoverplay.style.opacity = "0";
            // console.log(hoverplay);
        })
    });





})();