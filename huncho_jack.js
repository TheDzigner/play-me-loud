let audios = ['/huncho jack/Best Man.mp3', '/huncho jack/Black & Chinese.mp3', '/huncho jack/Dubai Shit.mp3','/huncho jack/Eye 2 Eye.mp3','/huncho jack/Go-1.mp3','/huncho jack/How U Feel.mp3', '/huncho jack/Huncho Jack.mp3', '/huncho jack/Modern Slavery.mp3', '/huncho jack/Moon Rock.mp3', '/huncho jack/Motorcycle Patches.mp3', '/huncho jack/Saint.mp3', '/huncho jack/Where U From.mp3'] 
  

let audio_name = ['Best man', 'Black and Chinese', 'Dubai Sh!t', 'Eye 2 Eye', 'Go', 'How You Feel', 'Huncho Jack', 'Moderne Slavery', 'Moon Rock', 'Motorcycle Patches', 'Saint', 'Where You From']

let audio_author = ['Quavo & Travis Scott', 'Quavo & Travis Scott ', 'Quavov & Travis Scott ft Offset', 'Quavo & Travis Scott ft Takeoff ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ']


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

var toogle_container = document.getElementById('toggle_container')
let loop_btn = document.querySelector('#loop_song')
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
         document.getElementById('current_song').innerHTML = i +'/'
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

loop_btn.addEventListener('click', function() {
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
  if (i < audios.length - 1 ||  i < audio_name.length - 1 || i < audio_author.length - 1 ) {
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
     document.getElementById('current_song').innerHTML = i +'/'
     playState.classList.replace('fa-play', 'fa-pause')
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = audios.length - 1  || audio_name.length - 1 || audio_author.length - 1
      document.getElementById('current_song').innerHTML = i +'/'
     audio_src.play()
     audio_src.setAttribute('src', audios[i])
    audio_img.setAttribute('src', audio_cover[i])
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
    audio_src.setAttribute('src', audios[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
}

window.onload = showAudio;
