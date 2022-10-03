




    

    



    
    
    
    
var main_container = document.querySelector('.main')
var show_playing_img = document.getElementById('show_playing_img')
var show_playing_artist_name =  document.querySelector('.show_playing_artist h5')
var show_playing_title = document.querySelector('.show_playing_artist p')
var favicon = document.getElementById('favicon')
var show_playing_container = document.querySelector('.show_playing_container')
var playlist_one_audio_src = document.getElementById('playlist_one_audio_src')
const playlist_one_btn = document.getElementById('playlist_one_btn')
const  playlist_one_cover = document.getElementById('playlist_one_cover')
var open_in_full = document.getElementById('open_in_full')
const delay_a = 2000
let a = 0 
let a_count = 0



let playlist_one_audio = [
 
  {
    audio_src :'/audio/Kodak Black - Usain Boo .mp3', 
    audio_cover : '/cover/usain_boo.jpg', 
    audio_author : 'Kodak Black', 
    audio_name : 'Usain Boo', 
    audio_bg : '#272F36'
  }, 
  {
    audio_src : '/audio/Lil Yachty - MICKEY ft. Offset, Lil Baby.mp3', 
    audio_cover : '/cover/Lil_Yachty_–_Lil_Boat_2.png', 
    audio_author : 'Lil Yatchy ft Offset & Lil Baby', 
    audio_name : 'Mickey Mouse', 
    audio_bg : '#E68B57'
  }, 
  {
    audio_src : '/audio/Quavo & Takeoff - Hotel Lobby.mp3', 
    audio_cover : '/cover/migos_hotel_lobby.jpg', 
    audio_author : 'Quavo & Takeoff', 
    audio_name : 'Hotel Lobby', 
    audio_bg : '#F9F3E8'
  }, 
  {
    audio_src : '/audio/SleazyWorld Go - Step 1 ft. Offset.mp3', 
    audio_cover : '/cover/step_one.jpeg', 
    audio_author : 'SleazyWorld Go ft Offset', 
    audio_name : 'Step One', 
    audio_bg : '#496F83'
  }, 
  {
    audio_src : '/audio/SPOTEMGOTTEM_Feat._Pooh_Shiesty_-Beatbox_2-_(Official_Video)(128k).mp3', 
    audio_cover : '/cover/beatbox.jpeg', 
    audio_author : 'Spotemgottem ft Pooh_Shiesty', 
    audio_name : 'Beatbox', 
    audio_bg : '#FBF0EB'
  }, 
  {
    audio_src : '/audio/Stripper Bowl.mp3', 
    audio_cover : '/cover/quality_vol2.jpg', 
    audio_author : 'Migos', 
    audio_name : 'Stripper Bowl', 
    audio_bg : '#151618'
  }, 
  {
    audio_src : '/audio/YNW Melly - Murder On My Mind.mp3', 
    audio_cover : '/cover/murder_on_my_mind.jpg', 
    audio_author : 'YNW Melly', 
    audio_name : 'Murder On My Mind', 
    audio_bg : '#272727'
  }, 
  {
    audio_src : '/audio/yt5s.com - Fivio Foreign - Magic City (Official Video) ft. Quavo (128 kbps).mp3', 
    audio_cover : '/cover/magic_city.png', 
    audio_author : 'Fivio Foreign ft Quavo', 
    audio_name : 'Magic City', 
    audio_bg : '#272727'
  }, 
  {
    audio_src : '/audio/yt5s.com - Remble - Rocc Climbing (feat. Lil Yachty) [Official Music Video] (128 kbps).mp3', 
    audio_cover : '/cover/rocc_climbing.jpeg', 
    audio_author : 'Remble ft Lil Yatchy', 
    audio_name : 'Rocc Climbing', 
    audio_bg : '#272822'
  }, 
  {
    audio_src : '/audio/yt5s.com - Takeoff, Rich The Kid - Crypto (Official Video) (128 kbps).mp3', 
    audio_cover : '/cover/crypto.jpeg', 
    audio_author : 'Rich The Kid ft Takeoff', 
    audio_name : 'Crypto', 
    audio_bg : '#363A77'
  }, 
  {
    audio_src : '/audio/ - Rich The Kid, Quavo & TakeOff - Too Blessed.mp3', 
    audio_cover : '/cover/too_blessed.jpeg', 
    audio_author : 'Rich The Kid ft Quavo & Takeoff', 
    audio_name : 'Too Blessed', 
    audio_bg : '#BCD2E5'
  }, 
  {
    audio_src : '/audio/ -Carnage ft. Tyga, OhGeesy & Takeoff - Hella Neck.mp3', 
    audio_cover : '/cover/hella_neck.jpg', 
    audio_author : 'Carnage ft Tyga, Takeoff & OhGeesy', 
    audio_name : 'Hella Neck', 
    audio_bg : '#222222'
  }, 
  {
    audio_src : '/audio/- Future ft. Young Thug & Quavo - Upscale.mp3', 
    audio_cover : '/cover/upscale.jpg', 
    audio_author : 'Future ft Young Thug & Quavo', 
    audio_name : 'Upscale', 
    audio_bg : '#D8D8D8'
  }, 
  {
    audio_src : '/audio/- Lil Tjay - Beat The Odds.mp3', 
    audio_cover : '/cover/Lil-Tjay-Beat-The-Odds.jpg', 
    audio_author : 'Lil Tjay', 
    audio_name : 'Beat The Odds', 
    audio_bg : '#CCC4BC'
  }, 
  {
    audio_src : '/audio/- Offset - Cinco De Mayo Feat. Young Nudy.mp3', 
    audio_cover : '/cover/cinco_de_mayo.png', 
    audio_author : 'Offset ft Young Nudy', 
    audio_name : 'Cinco De Mayo', 
    audio_bg : '#EAA604'
  }, 
  {
    audio_src : '/audio/- Quavo x Evander Griiim - Baile.mp3', 
    audio_cover : '/cover/quavo_baile.jpg', 
    audio_author : 'Quavo ft Evander Griiime', 
    audio_name : 'Baile', 
    audio_bg : '#F1F1ED'
  }, 
  {
    audio_src : '/audio/-Young Thug - The London (ft. J. Cole & Travis Scott).mp3', 
    audio_cover : '/cover/london.jpg', 
    audio_author : 'Young Thug ft J. Cole & Travis Scott', 
    audio_name : 'London', 
    audio_bg : '#2FBC34'
  }, 
  {
    audio_src : '/audio/ -- DJ Khaled - PARTY  ft. Quavo, Takeoff.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'Quavo & TakeOff', 
    audio_name : 'Party All The Time', 
    audio_bg : '#254E31'
  }, 
  {
    audio_src : '/audio/ --Lil Baby x 42 Dugg - We Paid.mp3', 
    audio_cover : '/cover/my_turn.jpeg', 
    audio_author : 'Lil Baby x 42 Dugg', 
    audio_name : 'We Paid', 
    audio_bg : '#231F4D'
  }, 
  {
    audio_src : '/audio/ --Offset - CODE ft. Moneybagg Yo.mp3', 
    audio_cover : '/cover/CODECOVER.jpg', 
    audio_author : 'Offset ft Moneyybagg Yo', 
    audio_name : 'Code', 
    audio_bg : '#F5F3F8'
  }, 
  {
    audio_src : '/audio/ --Quavo & Takeoff Ft. Birdman - Big Stunna.mp3', 
    audio_cover : '/cover/Big-Stunna.jpg', 
    audio_author : 'Quavo & Takeoff Birdman', 
    audio_name : 'Big Stunna', 
    audio_bg : '#7A88A2'
  }, 
  {
    audio_src : '/audio/ --Roddy Ricch - Down Below.mp3', 
    audio_cover : '/cover/down_below.jpg', 
    audio_author : 'Roddy Ricch', 
    audio_name : 'Down Below', 
    audio_bg : '#E2E1E2'
  }, 
  {
    audio_src : '/audio/ --Trippie Redd – Big 14 feat. Offset & Moneyybagg Yo.mp3', 
    audio_cover : '/cover/big_14.jpeg', 
    audio_author : 'Trippie Red ft Offset & Moneyybagg Yo', 
    audio_name : 'Big 14', 
    audio_bg : '#6D473D'
  },
  {
    audio_src : '/audio/--Offset - 5 4 3 2 1.mp3', 
    audio_cover : '/cover/54321.png', 
    audio_author : 'Offset', 
    audio_name : '5 4 3 2 1', 
    audio_bg : '#C6D1DB'
  }, 
  {
    audio_src : '/audio/--Lil Baby x Gunna - _Drip Too Hard.mp3', 
    audio_cover : '/cover/drip_hard.jpg', 
    audio_author : 'Lil Baby ft Gunna', 
    audio_name : 'Drip Too Hard', 
    audio_bg : '#E3D8C3'
  }, 
  {
    audio_src : '/audio/Metro Boomin - Space Cadet (feat. Gunna).mp3', 
    audio_cover : '/cover/space_cadet.png', 
    audio_author : 'Metro Boomin ft Gunna', 
    audio_name : 'Space Cadet', 
    audio_bg : '#FDF8C1'
  }, 
  {
    audio_src : '/audio/Armani White - BILLIE EILISH.mp3', 
    audio_cover : '/cover/armwhitecover.jpg', 
    audio_author : 'Armani White', 
    audio_name : 'BILLIE EILISH', 
    audio_bg : '#DDDADB'
  }, 
  {
    audio_src : '/audio/Central Cee doja.mp3', 
    audio_cover : '/cover/central cee doja.png', 
    audio_author : 'Central Cee', 
    audio_name : 'Doja', 
    audio_bg : '#D2E1F2'
  }, 
  {
    audio_src : '/audio/Jocks on u.mp3', 
    audio_cover : '/cover/jokesonu.jpg', 
    audio_author : 'Kado', 
    audio_name : 'Jocks On You', 
    audio_bg : '#E5F8E4'
  }, 
  {
    audio_src : '/audio/Lil uzi vert flex up.mp3', 
    audio_cover : '/cover/flex up.jpg', 
    audio_author : 'Lil Uzi Vert', 
    audio_name : 'Flex Up', 
    audio_bg : '#A3A0AB'
  }, 
  {
    audio_src : '/audio/MTTM DonDon rainy days.mp3', 
    audio_cover : '/cover/rainy days.jpg', 
    audio_author : 'MTTM DonDon', 
    audio_name : 'Rainy Days', 
    audio_bg : '#7890B2'
  }, 
  {
    audio_src : '/audio/Pnb rock middle child ft xxxTentation.mp3', 
    audio_cover : '/cover/pnb rock middle child.jpg', 
    audio_author : 'Pnb Rock ft XXXTentation', 
    audio_name : 'Middle Child', 
    audio_bg : '#311C7A'
  }, 
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
    
    
    open_in_full.addEventListener('click',function(){
      var aTag = document.createElement('a')
      aTag.setAttribute('href', 'playlist_1.html')
      aTag.target = '_parent'
      window.open(aTag)
    })
    
    playlist_one_btn.addEventListener('click',function(){
      if (playlist_one_audio_src.paused) {
        playlist_one_audio_src.play()
        playlist_one_btn.textContent = 'pause_arrow'
        favicon.setAttribute('href', playlist_one_audio[a].audio_cover)
        document.title = playlist_one_audio[a].audio_author + ' / ' + playlist_one_audio[a].audio_name
        show_playing_container.classList.remove('active')
        main_container.classList.add('padding_bottom')
        setTimeout(function(){
         show_playing_container.classList.add('active')
        },100)
        show_playing_img.setAttribute('src', playlist_one_audio[a].audio_cover)
        show_playing_title.innerHTML = playlist_one_audio[a].audio_name
        show_playing_artist_name.innerHTML = playlist_one_audio[a].audio_author
        
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
        favicon.setAttribute('href', playlist_one_audio[a].audio_cover)
        document.title = playlist_one_audio[a].audio_author + ' / ' + playlist_one_audio[a].audio_name
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
        favicon.setAttribute('href', playlist_one_audio[a].audio_cover)
        document.title = playlist_one_audio[a].audio_author + ' / ' + playlist_one_audio[a].audio_name
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
  
