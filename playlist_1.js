var main_container = document.querySelector('.main')
var show_playing_img = document.getElementById('show_playing_img')
var show_playing_artist_name =  document.querySelector('.show_playing_artist h5')
var show_playing_title = document.querySelector('.show_playing_artist p')

var show_playing_container = document.querySelector('.show_playing_container')
var playlist_one_audio_src = document.getElementById('playlist_one_audio_src')
const playlist_one_btn = document.getElementById('playlist_one_btn')
const  playlist_one_cover = document.getElementById('playlist_one_cover')
const delay_a = 2000
let a = 0 
let a_count = 0



let playlist_one_audio = [
   {
     audio_src : '/audio/ Migos - _Fucking Up Profits.mp3', 
     audio_cover : '/cover/20210402_183558.jpg', 
     audio_author : 'Migos', 
     audio_name : 'Fucking Up Profits'
   }, 
  {
    audio_src : '/audio/Future - Mask Off.mp3', 
    audio_cover : '/cover/Future-Mask-Off.jpg', 
    audio_author : 'Future', 
    audio_name : 'Mask Off'
  }, 
  {
    audio_src :'/audio/Kodak Black - Usain Boo .mp3', 
    audio_cover : '/cover/usain_boo.jpg', 
    audio_author : 'Kodak Black', 
    audio_name : 'Usain Boo'
  }, 
  {
    audio_src : '/audio/Lil Yachty - MICKEY ft. Offset, Lil Baby.mp3', 
    audio_cover : '/cover/Lil_Yachty_–_Lil_Boat_2.png', 
    audio_author : 'Lil Yatchy ft Offset & Lil Baby', 
    audio_name : 'Mickey Mouse'
  }, 
  {
    audio_src : '/audio/Megan_Thee_Stallion_-_Cry_Baby_(feat._DaBaby)_[Official_Audio](256k).mp3', 
    audio_cover : '/cover/cry_baby.jpeg', 
    audio_author : 'Megan Thee Stallion ft Dababy', 
    audio_name : 'Cry Baby'
  }, 
  {
    audio_src : '/audio/NAV_-_Myself_(Official_Music_Video)(128k).mp3', 
    audio_cover : '/cover/nav_myselft.png', 
    audio_author : 'Nav', 
    audio_name : 'Myself'
  },
  {
    audio_src : '/audio/Quavo & Takeoff - Hotel Lobby.mp3', 
    audio_cover : '/cover/migos_hotel_lobby.jpg', 
    audio_author : 'Quavo & Takeoff', 
    audio_name : 'Hotel Lobby'
  }, 
  {
    audio_src : '/audio/Rich_The_Kid_-_Lost_It_ft._Quavo_&_Offset_(The_World_Is_Yours)(128k).mp3', 
    audio_cover : '/cover/lost_it.png', 
    audio_author : 'Rich The Kid ft Quavo & Offset', 
    audio_name : 'Lost It'
  }, 
  {
    audio_src : '/audio/SleazyWorld Go - Step 1 ft. Offset.mp3', 
    audio_cover : '/cover/step_one.jpeg', 
    audio_author : 'SleazyWorld Go ft Offset', 
    audio_name : 'Step One'
  }, 
  {
    audio_src : '/audio/SPOTEMGOTTEM_Feat._Pooh_Shiesty_-Beatbox_2-_(Official_Video)(128k).mp3', 
    audio_cover : '/cover/beatbox.jpeg', 
    audio_author : 'Spotemgottem ft Pooh_Shiesty', 
    audio_name : 'Beatbox'
  }, 
  {
    audio_src : '/audio/Stripper Bowl.mp3', 
    audio_cover : '/cover/quality_vol2.jpg', 
    audio_author : 'Migos', 
    audio_name : 'Stripper Bowl'
  }, 
  {
    audio_src : '/audio/Takeoff.mp3', 
    audio_cover : '/cover/thelastrocket.jpg', 
    audio_author : 'Takeoff', 
    audio_name : 'Last Memory'
  }, 
  {
    audio_src : '/audio/YNW Melly - Murder On My Mind.mp3', 
    audio_cover : '/cover/murder_on_my_mind.jpg', 
    audio_author : 'YNW Melly', 
    audio_name : 'Murder On My Mind'
  }, 
  {
    audio_src : '/audio/yt5s.com - Fivio Foreign - Magic City (Official Video) ft. Quavo (128 kbps).mp3', 
    audio_cover : '/cover/magic_city.png', 
    audio_author : 'Fivio Foreign ft Quavo', 
    audio_name : 'Magic City'
  }, 
  {
    audio_src : '/audio/yt5s.com - Quality Control - Too Hotty by Migos featuring Eurielle (128 kbps).mp3', 
    audio_cover : '/cover/quality_vol1.png', 
    audio_author : 'Migos - Eurielle', 
    audio_name : 'Too Hotty'
  }, 
  {
    audio_src : '/audio/yt5s.com - Remble - Rocc Climbing (feat. Lil Yachty) [Official Music Video] (128 kbps).mp3', 
    audio_cover : '/cover/rocc_climbing.jpeg', 
    audio_author : 'Remble ft Lil Yatchy', 
    audio_name : 'Rocc Climbing'
  }, 
  {
    audio_src : '/audio/yt5s.com - Takeoff, Rich The Kid - Crypto (Official Video) (128 kbps).mp3', 
    audio_cover : '/cover/crypto.jpeg', 
    audio_author : 'Rich The Kid ft Takeoff', 
    audio_name : 'Crypto'
  }, 
  {
    audio_src : '/audio/ - Quavo - Doors Go Up! Ft. Trippie Redd.mp3', 
    audio_cover : '/cover/Quove.jpg', 
    audio_author : 'Quavo ft Trippie Redd', 
    audio_name : 'Doors go up'
  }, 
  {
    audio_src : '/audio/ - Rich The Kid, Quavo & TakeOff - Too Blessed.mp3', 
    audio_cover : '/cover/too_blessed.jpeg', 
    audio_author : 'Rich The Kid ft Quavo & Takeoff', 
    audio_name : 'Too Blessed'
  }, 
  {
    audio_src : '/audio/ -Carnage ft. Tyga, OhGeesy & Takeoff - Hella Neck.mp3', 
    audio_cover : '/cover/hella_neck.jpg', 
    audio_author : 'Carnage ft Tyga, Takeoff & OhGeesy', 
    audio_name : 'Hella Neck'
  }, 
  {
    audio_src : '/audio/- Future ft. Young Thug & Quavo - Upscale.mp3', 
    audio_cover : '/cover/upscale.jpg', 
    audio_author : 'Future ft Young Thug & Quavo', 
    audio_name : 'Upscale'
  }, 
  {
    audio_src : '/audio/- Lil Tjay - Beat The Odds.mp3', 
    audio_cover : '/cover/Lil-Tjay-Beat-The-Odds.jpg', 
    audio_author : 'Lil Tjay', 
    audio_name : 'Beat The Odds'
  }, 
  {
    audio_src : '/audio/- Offset - Cinco De Mayo Feat. Young Nudy.mp3', 
    audio_cover : '/cover/cinco_de_mayo.png', 
    audio_author : 'Offset ft Young Nudy', 
    audio_name : 'Cinco De Mayo'
  }, 
  {
    audio_src : '/audio/- Quavo x Evander Griiim - Baile.mp3', 
    audio_cover : '/cover/quavo_baile.jpg', 
    audio_author : 'Quavo ft Evander Griiime', 
    audio_name : 'Baile'
  }, 
  {
    audio_src : '/audio/- Tee Grizzley - Pray For The Drip ft. Offset.mp3', 
    audio_cover : '/cover/pray_the_drip.jpg', 
    audio_author : 'Tee Grizzley ft Offset', 
    audio_name : 'Pray For The Drip'
  }, 
  {
    audio_src : '/audio/-Young Thug - The London (ft. J. Cole & Travis Scott).mp3', 
    audio_cover : '/cover/london.jpg', 
    audio_author : 'Young Thug ft J. Cole & Travis Scott', 
    audio_name : 'London'
  }, 
  {
    audio_src : '/audio/ -- DJ Khaled - PARTY  ft. Quavo, Takeoff.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'Quavo & TakeOff', 
    audio_name : 'Party All The Time'
  }, 
  {
    audio_src : '/audio/ --Lil Baby x 42 Dugg - We Paid.mp3', 
    audio_cover : '/cover/my_turn.jpeg', 
    audio_author : 'Lil Baby x 42 Dugg', 
    audio_name : 'We Paid'
  }, 
  {
    audio_src : '/audio/ --Offset - CODE ft. Moneybagg Yo.mp3', 
    audio_cover : '/cover/CODECOVER.jpg', 
    audio_author : 'Offset ft Moneyybagg Yo', 
    audio_name : 'Code'
  }, 
  {
    audio_src : '/audio/ --Quavo & Takeoff Ft. Birdman - Big Stunna.mp3', 
    audio_cover : '/cover/Big-Stunna.jpg', 
    audio_author : 'Quavo & Takeoff Birdman', 
    audio_name : 'Big Stunna'
  }, 
  {
    audio_src : '/audio/ --Roddy Ricch - Down Below.mp3', 
    audio_cover : '/cover/down_below.jpg', 
    audio_author : 'Roddy Ricch', 
    audio_name : 'Down Below'
  }, 
  {
    audio_src : '/audio/ --Trippie Redd – Big 14 feat. Offset & Moneyybagg Yo.mp3', 
    audio_cover : '/cover/big_14.jpeg', 
    audio_author : 'Trippie Red ft Offset & Moneyybagg Yo', 
    audio_name : 'Big 14'
  },
  {
    audio_src : '/audio/--Offset - 5 4 3 2 1.mp3', 
    audio_cover : '/cover/54321.png', 
    audio_author : 'Offset', 
    audio_name : '5 4 3 2 1'
  }, 
  {
    audio_src : '/audio/--Lil Baby x Gunna - _Drip Too Hard.mp3', 
    audio_cover : '/cover/drip_hard.jpg', 
    audio_author : 'Lil Baby ft Gunna', 
    audio_name : 'Drip Too Hard'
  }
  ]





