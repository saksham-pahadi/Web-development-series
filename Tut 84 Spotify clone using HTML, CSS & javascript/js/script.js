console.log("lets write some javascript");
let currentSong = new Audio();
let songs = [];
let trendingSongs = [];
let globalsongs = [];
let viewalltrendingsongs = document.querySelector("#section1 button");
let viewallglobalsongs = document.querySelector("#section2 button");

let trendingsongsdiv=document.querySelector("section #trendingSongs");
let globalsongsdiv=document.querySelector("section #globalsongs");

let folder = 'songs';

let songinfo = [];
let trendingsonginfo = [];
let globalsonginfo = [];
let audio = new Audio();
let duration = document.getElementById("duration");

let play = document.getElementById("playbtns").getElementsByTagName("img")[1];

let songUL = document.querySelector("#aside2").getElementsByTagName("ul")[0];
let trendingsongUL = document.querySelector("#trendingSongs").getElementsByTagName("ul")[0];
let globalsongUL = document.querySelector("#globalsongs").getElementsByTagName("ul")[0];

let currentTime = document.getElementById("currentTime");
let vol = document.getElementById("volrange");
let volValue = document.getElementById("volValue");
let tempvol;
let hamburger = document.getElementById("hamburger");
let hamburgeroptions = document.createElement("div");
hamburgeroptions.classList.add("ham-div");
hamburgeroptions.innerHTML = `<ul id="hamburgerul">
<div id="cancle">X</div>
                    <li id="hmul1" ><a href="#">Premium</a></li>
                    <li id="hmul2" ><a href="#">Sign up</a></li>
                    <li id="hmul3" ><a href="#">Log in</a></li>
                   <li id="hmul4"><a href="#">Your Library</a></li>
                   <li id="hmul5" ><a href="#">Download</a></li>
                   <li id="hmul6" ><a href="#">Support</a></li> 
                </ul>`;
hamburger.after(hamburgeroptions);
console.log(hamburgeroptions);


// Function to convert seconds to minutes in the format mm:ss
function convertSecondsToMinutes(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

//function for scroll
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        console.log("scrolled...!");
    } else {
        console.error('Element not found:', target);
    }
}


async function getSongs() {

    let a = await fetch(`/${folder}`);
    // console.log(a);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    return songs;

};

async function getSongs2() {
    const apiUrl = `https://api.github.com/repos/saksham-pahadi/Web-development-series/contents/Tut%2084%20Spotify%20clone%20using%20HTML%2C%20CSS%20%26%20javascript/${folder}`;

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

        console.log("Fetched songs:");
        // console.log(songs);
        return songs;

    } catch (error) {
        console.error("Error fetching songs:", error);
    }
}

async function getSongArray() {

    songsUrls = await getSongs2();
    console.log("songs in song array:")
    // console.log(songs)
    let URL = [];
    //  URL=songs[1].url;
    for (let index = 0; index < songsUrls.length; index++) {
        URL.push(songsUrls[index].url)

    }
    console.log("URL")
    // console.log(URL)

    let AURL = [];
    for (let index = 0; index < URL.length; index++) {
        AURL.push(`https://github.com/saksham-pahadi/Web-development-series/blob/main/Tut%2084%20Spotify%20clone%20using%20HTML%2C%20CSS%20%26%20javascript/${folder}/${URL[index].split(`/${folder}/`)[1]}?raw=true`)

    }




    console.log("AURL");
    // console.log(AURL);
    return AURL;
}











const showallonpage=(content,contentinfo,contentUL,TGI)=>{
        // trandingsonginfo=songs;
    for (let index = 0; index < content.length; index++) {
        //when getting data from API------------------------------------------------------------------------------------------------------------------------>
        // contentinfo.push(content[index].split(`/${folder}/`)[1].split("?")[0]);

        //when getting data from local storage
        contentinfo.push(content[index]);
        // console.log(trendingSongs[index])

    }
    console.log(contentinfo);

    let j = 0;
    for (const tSongs of contentinfo) {
        // console.log("Song :"+song.replaceAll("%20"," "));
        let songTitle = tSongs.split("-")[0].replaceAll("%20", " ");

        // console.log("Song Title :"+songTitle.replaceAll("%20"," "));
        let artist = tSongs.split("-")[1];

        // console.log("Artist :"+artist.replaceAll("%20"," "));
        let artistName = artist.split(".")[0].replaceAll("%20", " ").replaceAll("_", ". ");
        // console.log("Artist Name :"+artistName.replaceAll("%20"," "));

        contentUL.innerHTML = contentUL.innerHTML + `<li class="hoverLi" id="${TGI}s${j}">
                        <img src="img/cover.jpg" alt="Song Cover" class="cover">
                        <div class="songdetails">
                            <div>
                                <h3>${songTitle}</h3>
                                <p>${artistName}</p>
                            </div>

                            <img class="hoverplay" id="h${TGI}s${j}" src="img/hoverplay.svg" alt="">
                        </div>
                    </li>`;
        j++;
    }

    }




