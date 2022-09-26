let traumazine_album_btn = document.getElementById('traumazine_album_btn')
var traumazine_audio_src = document.getElementById('traumazine_audio_src')

let t = 0

let traumazine_audio = [
  {
    audio_src : '/traumazine_album/ Megan Thee Stallion - Her.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Her'
  },
  {
    audio_src : '/traumazine_album/ Megan Thee Stallion - Ungrateful (feat. Key Glock).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion ft Key Glock', 
    audio_name : 'Ungrateful'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Budget (feat. Latto).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion ft Latto', 
    audio_name : 'Budget'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Gift & A Curse.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Gift and Curse'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Ms. Nasty.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Ms. Nasty'
  }, 
  {
    audio_src : '/traumazine_album/Megan thee stallion - Nda.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'NDA'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Not Nice.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Not Nice'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Red Wine.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Red Wine'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Who Me (feat. Pooh Shiesty).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Who Me'
  }, 
  {
    audio_src : '/traumazine_album/ Megan Thee Stallion - Consistency (feat. Jhené Aiko).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion ft Jhené Aiko', 
    audio_name : 'Consistency'
  }, 
  {
    audio_src : '/traumazine_album/ Megan Thee Stallion - Sweetest Pie (feat. Dua Lipa).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Sweetest Pie'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Anxiety.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Anxiety'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Flip Flop.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Flip Flop'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Pressurelicious (feat. Future).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion', 
    audio_name : 'Pressurelicious'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Scary feat. Rico Nasty.mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion ft Rico Nasty', 
    audio_name : 'Scary'
  }, 
  {
    audio_src : '/traumazine_album/Megan Thee Stallion - Southside Royalty Freestyle (ft. Sauce Walka, Big Pokey & Lil Keke).mp3', 
    audio_cover : '/traumazine_album/megan_traumazine.jpg', 
    audio_author : 'Megan Thee Stallion ft Sauce Walka, Big Pokey, Lil Keke', 
    audio_name : 'Southside Royalty Freestyle'
  }
 ]
 
 

function traumazine_btn(){
      if (traumazine_audio_src.paused) {
        show_playing_container.classList.remove('active')
        main_container.classList.add('padding_bottom')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        main_container.style.marginBottom = '100px'
        traumazine_audio_src.play()
        traumazine_album_btn.textContent = 'pause_arrow'
        
        show_playing_img.setAttribute('src', traumazine_audio[t].audio_cover)
        show_playing_title.innerHTML = traumazine_audio[t].audio_name
        show_playing_artist_name.innerHTML = traumazine_audio[t].audio_author
        
        
        playlist_one_audio_src.pause()
        playlist_one_btn.textContent = 'play_arrow'
        
        gym_playlist_1_audio_src.pause()
        gym_playlist_one_btn.textContent = 'play_arrow'
        
      } else {
        traumazine_audio_src.pause()
        traumazine_album_btn.textContent = 'play_arrow'
      }
      
    } 
    
    traumazine_album_btn.onclick = traumazine_btn
    
    traumazine_audio_src.addEventListener("ended",function(){
      if (t < traumazine_audio.length - 1 ) {
        t++
        traumazine_audio_src.setAttribute('src', traumazine_audio[t].audio_src)
        traumazine_audio_src.play()
        show_playing_container.classList.remove('active')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        show_playing_title.innerHTML = traumazine_audio[t].audio_name
        show_playing_artist_name.innerHTML = traumazine_audio[t].audio_author
      } else {
        t = 0 
        traumazine_audio_src.setAttribute('src', traumazine_audio[t].audio_src)
        traumazine_audio_src.play()
        show_playing_container.classList.remove('active')
        setTimeout(function() {
          show_playing_container.classList.add('active')
        }, 100)
        show_playing_title.innerHTML = traumazine_audio[t].audio_name
        show_playing_artist_name.innerHTML = traumazine_audio[t].audio_author
      } 
    })
    
    window.addEventListener('load',function(){
      if (t < traumazine_audio.length - 1) {
        t++
        traumazine_audio_src.setAttribute('src', traumazine_audio[t].audio_src)
        show_playing_title.innerHTML = traumazine_audio[t].audio_name
        show_playing_artist_name.innerHTML = traumazine_audio[t].audio_author
      } else {
        t = 0
        traumazine_audio_src.setAttribute('src', traumazine_audio[t].audio_src)
        show_playing_title.innerHTML = traumazine_audio[t].audio_name
        show_playing_artist_name.innerHTML = traumazine_audio[t].audio_author
      }
    })
