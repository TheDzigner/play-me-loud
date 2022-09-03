let audios = 
['/culture 2/ Migos -  Stir Fry Audio.mp3','/culture 2/ Migos - BBO  ft. 21 Savage.mp3', '/culture 2/ Migos - Gang Gang.mp3', '/culture 2/ Migos - Movin\' Too Fast.mp3', '/culture 2/ Migos - Narcos.mp3', '/culture 2/ Migos - Open It Up.mp3', '/culture 2/ Migos - Too Much Jewelry.mp3', '/culture 2/Migos - Auto Pilot.mp3', '/culture 2/Migos - Beast.mp3', '/culture 2/Migos - CC  ft. Gucci Mane.mp3', '/culture 2/Migos - Crown The Kings.mp3', '/culture 2/Migos - Culture National Anthem.mp3','/culture 2/Migos - Emoji A Chain.mp3', '/culture 2/Migos - Flooded.mp3', '/culture 2/Migos - Higher We Go.mp3','/culture 2/Migos - Notice Me ft. Post Malone.mp3', '/culture 2/Migos - Supastars.mp3', '/culture 2/Migos - Too Playa ft. 2 Chainz.mp3', '/culture 2/Migos - Top Down On Da NAWF.mp3', '/culture 2/Migos - Walk It Talk It ft. Drake.mp3', '/culture 2/Migos - White Sand ft. Travis Scott, Ty Dolla $ign, Big Sean.mp3', '/culture 2/Migos - Work Hard.mp3', '/culture 2/Migos, Nicki Minaj, Cardi B - MotorSport.mp3'] 


let audio_name = 
['Stir Fry', 'BBO', 'Gang Gang', 'Moving Too Fast','Narcos', 'Open It Up', 'Too Much Jewelry', 'Auto Pilot', 'Beats', 'CC', 'Crown The Kings', 'Culture National Anthem', 'Emoji A Chain', 'Flooded', 'Higher We Go', 'Notice Me', 'Supastars', 'Too Playa', 'Top Down On Da Nawf', 'Walk It Talk It', 'White Sand', 'Work Hard', 'Motorsports']

let audio_author = 
['Migos', 'Migos ft 21 Savage', 'Migos', 'Migos', 'Migos', 'Migos', 'Quavo & Takeoff', 'Migos', 'Migos', 'Migos ft Gucci Mane', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos ft Post Malone', 'Migos', 'Migos ft 2 Chainz', 'Migos', 'Migos ft Drake', 'Migos ft Travis Scott & Ty Dolla $ign & Big Sean', 'Migos', 'Migos ft Cardi B & Nicki Minaj']


const audio_src = 
document.getElementById('audio_src')


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
let loop_btn = document.querySelector('#loop_song')
var toogle_container = document.getElementById('toggle_container')
var container = document.querySelector('.container')
audio_src.loop = false
document.getElementById('total_song').innerHTML = audios.length 
var music_cover = document.getElementById('logo')
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

loop_btn.addEventListener('click', function(){
  if (audio_src.loop == false) {
      audio_src.loop = true;
      loop_btn.classList.add('active')
  } else {
    audio_src.loop = false;
   loop_btn.classList.remove('active')
  }

})


function nextbtn() 
{
  if (i < audios.length - 1 || i < audio_name.length - 1 || i < audio_author.length - 1 ) {
    i++ 
    document.getElementById('current_song').innerHTML = i +'/'
    playState.classList.replace('fa-play', 'fa-pause')
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  else {
    i = 0 
     document.getElementById('current_song').innerHTML = i +'/'
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  
}










function prevbtn() 
{
  if (i > 0) {
    i--
      document.getElementById('current_song').innerHTML =  i +'/'
     playState.classList.replace('fa-play', 'fa-pause')
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = audios.length - 1 || audio_cover.length - 1 || audio_name.length - 1 || audio_author.length - 1
    document.getElementById('current_song').innerHTML =  i +'/'
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
  
  
}


function showAudio(){
  if (i < audios.length - 1 || i < audio_cover.length - 1 || i < audio_name.length - 1) {
    i++
     document.getElementById('current_song').innerHTML = i +'/'
    audio_src.setAttribute('src', audios[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = 0
     document.getElementById('current_song').innerHTML =  i +'/'
    audio_src.setAttribute('src', audios[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
}

window.onload = showAudio;