const playMusic = (track) => {
    console.log("Playing track: " + track);
    audio = new Audio(`/${folder}/` + track)  // when getting data from local storage
    // audio = new Audio(track)  //when getting data from API-------------------------------------------------------------------------------------------------------->
    audio.volume = vol.value / 100;
    play.src = "/img/pause.svg";
    try {

        audio.play();
    }
    catch (err) {
        console.log(err)
    }

    currentSong = track;


    return audio;
};

const playonclick=(content,contentLI,givenfolder,TGI)=>{
//Attache event to each trending song cover
    Array.from(contentLI).forEach(e => {
        e.addEventListener("click", () => {
            folder = givenfolder;
            if (audio.played) {

                audio.pause();

            }

            // duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));

            document.getElementById("player").style.visibility = "visible";

            // console.log(e.querySelector("h3").innerHTML);
            document.getElementById("songdetail").innerHTML = `<h3>Title : ${e.querySelector("h3").innerHTML}</h3> <p>Artist : ${e.querySelector("p").innerHTML}</p>`;
            // duration.innerText = "Loading...";
            // currentTime.innerText = "0:00";




            // let currentplaying = e.querySelector("#i");
            // currentplaying.src = "/img/pause.svg";
            // console.log(currentplaying)

            console.log(e);
            currentSong = content[e.id.split(`${TGI}s`)[1]];
            console.log("Current Song :" + e.querySelectorAll("h3").innerHTML);
            playMusic(currentSong);
            console.log("Playing..." + e.querySelector("h3").innerHTML.split(":")[1]);//playing.. Song Name
            play.src = "/img/pause.svg";
        })

        e.addEventListener("mouseenter", () => {
            let hoverplay = document.getElementById(`h${e.id}`);

            hoverplay.style.bottom = "60px";
            hoverplay.style.opacity = "1";
            // console.log(e);
        })
        e.addEventListener("mouseleave", () => {
            let hoverplay = document.getElementById(`h${e.id}`);
            hoverplay.style.bottom = "45px";
            hoverplay.style.opacity = "0";
            // console.log(hoverplay);
        })
    });
}


const showall=(button,div,ul)=>{
         button.addEventListener("click", () => {
        ul.classList.toggle("wrap");
        div.classList.toggle("height200vh")
        div.classList.toggle("minheight300px")
        console.log(button.innerText);
        if (button.innerText == "Show all") {
            button.innerText = "Show less"
           
        }
        else if (button.innerText == "Show less") {
            button.innerText = "Show all";
        }
    })

    }





//MAIN FUNCTION

