let infinity_link_album_btn = document.getElementById('infinity_link_album_btn')

var infinity_link_audio_src = document.getElementById('infinity_link_audio_src')

var favicon = document.getElementById('favicon')

var open_in_full_infinity_link = 

document.getElementById('open_in_full_infinity_link')

let infinity_link = 0

open_in_full_infinity_link

.addEventListener('click',function(){

      var aTag = document.createElement('a')

      aTag.setAttribute('href', '/Infinity_link.html')

      aTag.target = '_parent'

      window.open(aTag)

    })

 

   let audio = [

  {

    audio_src : '/Infinity_link_album/Quavo & Takeoff - 2.30.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : '2.30'

  },

  {

    audio_src : '/Infinity_link_album/Quavo & Takeoff - See Bout It.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff ft Mustard', 

    audio_name : 'See Bout It'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Bars-Into-Captions.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Bars Into Captions'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Big-Stunna-Ft-Birdman.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff ft Birdman', 

    audio_name : 'Big Stunna'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Chocolate-Ft-Young-Thug-Gunna.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff ft YoungThug - Gunna', 

    audio_name : 'Chocolate'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Ft-Gucci-Mane-Us-vs-Them.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff ft Gucci Mane', 

    audio_name : 'US vs Them'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Hell-Yeah.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Hell Yeah'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-HOTEL-LOBBY-Unc-and-Phew.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Hôtel Lobby '

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Integration.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Integration'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Look-This.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Look @ This'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Messy.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Messy'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Mixy-Ft-Summer-Walker-(HiphopKit.com) (1).mp3 ', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff ft Summer Walker', 

    audio_name : 'Mixy'

  }, 

  {

    audio_src :'/Infinity_link_album/Quavo-Takeoff-Not-Out.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Not Out'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Nothing-Changed.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Nothing Changed'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-To-The-Bone-Ft-Nba-YoungBoy.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author :'Quavo & Takeoff ft NBA YoungBoy', 

    audio_name : 'To The Bone'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Tony-Starks.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Tony Starks'

  }, 

  {

    audio_src: '/Infinity_link_album/Quavo-Takeoff-Tools.mp3',

    audio_cover: '/Infinity_link_album/Quavo-Takeoff.jpg',

    audio_author: 'Quavo & Takeoff',

    audio_name: 'Tools'

  }, 

  {

    audio_src : '/Infinity_link_album/Quavo-Takeoff-Two-Infinity-Link.mp3', 

    audio_cover : '/Infinity_link_album/Quavo-Takeoff.jpg', 

    audio_author : 'Quavo & Takeoff', 

    audio_name : 'Two Infinity Link'

  }

 ]

 

function infinity_btn(){

      if (infinity_link_audio_src.paused) {

        show_playing_container.classList.remove('active')

        main_container.classList.add('padding_bottom')

        setTimeout(function() {

          show_playing_container.classList.add('active')

        }, 100)

        

        infinity_link_audio_src.play()

        infinity_link_album_btn.textContent = 'pause_arrow'

        

          favicon.setAttribute('href', audio[infinity_link].audio_cover)

        document.title = audio[infinity_link].audio_author + ' / ' + audio[infinity_link].audio_name

        show_playing_img.setAttribute('src', audio[infinity_link].audio_cover)

        show_playing_title.innerHTML = audio[infinity_link].audio_name

        show_playing_artist_name.innerHTML = audio[infinity_link].audio_author

        

        

        playlist_one_audio_src.pause()

        playlist_one_btn.textContent = 'play_arrow'

        

        gym_playlist_1_audio_src.pause()

        gym_playlist_one_btn.textContent = 'play_arrow'

        

        traumazine_audio_src.pause()

        traumazine_album_btn.textContent = 'play_arrow'

        

      } else {

        infinity_link_audio_src.pause()

        infinity_link_album_btn.textContent = 'play_arrow'

      }

      

    } 

    

 infinity_link_album_btn.onclick = infinity_btn

 

    

    

    god_did_audio.addEventListener("ended",function(){

      if (infinity_link < audio.length - 1 ) {

        infinity_link++

        infinity_link_audio_src.setAttribute('src',audio[infinity_link].audio_src)

        infinity_link_audio_src.play()

        favicon.setAttribute('href', audio[infinity_link].audio_cover)

        document.title = audio[infinity_link].audio_author + ' / ' + audio[infinity_link].audio_name

        show_playing_container.classList.remove('active')

        setTimeout(function() {

          show_playing_container.classList.add('active')

        }, 100)

        show_playing_title.innerHTML = audio[infinity_link].audio_name

        show_playing_artist_name.innerHTML = audio[infinity_link].audio_author

      } else {

        infinity_link = 0 

        infinity_link_audio_src.setAttribute('src',audio[infinity_link].audio_src)

        infinity_link_audio_src.play()

        favicon.setAttribute('href',audio[infinity_link].audio_cover)

        document.title = audio[infinity_link].audio_author + ' / ' + audio[infinity_link].audio_name

        show_playing_container.classList.remove('active')

        setTimeout(function() {

          show_playing_container.classList.add('active')

        }, 100)

        show_playing_title.innerHTML  = audio[infinity_link].audio_name

        show_playing_artist_name.innerHTML = audio[infinity_link].audio_author

      } 

    })

    

    window.addEventListener('load',function(){

      if (infinity_link < audio.length - 1) {

        infinity_link++

        infinity_link_audio_src.setAttribute('src', audio[infinity_btn].audio_src)

        show_playing_title.innerHTML = audio[infinity_btn].audio_name

        show_playing_artist_name.innerHTML = audio[infinity_btn].audio_author

      } else {

        infinity_link = 0

        infinity_link_audio_src.setAttribute('src', audio[infinity_link].audio_src)

        show_playing_title.innerHTML = audio[infinity_link].audio_name

        show_playing_artist_name.innerHTML = audio[infinity_link].audio_author

      }

    })

