//song list
let All_song = [
   {
     name: "Tumhe Dillagi Bhool Jani Padhegi",
     path: "music/1.m4a",
     img: "images/1.jpeg",
     singer: "Ustad Nusrat Fateh Ali Khan"
   },
   {
     name: "IDK",
     path: "music/2.mp3",
     img: "images/2.jpeg",
     singer: "Karan Aujla"
   },
   {
     name: "Likhe Jo Khat Tujhe",
     path: "music/3.mp3",
     img: "images/3.jpeg",
     singer: "Kunal Bojewar"
   },
   
];



/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/