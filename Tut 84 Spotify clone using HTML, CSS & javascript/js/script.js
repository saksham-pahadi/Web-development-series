console.log("lets write some javascript");
let currentSong = new Audio();
let songs = [];
let songCover = ["https://c.saavncdn.com/401/Loveyatri-A-Journey-Of-Love-Hindi-2018-20181003-500x500.jpg","https://c.saavncdn.com/879/Alag-Aasmaan-Unknown-2020-20200716212927-500x500.jpg","https://c.saavncdn.com/686/Ek-Villain-Hindi-2014-500x500.jpg","https://c.saavncdn.com/024/Jab-Tak-Hai-Jaan-Hindi-2012-20190329150717-500x500.jpg","https://c.saavncdn.com/441/Darkhaast-Lofi-Mix-Hindi-2022-20220601131024-500x500.jpg","https://i1.sndcdn.com/artworks-000305238759-tladm4-t500x500.jpg","https://i.scdn.co/image/ab67616d0000b273757a24699f13a78d2d207aa8","https://c.saavncdn.com/748/Farq-hai-Hindi-2020-20201111145244-500x500.jpg","https://upload.wikimedia.org/wikipedia/en/a/a6/Fifty_Fifty_-_The_Beginning_Cupid.png","https://c.saavncdn.com/962/Garmi-From-Street-Dancer-3D--Hindi-2019-20191226105651-500x500.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bBwQMfJRB_x_oJ6uaEKTeqmI8NbUBmr3iw&s","https://a10.gaanacdn.com/gn_img/albums/NOXWVRgWkq/OXWVVO70Wk/size_m.webp","https://i.scdn.co/image/ab67616d00001e02c820a9669147be3addd7f221","https://c.saavncdn.com/436/Husn-Hindi-2023-20231129054140-500x500.jpg","https://i1.sndcdn.com/artworks-000394974879-tuburz-t500x500.jpg","https://i.scdn.co/image/ab67616d0000b2731b37836ed90730b00d8f6db8","https://i1.sndcdn.com/artworks-000178696713-pifi3d-t500x500.jpg","https://c.saavncdn.com/836/Malang-Unleash-The-Madness-Hindi-2020-20200619175502-500x500.jpg","https://c.saavncdn.com/810/O-Saki-Saki-From-Batla-House--Hindi-2019-20190715121320-500x500.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx4R8Sx-6UHJKZNIT5f-g_dBxphI8yT6h6Q&s"];
let trendingSongs = [];
let trendingSongsCover = ["https://c.saavncdn.com/983/Choo-Lo-Cover-Hindi-2023-20230521105958-500x500.jpg", "https://upload.wikimedia.org/wikipedia/en/3/3e/Powfu_-_Death_Bed.png", "https://c.saavncdn.com/561/Mere-Wala-Sardar-Single-Punjabi-2018-20180918184911-500x500.jpg", "https://i.scdn.co/image/ab67616d0000b273b7ec7a1049396ec13a9b963d", "https://i.scdn.co/image/ab67616d0000b273f379a5ee7b96ffb5a2477e81", "https://i.scdn.co/image/ab67616d00001e023b37f6de72015eefce8ee5d3", "https://c.saavncdn.com/489/Rabb-Wangu-Punjabi-2019-20220217131850-500x500.jpg", "https://c.saavncdn.com/264/Ranjha-From-Shershaah--Hindi-2021-20210804173407-500x500.jpg", "https://i.scdn.co/image/ab67616d0000b2738d2a7093606bb5efd9aa6007", "https://c.saavncdn.com/804/Saiyyan-Trending-Version-Hindi-2023-20230511151041-500x500.jpg", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/61/b3/49/61b349fe-df23-0a0a-37c9-7f0cf8d8f2fc/cover.jpg/600x600bf-60.jpg", "https://i.scdn.co/image/ab67616d00001e021d28a357e2303d79538e76c5","https://c.saavncdn.com/760/Sapphire-English-2025-20250604163233-500x500.jpg", "https://i1.sndcdn.com/artworks-WWvTQsVwwR1Px9iE-O1sgTg-t500x500.jpg", "https://i.scdn.co/image/ab67616d0000b273e939137c68673c5d5d9979c2", "https://i1.sndcdn.com/artworks-8BwOB26JAyA2xaH1-M5YjVg-t500x500.jpg", "https://i.scdn.co/image/ab67616d0000b273f806a7942ff458ea7653edd7", "https://c.saavncdn.com/799/Soulmate-Hindi-2024-20240404153039-500x500.jpg", "https://c.saavncdn.com/119/Tere-Hawaale-From-Laal-Singh-Chaddha-Hindi-2022-20220804093945-500x500.jpg", "https://i.scdn.co/image/ab67616d0000b27382549c22cd3c6e03351bd1c5"];
console.log(trendingSongsCover);

let globalsongs = [];
let globalSongsCover = ["https://upload.wikimedia.org/wikipedia/en/8/8f/AThousand_Years.jpg", "https://c.saavncdn.com/050/Broken-Angel-English-2011-20180305091944-500x500.jpg", "https://i1.sndcdn.com/artworks-000174898618-vsdrz9-t500x500.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-dpPzuMu_WSd48J75g_rhJqMLBmG94hi5Q&s", "https://i1.sndcdn.com/artworks-000034182341-ayzf0e-t500x500.jpg", "https://i1.sndcdn.com/artworks-wTB0CGZSy5yPshXJ-ZKXs3Q-t500x500.jpg", "https://i1.sndcdn.com/artworks-000663680482-b1iz70-t500x500.jpg", "https://c.saavncdn.com/273/Love-Is-Gone-Acoustic--English-2019-20191107015219-500x500.jpg", "https://i.scdn.co/image/ab67616d0000b273ad28ff16d908831ff9150c77", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTBHs7o1MLPcAg5nOMvpf-JN-7Bsv-moWBA&s", "https://i.scdn.co/image/ab67616d0000b273e2e1bc7363172a59742e3be1", "https://i.scdn.co/image/ab67616d0000b273e17498b2a89c000a29bbd209", "https://i.scdn.co/image/ab67616d0000b273dd83bbcefe1e211605ac144e", "https://upload.wikimedia.org/wikipedia/en/6/69/Clean_Bandit_-_Rockabye_%28feat._Sean_Paul_%26_Anne-Marie%29.png", "https://i.scdn.co/image/ab67616d00001e021d28a357e2303d79538e76c5","https://i1.sndcdn.com/artworks-WWvTQsVwwR1Px9iE-O1sgTg-t500x500.jpg","https://i.scdn.co/image/ab67616d0000b273927f72f3739f256fb01d1470","https://i.scdn.co/image/ab67616d0000b273f806a7942ff458ea7653edd7","https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_-_Sorry_%28Official_Single_Cover%29.png","https://c.saavncdn.com/895/Stay-English-2021-20210706223809-500x500.jpg","https://upload.wikimedia.org/wikipedia/en/8/81/Keshatakeitoff200.jpg","https://i1.sndcdn.com/artworks-000183073123-pw4bno-t500x500.jpg","https://i.scdn.co/image/ab67616d0000b2738792c3e96f8ab97a767c5d0c"];
console.log(trendingSongsCover);


let viewalltrendingsongs = document.querySelector("#section1 button");
let viewallglobalsongs = document.querySelector("#section2 button");

let trendingsongsdiv = document.querySelector("section #trendingSongs");
let globalsongsdiv = document.querySelector("section #globalsongs");

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











const showallonpage = (content, contentinfo, contentUL, Cover, TGI) => {
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

        let songcover;
        if (Cover[j] == undefined) {
            songcover = "img\\cover.jpg";
        }
        else {
            songcover = Cover[j];
        }

        contentUL.innerHTML = contentUL.innerHTML + `<li class="hoverLi" id="${TGI}s${j}">
                        <img src="${songcover}" alt="Song Cover" class="cover">
                        <div class="songdetails">
                            <div>
                                <h3>${songTitle}</h3>
                                <p>${artistName}</p>
                            </div>

                            <img class="hoverplay" id="h${TGI}s${j}" src="img/hoverplay.svg" alt="">
                            
                        </div>
                    </li>`;

        const jsmediatags = window.jsmediatags;
        jsmediatags.read(content, {
            onSuccess: function (tag) {
                console.log(tag);
                const data = tag.tags.picture.data;
                const format = tag.tags.picture.format;
                let base64String = "";
                for (let index = 0; index < data.length; index++) {
                    base64String += String.fromCharCode(data[index]);

                }

                document.querySelector(`#h${TGI}s${j}`).style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;



            },
            onerror: function (error) {
                console.log(error);
            }
        })
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

const playonclick = (content, contentLI, givenfolder, TGI) => {
    //Attache event to each trending song cover
    Array.from(contentLI).forEach(e => {
        e.addEventListener("click", () => {
            console.log("event");
            //             let cover;
            //             if(e.querySelector("img").src==undefined){
            // cover="img\cover.jpg";
            //             }
            //             else{
            //                 cover=`${e.querySelector("img").src}`;
            //             }
            //             console.log(e.querySelector("img").src);
            folder = givenfolder;
            if (audio.played) {

                audio.pause();

            }

            // duration.innerText = convertSecondsToMinutes(Math.floor(audio.duration));

            document.getElementById("player").style.visibility = "visible";
        


            // console.log(e.querySelector("h3").innerHTML);
            document.getElementById("playerCover").src = `${e.querySelector("img").src}`;
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


const showall = (button, div, ul) => {
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
        let songcover;
        if (songCover[i] == undefined) {
            songcover = "img\\cover.jpg";
        }
        else {
            songcover = songCover[i];
        }

        songUL.innerHTML = songUL.innerHTML + `<li id="${i}"> 
       
       
                        <img src="${songcover}" class="" alt="" title="Songs" srcset="">
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
            document.getElementById("playerCover").src = `${e.querySelector("img").src}`;

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

    showallonpage(trendingSongs, trendingsonginfo, trendingsongUL, trendingSongsCover, "t");


    //show all the song in the global best songs

    showallonpage(globalsongs, globalsonginfo, globalsongUL, globalSongsCover, "g");





    //Attache event to each trending song cover
    let hoverLi = document.querySelectorAll(`#trendingSongs ul li`);
    console.log(hoverLi);
    playonclick(trendingSongs, hoverLi, "trendingSongs", "t");



    //Attache event to each global best song cover
    let globalhoverLi = document.querySelectorAll("#globalsongs ul li");
    console.log(globalhoverLi)
    playonclick(globalsongs, globalhoverLi, "globalbest", "g");





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
                document.getElementById("playerCover").src = `img//cover.jpg`
                if (songCover[index - 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${songCover[index - 1]}`
                }
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

                if (trendingSongsCover[index - 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${trendingSongsCover[index - 1]}`
                }
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
                if (globalSongsCover[index - 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${globalSongsCover[index - 1]}`
                }
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

                if (songCover[index + 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${songCover[index + 1]}`
                }
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
                if (trendingSongsCover[index + 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${trendingSongsCover[index + 1]}`
                }
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
                if (globalSongsCover[index + 1] == undefined) {

                    document.getElementById("playerCover").src = `img/cover.jpg`
                }
                else {

                    document.getElementById("playerCover").src = `${globalSongsCover[index + 1]}`
                }
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

    showall(viewalltrendingsongs, trendingsongsdiv, trendingsongUL);

    //show all global songs 

    showall(viewallglobalsongs, globalsongsdiv, globalsongUL);







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