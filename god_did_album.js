let god_did_album_btn = document.getElementById('god_did_album_btn')
var god_did_audio = document.getElementById('god_did_audio')
var favicon = document.getElementById('favicon')
open_in_full_god_did = document.getElementById('open_in_full_god_did')
let g = 0

 let audio = [
  {
    audio_src : '/God Did_album/ DJ Khaled - ASAHD AND AALAM CLOTH TALK.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft ASAHD & Aalam', 
    audio_name : 'Cloth Talk'
  }, 
  {
    audio_src : '/God Did_album/ DJ Khaled - BILLS PAID  ft. Latto, City Girls.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Latto & City Girls', 
    audio_name : 'Bills Paid'
  }, 
  {
    audio_src : '/God Did_album/ DJ Khaled - GRATEFUL ft. Vory.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Vory', 
    audio_name : 'Grateful'
  }, 
  {
    audio_src : '/God Did_album/ DJ Khaled - LET\'S PRAY  ft. Don Toliver, Travis Scott.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Don Toliver & Travis Scott', 
    audio_name : 'Let\'s Pray'
  }, 
  {
    audio_src : '/God Did_album/ DJ Khaled - PARTY  ft. Quavo, Takeoff.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Quavo & Takeoff', 
    audio_name : 'Party'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - BEAUTIFUL ft. Future, SZA.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Future & Sza', 
    audio_name : 'Beautiful'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - BIG TIME ft. Future, Lil Baby.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Future & Lil Baby', 
    audio_name : 'Big Time'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - FAM GOOD, WE GOOD ft. Gunna, Roddy Ricch.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'Dj Khaled ft Gunna & Roddy Ricch', 
    audio_name : 'Fam Good, We Good'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - GOD DID ft. Rick Ross, Lil Wayne, Jay-Z, John Legend, Fridayy.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Rick Ross, Lil Wayne, Jay-Z, John Legend, and Fridayy', 
    audio_name : 'God Did'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - IT AIN\'T SAFE ft. Nardo Wick, Kodak Black.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Nardo Rick & Kodak Black', 
    audio_name : 'It Ain\'t Safe'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - JADAKISS INTERLUDE ft. Jadakiss.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Jadakiss', 
    audio_name : 'JADAKISS Interlude'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - Juice WRLD DID  ft. Juice WRLD.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Juice WRLD', 
    audio_name : 'Juice WRLD Did'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - KEEP GOING  ft. Lil Durk, 21 Savage, Roddy Ricch.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Lil Durk, 21 Savage, Roddy Ricch', 
    audio_name : 'Keep Going'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - NO SECRET ft. Drake.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Drake', 
    audio_name : 'No Secret'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - STAYING ALIVE  ft. Drake, Lil Baby.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Drake, & Lil Baby', 
    audio_name : 'Staying Alive'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - THESE STREETS KNOW MY NAME Ft. Skillibeng, Buju Banton, Capleton, Bounty Killer & Sizzla.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'DJ Khaled ft Skillibeng, Buju Banton, Capleton, Bounty Killer, Sizzla', 
    audio_name : 'These Streets Know My Name'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - USE THIS GOSPEL ft. Kanye West, Eminem.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'Dj Khaled ft Kanye West & Eminem', 
    audio_name : 'Use This Gospel'
  }, 
  {
    audio_src : '/God Did_album/DJ Khaled - WAY PAST LUCK ft. 21 Savage.mp3', 
    audio_cover : '/cover/party_all.jpeg', 
    audio_author : 'Dj Khaled ft 21 Savage', 
    audio_name : 'Way Past Luck'
  }

  
  ]


open_in_full_god_did.addEventListener('click',function(){
      var aTag = document.createElement('a')
      aTag.setAttribute('href', '/God Did album.html')
      aTag.target = '_parent'
      window.open(aTag)
    })

 

function god_did_btn(){
      if (god_did_audio.paused) {
        show_playing_container.classList.remove('active')
        main_container.classList.add('padding_bottom')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        
        god_did_audio.play()
        god_did_album_btn.textContent = 'pause_arrow'
        
          favicon.setAttribute('href', audio[g].audio_cover)

        document.title = audio[g].audio_author + ' / ' + audio[g].audio_name
        show_playing_img.setAttribute('src', audio[g].audio_cover)
        show_playing_title.innerHTML = audio[g].audio_name
        show_playing_artist_name.innerHTML = audio[g].audio_author
        
        
        playlist_one_audio_src.pause()
        playlist_one_btn.textContent = 'play_arrow'
        
        gym_playlist_1_audio_src.pause()
        gym_playlist_one_btn.textContent = 'play_arrow'
        
        traumazine_audio_src.pause()
        traumazine_album_btn.textContent = 'play_arrow'
        
      } else {
        god_did_audio.pause()
        god_did_album_btn.textContent = 'play_arrow'
      }
      
    } 
    
    god_did_album_btn.onclick = god_did_btn
    
    god_did_audio.addEventListener("ended",function(){
      if (g < audio.length - 1 ) {
        g++
        god_did_audio.setAttribute('src',audio[g].audio_src)
        god_did_audio.play()
        favicon.setAttribute('href', audio[g].audio_cover)
        document.title = audio[g].audio_author + ' / ' + audio[g].audio_name
        show_playing_container.classList.remove('active')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        show_playing_title.innerHTML = audio[g].audio_name
        show_playing_artist_name.innerHTML = audio[g].audio_author
      } else {
        g = 0 
        god_did_audio.setAttribute('src',audio[g].audio_src)
        god_did_audio.play()
        favicon.setAttribute('href',audio[g].audio_cover)
        document.title = audio[g].audio_author + ' / ' + audio[g].audio_name
        show_playing_container.classList.remove('active')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        show_playing_title.innerHTML  = audio[g].audio_name
        show_playing_artist_name.innerHTML = audio[g].audio_author
      } 
    })
    
    window.addEventListener('load',function(){
      if (g < audio.length - 1) {
        g++
        god_did_audio.setAttribute('src', audio[g].audio_src)
        show_playing_title.innerHTML = audio[g].audio_name
        show_playing_artist_name.innerHTML = audio[g].audio_author
      } else {
        g = 0
        god_did_audio.setAttribute('src', audio[g].audio_src)
        show_playing_title.innerHTML = audio[g].audio_name
        show_playing_artist_name.innerHTML = audio[g].audio_author
      }
    })