(async function () {


    //when getting data from API------------------------------------------------------------------------------------------------------------------------------>
    // songs=await getSongArray(); 
    // folder='trendingsongs';
    // trendingSongs = await getSongArray();

    //get the songs from the local storage
    songs = await getSongs();
    folder = 'trendingsongs';
    trendingSongs = await getSongs();
    folder = 'globalbest';
    globalsongs = await getSongs();


    console.log("songs");
    console.log(songs);
    console.log("trending songs");
    console.log(trendingSongs);
    console.log("global songs");
    console.log(globalsongs);






    //show all the song in the library

    // songinfo=songs;
    for (let index = 0; index < songs.length; index++) {

        //when getting data from API--------------------------------------------------------------------------------------------------------------------------->
        // songinfo.push(songs[index].split("/songs/")[1].split("?")[0]);

        //when getting data from local
        songinfo.push(songs[index]);
        console.log(songs[index])

    }
    // console.log(songinfo);



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


    //Attache to event listener to each library song
    let songlist = document.querySelectorAll("#aside2 ul li");
    Array.from(songlist).forEach(e => {

        e.addEventListener("click", element => {
            folder = "songs";
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


    






    //show all the song in the trending songs

    showallonpage(trendingSongs,trendingsonginfo,trendingsongUL,"t");
    
    
    //show all the song in the global best songs
    
    showallonpage(globalsongs,globalsonginfo,globalsongUL,"g");

    
    
    
    
    //Attache event to each trending song cover
    let hoverLi = document.querySelectorAll(`#trendingSongs ul li`);
    console.log(hoverLi);
    playonclick(trendingSongs,hoverLi,"trendingSongs","t");
    
    
    
    //Attache event to each global best song cover
    let globalhoverLi = document.querySelectorAll("#globalsongs ul li");
    console.log(globalhoverLi)
    playonclick(globalsongs,globalhoverLi,"globalbest","g");





    // Attache event listner to play btn

    play.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            console.log("Continue... " + audio.src.split(`/${folder}/`)[1].split("-")[0].replaceAll("%20", " "))
            play.src = "/img/pause.svg";
        }
        else {
            audio.pause();
            console.log(audio.src.split(`/${folder}/`)[1].split("-")[0].replaceAll("%20", " ") + "Stopped");
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
        console.log(audio.src.split(`/${folder}/`)[1].split("-")[0].replaceAll("%20", " ") + "Closed");

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
        circle.style.left = ((audio.currentTime / audio.duration) * 100) - 1 + "%";
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
        console.log(folder, "folder");

        audio.pause();
        if (folder == "songs") {
            let index = songs.indexOf(currentSong);
            // console.log(songs, index);
            // console.log(index - 1 >= 0);
            // console.log(songs.length);
            // console.log(index - 1);

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
        }
        else if (folder == "trendingSongs") {

            let index = trendingSongs.indexOf(currentSong);
            // console.log(trendingSongs, index);
            // console.log(index - 1 >= 0);
            // console.log(trendingSongs.length);
            // console.log(index - 1);

            if (index - 1 >= 0) {
                console.log(trendingSongs[index - 1]);
                playMusic(trendingSongs[index - 1]);
                currentSong = trendingSongs[index - 1];
                // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
                console.log(hoverLi[index - 1].querySelector("h3").innerHTML);
                document.getElementById("songdetail").innerHTML = `<h3>Title : ${hoverLi[index - 1].querySelector("h3").innerHTML}</h3> <p>Artist : ${hoverLi[index - 1].querySelector("p").innerHTML}</p>`;
            }
            else {
                playMusic(currentSong)
            }


        }
        else if (folder == "globalbest") {

            let index = globalsongs.indexOf(currentSong);
            // console.log(trendingSongs, index);
            // console.log(index - 1 >= 0);
            // console.log(trendingSongs.length);
            // console.log(index - 1);

            if (index - 1 >= 0) {
                console.log(globalsongs[index - 1]);
                playMusic(globalsongs[index - 1]);
                currentSong = globalsongs[index - 1];
                // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
                console.log(globalhoverLi[index - 1].querySelector("h3").innerHTML);
                document.getElementById("songdetail").innerHTML = `<h3>Title : ${globalhoverLi[index - 1].querySelector("h3").innerHTML}</h3> <p>Artist : ${globalhoverLi[index - 1].querySelector("p").innerHTML}</p>`;
            }
            else {
                playMusic(currentSong)
            }


        }
    });

    //function play next song
    function playnext() {
        if (folder == "songs") {
            let index = songs.indexOf(currentSong);
            // console.log(index + 1 < songs.length);
            // console.log(songs.length);
            // console.log(index + 1);

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
        else if (folder == "trendingSongs") {
            let index = trendingSongs.indexOf(currentSong);
            // console.log(index + 1 < songs.length);
            // console.log(songs.length);
            // console.log(index + 1);

            if (index + 1 < trendingSongs.length) {
                console.log(trendingSongs[index + 1]);
                playMusic(trendingSongs[index + 1]);
                currentSong = trendingSongs[index + 1];
                console.log(currentSong);

                // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
                console.log(hoverLi[index + 1].querySelector("h3").innerHTML);
                document.getElementById("songdetail").innerHTML = `<h3>Title : ${hoverLi[index + 1].querySelector("h3").innerHTML}</h3> <p>Artist : ${hoverLi[index + 1].querySelector("p").innerHTML}</p>`;
            }
            else {
                playMusic(currentSong)
            }
        }
        else if (folder == "globalbest") {
            let index = globalsongs.indexOf(currentSong);
            // console.log(index + 1 < songs.length);
            // console.log(songs.length);
            // console.log(index + 1);

            if (index + 1 < globalsongs.length) {
                console.log(globalsongs[index + 1]);
                playMusic(globalsongs[index + 1]);
                currentSong = globalsongs[index + 1];
                console.log(currentSong);

                // document.getElementById("songdetail").innerHTML = `<h3>Title : ${currentSong.split("-")[0].replaceAll("%20", " ")}</h3> <p>Artist : ${currentSong.split("-")[1].split(".")[0].replaceAll("%20", " ")}</p>`;
                console.log(globalhoverLi[index + 1].querySelector("h3").innerHTML);
                document.getElementById("songdetail").innerHTML = `<h3>Title :  ${globalhoverLi[index + 1].querySelector("h3").innerHTML}</h3> <p>Artist : ${globalhoverLi[index + 1].querySelector("p").innerHTML}</p>`;
            }
            else {
                playMusic(currentSong)
            }
        }

    }

    // add event on next button
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

    




    //show all trendins songs 
    
    showall(viewalltrendingsongs,trendingsongsdiv,trendingsongUL);

    //show all global songs 
    
    showall(viewallglobalsongs,globalsongsdiv,globalsongUL);







    // add events related Hamburger
    hamburger.addEventListener("click", (e) => {
        hamburgeroptions.classList.toggle("active");
        e.stopImmediatePropagation();
    });
    document.getElementById("cancle").addEventListener("click", () => {

        hamburgeroptions.classList.toggle("active");
    });
    document.getElementById("hamburgerul").addEventListener("click", () => {

        // hamburgeroptions.classList.toggle("active");
    });
    document.addEventListener("click", () => {

        hamburgeroptions.classList.remove("active");
    });
    document.getElementById("hmul4").addEventListener("click", (e) => {
        smoothScrollTo("footer");
    })



})();