function changePlalist_one_cover(){
       if(a_count < playlist_one_audio.length - 1 ){
         a_count++
         playlist_one_cover.setAttribute('src', playlist_one_audio[a_count].audio_cover)
         }else {
         a_count = 0
         playlist_one_cover.setAttribute('src', playlist_one_audio[a_count].audio_cover)
       }
     }
    setInterval('changePlalist_one_cover()', delay_a)
    
    
    playlist_one_btn.addEventListener('click',function(){
      if (playlist_one_audio_src.paused) {
        show_playing_container.classList.remove('active')
        main_container.classList.add('padding_bottom')
        setTimeout(function(){
         show_playing_container.classList.add('active')
        },100)
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
        show_playing_title.innerHTML = playlist_one_audio[a].audio_name
        show_playing_artist_name.innerHTML = playlist_one_audio[a].audio_author
        playlist_one_audio_src.play()
        playlist_one_btn.textContent = 'pause_arrow'
        
        traumazine_audio_src.pause()
        traumazine_album_btn.textContent = 'play_arrow'
        
        gym_playlist_1_audio_src.pause()
        gym_playlist_one_btn.textContent = 'play_arrow'
      } else {
        playlist_one_audio_src.pause()
        playlist_one_btn.textContent = 'play_arrow'
      }
    })
      
      
    
    
    
    playlist_one_audio_src.addEventListener("ended",function(){
      if (a < playlist_one_audio.length - 1 ) {
        a++
        
        playlist_one_audio_src.setAttribute('src', playlist_one_audio[a].audio_src)
        playlist_one_audio_src.play()
        show_playing_container.classList.remove('active')
        setTimeout(function(){
         show_playing_container.classList.add('active')
        },100)
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
        show_playing_title.innerHTML = playlist_one_audio[a].audio_name
        show_playing_artist_name.innerHTML = playlist_one_audio[a].audio_author
      } else {
        a = 0 
        playlist_one_audio_src.setAttribute('src', playlist_one_audio[a].audio_src)
        playlist_one_audio_src.play()
        show_playing_container.classList.remove('active')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
        show_playing_title.innerHTML = playlist_one_audio[a].audio_name
        show_playing_artist_name.innerHTML = playlist_one_audio[a].audio_author
      } 
    })
    window.addEventListener('load',function(){
      if (a < playlist_one_audio.length - 1 ) {
        a++
        playlist_one_audio_src.setAttribute('src', playlist_one_audio[a].audio_src)
        
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
      } else {
        a = 0 
        playlist_one_audio_src.setAttribute('src', playlist_one_audio[a].audio_src)
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
      } 
    })
 //end of cover playlist one
  
