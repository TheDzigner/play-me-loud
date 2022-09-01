let audios = ['/audio/ Migos - _Fucking Up Profits_ (Official Audio) (128 kbps).mp3', '/audio/DJ_Durel,_Migos_-_Hot_Summer_(Official_Video)(256k).mp3', '/audio/Future - Mask Off.mp3', '/audio/Kodak Black - Usain Boo .mp3', '/audio/Lil Yachty - MICKEY ft. Offset, Lil Baby.mp3', '/audio/Megan_Thee_Stallion_-_Cry_Baby_(feat._DaBaby)_[Official_Audio](256k).mp3', '/audio/Migos - T-Shirt.mp3', '/audio/NAV_-_Myself_(Official_Music_Video)(128k).mp3', '/audio/Quavo & Takeoff - Hotel Lobby .mp3', '/audio/Rich_The_Kid_-_Lost_It_ft._Quavo_&_Offset_(The_World_Is_Yours)(128k).mp3','/audio/SleazyWorld Go - Step 1 ft. Offset.mp3', '/audio/SPOTEMGOTTEM_Feat._Pooh_Shiesty_-Beatbox_2-_(Official_Video)(128k).mp3', '/audio/Stripper Bowl.mp3', '/audio /Takeoff.mp3', '/audio/YNW Melly - Murder On My Mind.mp3', '/audio/yt5s.com - Fivio Foreign - Magic City (Official Video) ft. Quavo (128 kbps).mp3','/audio/yt5s.com - Migos - Movin\' Too Fast (Audio) (192 kbps).mp3', '/audio/yt5s.com - Quality Control - Too Hotty by Migos featuring Eurielle (128 kbps).mp3', '/audio/yt5s.com - Remble - Rocc Climbing (feat. Lil Yachty) [Official Music Video] (128 kbps).mp3', '/audio/yt5s.com - Takeoff, Rich The Kid - Crypto (Official Video) (128 kbps).mp3']

let audio_cover = ['/cover/20210402_183558.jpg', '/cover/Migos-Hot-Summer-Prod.-DJ-Durel.jpg', '/cover/Future-Mask-Off.jpg', '/cover/usain_boo.jpg', '/cover/Lil_Yachty_–_Lil_Boat_2.png', '/cover/cry_baby.jpeg', '/cover/migos_tshirt.jpg', '/cover/nav_myselft.png', '/cover/migos_hotel_lobby.jpg', '/cover/lost_it.png', '/cover/step_one.jpeg', '/cover/beatbox.jpeg', '/cover/quality_vol2.jpg', '/cover/thelastrocket.jpg', '/cover/murder_on_my_mind.jpg', '/cover/magic_city.png', '/cover/culture_2.jpg','/cover/quality_vol1.png', '/cover/rocc_climbing.jpeg', '/cover/crypto.jpeg']

let audio_name = ['Fucking Up Profits', 'Hot Summer', 'Mask Off', 'Usain Boo', 'Mickey Mouse', 'Cry Baby', 'T-shirt', 'Myself', 'Hotel Lobby', 'Lost It', 'Step One', 'Beatbox', 'Stripper Bowl', 'Last Memory', 'Murder On My Mind', 'Magic City', 'Moving Too Fast', 'Too Hotty', 'Rocc Climbing', 'Crypto']

let audio_author = ['Migos','Migos - Dj Durel', 'Future', 'Kodak Black', 'Lil Yatchy ft Offset & Lil Baby', 'Megan Thee Stallion ft Dababy', 'Migos', 'Nav', 'Quavo & Takeoff', 'Rich The Kid ft Quavo & Offset', 'SleazyWorld Go ft Offset', 'Spotemgottem ft Pooh_Shiesty', 'Migos', 'Takeoff', 'YNW Melly', 'Fivio Foreign', 'Migos', 'Migos - Eurielle', 'Remble ft Lil Yatchy', 'Rich The Kid ft Takeoff ']

const audio_src = 
document.getElementById('audio_src')

const audio_img =
document.getElementById('audio_img')

var nextbtn = document.getElementById('nextbtn').addEventListener('click', nextbtn)
var prevbtn = document.getElementById('prevbtn').addEventListener('click', prevbtn)
var playbtn = document.getElementById('playbtn').addEventListener('click', playbtn)

var playState =
document.querySelector('.fa-play')


var audio_length = document.getElementById('range')

var dots_menu = document.getElementById('dots_menu')
var menu =
document.querySelector('.menu_container')
var close_menu = 
document.querySelector('.close_menu')

var toogle_container = document.getElementById('toggle_container')
var container = document.querySelector('.container')
let i = 0




toogle_container.addEventListener('click', function(){
  container.classList.toggle('active')
})

dots_menu.addEventListener('click', e =>{
  menu.classList.add('active')
})
close_menu.addEventListener('click', e =>{
  menu.classList.remove('active')
})


audio_length.addEventListener('input',function(){
  audio_src.currentTime = audio_length.value 
  audio_length.max = Math.floor(audio_src.duration)

})

audio_src.addEventListener('timeupdate',function (){
  audio_length.value = Math.floor(audio_src.currentTime )
  audio_length.max = Math.floor(audio_src.duration)
  if (audio_length.value == Math.floor(audio_src.duration) ) {
    i++
    audio_src.setAttribute('src', audios[i])
    audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
})


  

function playbtn()
{
  if (audio_src.paused) {
    audio_src.play()
    playState.classList.replace('fa-play', 'fa-pause')
  } else {
    audio_src.pause()
   playState.classList.replace('fa-pause', 'fa-play')
  }
}


function nextbtn() 
{
  if (i < audios.length - 1 || i < audio_cover.length - 1 || i < audio_name.length - 1 || i < audio_author.length - 1 ) {
    i++ 
    playState.classList.replace('fa-play', 'fa-pause')
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  else {
    i = 0 
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  
}










function prevbtn() 
{
  if (i > 0) {
    i--
     playState.classList.replace('fa-play', 'fa-pause')
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = audios.length - 1 || audio_cover.length - 1 || audio_name.length - 1 || audio_author.length - 1
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
  
  
}


function showAudio(){
  if (i < audios.length - 1 || i < audio_cover.length - 1 || i < audio_name.length - 1) {
    i++
    audio_src.setAttribute('src', audios[i])
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    audio_src.setAttribute('src', audios[i])
    audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
}

window.onload = showAudio;
