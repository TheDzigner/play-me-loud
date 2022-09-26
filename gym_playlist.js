var main_container = document.querySelector('.main')
var show_playing_img = document.getElementById('show_playing_img')
var gym_playlist_one_btn = document.getElementById('gym_playlist_one_btn')
var show_playing_artist_name =  document.querySelector('.show_playing_artist h5')
var show_playing_title = document.querySelector('.show_playing_artist p')
var favicon = document.getElementById('favicon')

var gym_playlist_1_audio_src = document.getElementById('gym_playlist_1_audio_src')
var show_playing_container = document.querySelector('.show_playing_container')

let gym_playlist_1_covers = document.getElementById('gym_playlist_1_covers');
let delay_b = 2000
let b = 0;
let count_b = 0 




let gym_playlist_audio = [
  {
    audio_src : '/gym_playlist/$tupid Young ft. AD - Thats Out.mp3', 
    audio_cover : '/gym_playlist/stupidYoung.jpg', 
    audio_author : '$tupid Young ft AD', 
    audio_name : 'That\'s Out '
  }, 
  {
    audio_src : '/gym_playlist/Big Sean - Wolves  ft. Post Malone.mp3', 
    audio_cover : '/gym_playlist/big sean wolves.jpg', 
    audio_author : 'Big Sean ft Post Malone', 
    audio_name : 'Wolves'
  }, 
  {
    audio_src : '/gym_playlist/Cordea ft YoungThug.mp3', 
    audio_cover : '/gym_playlist/cordeawassup.png', 
    audio_author : 'Cordea ft YoungThug', 
    audio_name : 'Wassup'
  }, 
  {
    audio_src : '/gym_playlist/Dababy_roof.mp3', 
    audio_cover : '/gym_playlist/dababyroof.jpg', 
    audio_author : 'Dababy', 
    audio_name : 'Roof'
  }, 
  {
    audio_src : '/gym_playlist/KILLY - Eye for an Eye.mp3', 
    audio_cover : '/gym_playlist/killy_eye.jpg', 
    audio_author : 'Killy', 
    audio_name : 'Eye For An Eye'
  }, 
  {
    audio_src : '/gym_playlist/Lil Tecca - SEASIDE ft. Iann Dior.mp3', 
    audio_cover : '/gym_playlist/seaside_lilTecca.png', 
    audio_author : 'Lil Tecca ', 
    audio_name : 'Seaside'
  }, 
  {
    audio_src : '/gym_playlist/Snot ft iann Dior.mp3', 
    audio_cover : '/gym_playlist/snot_likeme.png', 
    audio_author : 'Snot ft Iann Dior', 
    audio_name : 'Like Me'
  }, 
  {
    audio_src : '/gym_playlist/Zaytoven & F015.mp3', 
    audio_cover : '/gym_playlist/chasedown.jpg', 
    audio_author : 'Zaytoven & FO15', 
    audio_name : 'Chase Down'
  }, 
  
    ]


function changeGym_playlist_1_covers()
{
  gym_playlist_1_covers.src = gym_playlist_audio[count_b].audio_cover
  if (count_b < gym_playlist_audio.length - 1) {
    count_b++
  } else {
    count_b = 0
  }
}
setInterval('changeGym_playlist_1_covers()', delay_b)






function gym_playlist_1_playbtn() {
  if (gym_playlist_1_audio_src.paused) {
    gym_playlist_1_audio_src.play()
  gym_playlist_one_btn.textContent = 'play_arrow'
  favicon.setAttribute('href',gym_playlist_audio[b].audio_cover)
  document.title = gym_playlist_audio[b].audio_author + ' / ' + gym_playlist_audio[b].audio_name
show_playing_container.classList.remove('active')
 main_container.classList.add('padding_bottom')
setTimeout(function() {
  show_playing_container.classList.add('active')
}, 100)   
    
    
    show_playing_img.setAttribute('src', gym_playlist_audio[b].audio_cover)
    show_playing_title.innerHTML = gym_playlist_audio[b].audio_name
    show_playing_artist_name.innerHTML = gym_playlist_audio[b].audio_author
    
    
    playlist_one_audio_src.pause()
    playlist_one_btn.textContent = 'play_arrow'

    traumazine_audio_src.pause()
    traumazine_album_btn.textContent = 'play_arrow'

  } else {
    gym_playlist_1_audio_src.pause()
    gym_playlist_one_btn.textContent = 'play_arrow'
  }

}

gym_playlist_one_btn.onclick = gym_playlist_1_playbtn

gym_playlist_1_audio_src.addEventListener("ended", function() {
  if (b < gym_playlist_audio.length - 1) {
    b++
    gym_playlist_1_audio_src.setAttribute('src', gym_playlist_audio[b].audio_src)
    gym_playlist_1_audio_src.play()
    favicon.setAttribute('href',gym_playlist_audio[b].audio_cover)
    document.title = gym_playlist_audio[b].audio_author + ' / ' + gym_playlist_audio[b].audio_name
    show_playing_container.classList.remove('active')
    setTimeout(function() {
      show_playing_container.classList.add('active')
    }, 100)
    show_playing_img.setAttribute('src', gym_playlist_audio[b].audio_cover)
    show_playing_title.innerHTML = gym_playlist_audio[b].audio_name
    show_playing_artist_name.innerHTML = gym_playlist_audio[b].audio_author
  } else {
    b = 0
    gym_playlist_1_audio_src.setAttribute('src', gym_playlist_audio[b].audio_src)
    gym_playlist_1_audio_src.play()
    favicon.setAttribute('href',gym_playlist_audio[b].audio_cover)
    document.title = gym_playlist_audio[b].audio_author + ' / ' + gym_playlist_audio[b].audio_name
    show_playing_container.classList.remove('active')
    setTimeout(function() {
      show_playing_container.classList.add('active')
    }, 100)
    show_playing_img.setAttribute('src', gym_playlist_audio[b].audio_cover)
    show_playing_title.innerHTML = gym_playlist_audio[b].audio_name
    show_playing_artist_name.innerHTML = gym_playlist_audio[b].audio_author
  }
})


window.addEventListener('load', function() {
  if (b < gym_playlist_audio.length - 1) {
    b++
    gym_playlist_1_audio_src.setAttribute('src', gym_playlist_audio[b].audio_src)

    show_playing_img.setAttribute('src', gym_playlist_audio[b].audio_cover)
  } else {
    b = 0
    gym_playlist_1_audio_src.setAttribute('src', gym_playlist_audio[b].audio_src)
    show_playing_img.setAttribute('src', gym_playlist_audio[b].audio_cover)
  }
})
