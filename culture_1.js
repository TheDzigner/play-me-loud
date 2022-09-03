let audios = 
['/culture 1/ Migos - All Ass.mp3', '/culture 1/ Migos - Brown Paper Bag.mp3', '/culture 1/ Migos - Culture ft DJ Khaled.mp3', '/culture 1/ Migos - Deadz feat. 2 Chainz.mp3', '/culture 1/ Migos - Get Right Witcha.mp3', '/culture 1/ Migos - Kelly Price ft Travis Scott.mp3', '/culture 1/ Migos - Out Yo Way.mp3', '/culture 1/ Migos - Slippery feat. Gucci Mane.mp3', '/culture 1/ Migos - T-Shirt.mp3', '/culture 1/ Migos - What The Price.mp3', '/culture 1/Migos - Bad and Boujee ft Lil Uzi Vert.mp3', '/culture 1/Migos - Big On Big.mp3', '/culture 1/Migos _Call Casting.mp3'] 


let audio_name = 
['All Ass', 'Brown Paper Bag', 'Culture', 'Deadz', 'Get Right Witcha', 'Kelly Price', 'Out Yo Way', 'slippery', 'T-shirt', 'What The Price', 'Bad And Boujee', 'Big On Big', 'call Casting']

let audio_author = 
['Migos', 'Migos', 'Migos ft Dj Khaled', 'Migos ft 2 Chainz', 'Migos', 'Migos ft Travis Scott ', 'Migos', 'Migos ft Gucci Mane', 'Migos', 'Migos', 'Migos ft Lil Uzi Vert', 'Migos', 'Migos']


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
})


  audio_src.addEventListener('ended', function() {
    if (i < audios.length - 1 || i < audio_name.length - 1 || i < audio_author.length - 1) {
      i++
      document.getElementById('current_song').innerHTML = i + '/'
      playState.classList.replace('fa-play', 'fa-pause')
      audio_src.setAttribute('src', audios[i])
      audio_src.play()
      document.getElementById('audio_name').innerHTML = audio_name[i]
      document.getElementById('audio_author').innerHTML = audio_author[i]
    }
    else {
      i = 0
      document.getElementById('current_song').innerHTML = i + '/'
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
