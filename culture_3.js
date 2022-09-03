let audios = 
['/cuture 3/Migos_-_Avalanche_(Lyrics)(256k).mp3', '/cuture 3/Migos_-_Birthday_(Lyric_Video)(256k).mp3',  '/cuture 3/Migos_-_Handle_My_Business_(Official_Audio)(256k).mp3',  '/cuture 3/Migos_-_How_did_I_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3',  '/cuture 3/Migos_-_How_We_Coming_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3',  '/cuture 3/Migos_-_Jane_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Mahomes_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Menace_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3',  '/cuture 3/Migos_-_Modern_Day_(Official_Video)(256k).mp3', '/cuture 3/Migos_-_New_Money_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3', '/cuture 3/Migos_-_Road_Runner_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Straightenin_(Official_Video)(256k).mp3', '/cuture 3/Migos_-_Time_For_Me_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Vaccine_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Why_Not_(Official_Audio)(256k).mp3', '/cuture 3/Migos_-_Working_A_Fool_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3', '/cuture 3/Migos_Feat._Cardi_B_-_Type_Shit_(Official_Audio)(256k).mp3', '/cuture 3/Migos Feat. Drake - Having Our Way.mp3', '/cuture 3/Migos_Feat._Juice_WRLD_-_Anti_Social_(Official_Audio)(256k).mp3', '/cuture 3/Migos_Feat._Polo_G_-_Malibu_(Official_Audio)(256k).mp3', '/cuture 3/Migos_Feat._Future_-_Picasso_(Official_Audio)(256k).mp3', '/cuture 3/Migos_Feat._Justin_Bieber_-_What_You_See_(Official_Audio)(256k).mp3 '] 


let audio_name = 
['Avalanche', 'Birthday', 'Handle My Business','How did i','How we coming', 'Jane - birking bag', 'Mahomes', 'Menace', 'Moderne day', 'New money','Roadrunner', 'Straightening', 'Time for me', 'Vaccine', 'Why not','Working a fool',  'Type sh!t', 'Having our way', 'Anti_Social', 'Malibu', 'Picasso', 'What you see']

let audio_author = 
['Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos', 'Migos ft Cardi B', 'Migos ft Drake', 'Migos ft Juicy Wrld', 'Migos ft Polo G', 'Migos ft Future', 'Migos ft Justin Bieber']


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
