let audios = ['/huncho jack/Best Man.mp3', '/huncho jack/Black & Chinese.mp3', '/huncho jack/Dubai Shit.mp3','/huncho jack/Eye 2 Eye.mp3','/huncho jack/Go-1.mp3','/huncho jack/How U Feel.mp3', '/huncho jack/Huncho Jack.mp3', '/huncho jack/Modern Slavery.mp3', '/huncho jack/Moon Rock.mp3', '/huncho jack/Motorcycle Patches.mp3', '/huncho jack/Saint.mp3', '/huncho jack/Where U From.mp3'] 
  

let audio_name = ['Best man', 'Black and Chinese', 'Dubai Sh!t', 'Eye 2 Eye', 'Go', 'How You Feel', 'Huncho Jack', 'Moderne Slavery', 'Moon Rock', 'Motorcycle Patches', 'Saint', 'Where You From']

let audio_author = ['Quavo & Travis Scott', 'Quavo & Travis Scott ', 'Quavov & Travis Scott ft Offset', 'Quavo & Travis Scott ft Takeoff ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ', 'Quavo & Travis Scott ']


// get the audio src frm the Dom
const audio_src = document.getElementById('audio_src')

//cover that will be displaying related to the audio 
const audio_img = document.getElementById('audio_img')



//next audio button
var nextbtn = document.getElementById('nextbtn').addEventListener('click', nextbtn)

//play previous audio button
var prevbtn = document.getElementById('prevbtn').addEventListener('click', prevbtn)

//play audio button 
var playbtn = document.getElementById('playbtn').addEventListener('click', playbtn)


//range that will be displaying the currentTime audio's gime
var audio_length = document.getElementById('range')

//loop audio button
let loop_btn = document.querySelector('#loop_song')

//get the container, toggle up / and down 
var container = document.querySelector('.container')

//for audio increases / decreases
let i = 0

//set audio loop default 
audio_src.loop = false

//audio will be displaying on the browser / current audio cover
var music_cover = document.getElementById('logo')

//select the play / pause icon 
var playIcone = document.querySelector('#playbtn  .material-icons-round ')

//get the current audios length and display it
var get_audio_length = document.getElementById('length')

// volume up / down 
var Input_volume = document.getElementById('audio_volume')

//open Playlist container 
var open_playlist_container = document.getElementById('open_playlist_container')

//playlist container
var playlist_container = document.querySelector('.playlist')

//button download apk 
var get_apk = document.getElementById('get_apk')

//get share container 
var share_container = document.querySelector('.share')

//get the button to copy web url 
var copy_web_url = document.getElementById('copy_url')

//get the button to open shsre container 
var open_share_container = document.getElementById ('open_share_container')


open_playlist_container.addEventListener('click', function(){
  playlist_container.classList.toggle('active')
  share_container.classList.remove('active')
})

open_share_container.addEventListener('click',function(){
  share_container.classList.toggle('active')
  playlist_container.classList.remove('active')
})

get_apk.addEventListener('click',function(){
  if (confirm('Download Apk?')) {
      window.open('https://www.webintoapp.com/store/69868')
  } 
})

copy_web_url.addEventListener('click', (e) => {
  //get the input to copy the url 
  var input_url = document.getElementById('Input_url')
  input_url.value = 'Hey im listening to' + ' ' + `${audio_name[i]}` + ' ' + 'by' + ' ' + audio_author[i] + ' ' + 'at the number range of' + ' ' + i + '/' + audios.length + ' ' + location.href;
  input_url.style.pointerEvents = 'none'
  e.preventDefault()
  input_url.select()
  document.execCommand('copy')
  copy_web_url.textContent = 'Url Copied!'
  setTimeout(function() {
    copy_web_url.textContent = 'Share With Friends!'
  }, 1000)
})

//audio progress bar / current time
audio_length.addEventListener('input',function(){
  audio_src.currentTime = audio_length.value 
  //set it max value to the audio duration 
  audio_length.max = Math.floor(audio_src.duration)
})

//update the progress bar 
audio_src.addEventListener('timeupdate',function (){
  audio_length.value = Math.floor(audio_src.currentTime )
  audio_length.max = Math.floor(audio_src.duration)
})

//play the next, when the previous ends
audio_src.addEventListener('ended', function() {
  if (i < audios.length - 1 || i < audio_name.length - 1 || i < audio_author.length - 1) {
    i++
    get_audio_length.innerHTML = i + '/' + audios.length
    playIcone.textContent = 'pause_arrow'
    //set a attribute for the current audio path
    audio_src.setAttribute('src', audios[i])
    //play it automatically 
    audio_src.play()
    //set the current cover
    document.getElementById('audio_name').innerHTML = audio_name[i]
    //display the audio author 
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
  else {
    i = 0
    get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
    audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
})  


//function to play the audio 
function playbtn()
{
  //if-else statement fr the play button 
  if (audio_src.paused) {
    audio_src.play()
    playIcone.textContent = 'pause_arrow'
  } else {
     audio_src.pause()
    playIcone.textContent =  'play_arrow'
  }
}

//if-else statement, fr toggle loop audio 
loop_btn.addEventListener('click', function(){
  //set as false default 
  if (audio_src.loop == false) {
      audio_src.loop = true;
      loop_btn.classList.add('active')
  } else {
    audio_src.loop = false;
   loop_btn.classList.remove('active')
  }

})

 //volume enter, volume up / down 
Input_volume.addEventListener('input',function(){
  audio_src.volume = this.value / 100
})

//play the next audio
function nextbtn() 
{
  if (i < audios.length - 1 || i < audio_cover.length - 1 || i < audio_name.length - 1 || i < audio_author.length - 1 ) {
    i++ 
    get_audio_length.innerHTML = i + '/' + audios.length
     playIcone.textContent = 'pause_arrow'
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  else {
    i = 0
    get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  
}






//play the previous audio
function prevbtn() 
{
  if (i > 0 ) {
    i--
      get_audio_length.innerHTML = i + '/' + audios.length
      playIcone.textContent = 'pause_arrow'
     audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = audios.length - 1 || audio_cover.length - 1 || audio_name.length - 1 || audio_author.length - 1
     get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
  
}

//show audio /cover /name /title when the page load
function showAudio(){
  if (i < audios.length - 1 || i < audio_cover.length - 1 || i < audio_name.length - 1) {
    i++
     get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = 0
    get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
}


window.onload = showAudio;
