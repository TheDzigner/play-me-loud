// my audio path
let audios = ['/audio/ Migos - _Fucking Up Profits_ (Official Audio) (128 kbps).mp3', '/audio/DJ_Durel,_Migos_-_Hot_Summer_(Official_Video)(256k).mp3', '/audio/Future - Mask Off.mp3', '/audio/Kodak Black - Usain Boo .mp3', '/audio/Lil Yachty - MICKEY ft. Offset, Lil Baby.mp3', '/audio/Megan_Thee_Stallion_-_Cry_Baby_(feat._DaBaby)_[Official_Audio](256k).mp3', '/audio/Migos - T-Shirt.mp3', '/audio/NAV_-_Myself_(Official_Music_Video)(128k).mp3', '/audio/Quavo & Takeoff - Hotel Lobby .mp3', '/audio/Rich_The_Kid_-_Lost_It_ft._Quavo_&_Offset_(The_World_Is_Yours)(128k).mp3','/audio/SleazyWorld Go - Step 1 ft. Offset.mp3', '/audio/SPOTEMGOTTEM_Feat._Pooh_Shiesty_-Beatbox_2-_(Official_Video)(128k).mp3', '/audio/Stripper Bowl.mp3', '/audio/Takeoff.mp3', '/audio/YNW Melly - Murder On My Mind.mp3', '/audio/yt5s.com - Fivio Foreign - Magic City (Official Video) ft. Quavo (128 kbps).mp3','/audio/yt5s.com - Migos - Movin\' Too Fast (Audio) (192 kbps).mp3', '/audio/yt5s.com - Quality Control - Too Hotty by Migos featuring Eurielle (128 kbps).mp3', '/audio/yt5s.com - Remble - Rocc Climbing (feat. Lil Yachty) [Official Music Video] (128 kbps).mp3', '/audio/yt5s.com - Takeoff, Rich The Kid - Crypto (Official Video) (128 kbps).mp3', '/audio/French Montana & Drake - No Stylist.mp3', '/audio/ - Quavo - Doors Go Up! Ft. Trippie Redd.mp3', '/audio/ - Rich The Kid, Quavo & TakeOff - Too Blessed.mp3', '/audio/ -Carnage ft. Tyga, OhGeesy & Takeoff - Hella Neck.mp3', '/audio/- Future ft. Young Thug & Quavo - Upscale.mp3', '/audio/- Lil Tjay - Beat The Odds.mp3', '/audio/- Offset - Cinco De Mayo Feat. Young Nudy.mp3', '/audio/- Quavo x Evander Griiim - Baile.mp3', '/audio/- Tee Grizzley - Pray For The Drip ft. Offset.mp3', '/audio/-Young Thug - The London (ft. J. Cole & Travis Scott).mp3', '/audio/ -- DJ Khaled - PARTY  ft. Quavo, Takeoff.mp3', '/audio/ --Lil Baby x 42 Dugg - We Paid.mp3', '/audio/ --Offset - CODE ft. Moneybagg Yo.mp3', '/audio/ --Quavo & Takeoff Ft. Birdman - Big Stunna.mp3','/audio/ --Roddy Ricch - Down Below.mp3', '/audio/ --Trippie Redd – Big 14 feat. Offset & Moneyybagg Yo.mp3', '/audio/--Offset - 5 4 3 2 1.mp3', '/audio/--Lil Baby x Gunna - _Drip Too Hard.mp3']

// my audio cover
let audio_cover = ['/cover/20210402_183558.jpg', '/cover/Migos-Hot-Summer-Prod.-DJ-Durel.jpg', '/cover/Future-Mask-Off.jpg', '/cover/usain_boo.jpg', '/cover/Lil_Yachty_–_Lil_Boat_2.png', '/cover/cry_baby.jpeg', '/cover/migos_tshirt.jpg', '/cover/nav_myselft.png', '/cover/migos_hotel_lobby.jpg', '/cover/lost_it.png', '/cover/step_one.jpeg', '/cover/beatbox.jpeg', '/cover/quality_vol2.jpg', '/cover/thelastrocket.jpg', '/cover/murder_on_my_mind.jpg', '/cover/magic_city.png', '/cover/culture_2.jpg','/cover/quality_vol1.png', '/cover/rocc_climbing.jpeg', '/cover/crypto.jpeg','/cover/no stylist.png', '/cover/Quove.jpg', '/cover/too_blessed.jpeg', '/cover/hella_neck.jpg', '/cover/upscale.jpg', '/cover/Lil-Tjay-Beat-The-Odds.jpg', '/cover/cinco_de_mayo.png','/cover/quavo_baile.jpg', '/cover/pray_the_drip.jpg', '/cover/london.jpg', '/cover/party_all.jpeg', '/cover/my_turn.jpeg', '/cover/CODECOVER.jpg', '/cover/Big-Stunna.jpg', '/cover/down_below.jpg', '/cover/big_14.jpeg', '/cover/54321.png', '/cover/drip_hard.jpg']

//my audio title
let audio_name = ['Fucking Up Profits', 'Hot Summer', 'Mask Off', 'Usain Boo', 'Mickey Mouse', 'Cry Baby', 'T-shirt', 'Myself', 'Hotel Lobby', 'Lost It', 'Step One', 'Beatbox', 'Stripper Bowl', 'Last Memory', 'Murder On My Mind', 'Magic City', 'Moving Too Fast', 'Too Hotty', 'Rocc Climbing', 'Crypto', 'No Stylist', 'Doors go up', 'Too Blessed', 'Hella Neck', 'Upscale', 'Beat The Odds', 'Cinco De Mayo', 'Baile', 'Pray For The Drip', 'London', 'Party All The Night', 'We Paid', 'Code', 'Big Stunna', 'Down Below', 'Big 14', '5 4 3 2 1', 'Drip Too Hard']

//my audio author
let audio_author = ['Migos','Migos - Dj Durel', 'Future', 'Kodak Black', 'Lil Yatchy ft Offset & Lil Baby', 'Megan Thee Stallion ft Dababy', 'Migos', 'Nav', 'Quavo & Takeoff', 'Rich The Kid ft Quavo & Offset', 'SleazyWorld Go ft Offset', 'Spotemgottem ft Pooh_Shiesty', 'Migos', 'Takeoff', 'YNW Melly', 'Fivio Foreign', 'Migos', 'Migos - Eurielle', 'Remble ft Lil Yatchy', 'Rich The Kid ft Takeoff', 'French Montana ft Drake', 'Quavo ft Trippie Redd', 'Rich The Kid ft Quavo & Takeoff', 'Carnage ft Tyga, Takeoff & OhGeesy', 'Future ft Young Thug & Quavo', 'Lil Tjay', 'Offset ft Young Nudy', 'Quavo ft Evander Griiime', 'Tee Grizzley ft Offset', 'Young Thug ft J. Cole & Travis Scott','Quavo & TakeOff', 'Lil Baby x 42 Dugg', 'Offset ft Moneyybagg Yo', 'Quavo & Takeoff Birdman', 'Roddy Ricch', 'Trippie Red ft Offset & Moneyybagg Yo', 'Offset', 'Lil Baby ft Gunna']


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

  var HideHomeScreenBtn = document.getElementById('hide_home_screen')
  var Home_Screen = document.querySelector('.home_screen')
  
  HideHomeScreenBtn.addEventListener('click',function(){
      if(window.navigator.onLine){
      Home_Screen.classList.add('active')
      }else {
        HideHomeScreenBtn.innerText = "You're Offline"
      }
  })
  window.addEventListener('online',function(){
    Home_Screen.classList.add('active')
    HideHomeScreenBtn.innerText = "You're Offline"
  })

open_playlist_container.addEventListener('click', function(){
  playlist_container.classList.toggle('active')
  share_container.classList.remove('active')
})

open_share_container.addEventListener('click',function(){
  share_container.classList.toggle('active')
  playlist_container.classList.remove('active')
})

get_apk.addEventListener('click',function(){
  if (confirm('Would you like to download the Apk?')) {
    window.open('https://www.webintoapp.com/store/69868')
  } 
})

copy_web_url.addEventListener('click',(e)=>{
    //get the input to copy the url 
var input_url = document.getElementById('Input_url')
input_url.value = 'Hey im listening to' + ' ' + `${audio_name[i]}`+' ' + 'by' + ' ' +  audio_author[i] + ' ' + 'at the number range of'+ ' '+ i + '/' + audios.length + ' ' + location.href + audio_src;
input_url.style.pointerEvents='none'
    e.preventDefault()
    input_url.select()
    document.execCommand('copy')
    copy_web_url.textContent = 'Url Copied!'
    setTimeout(function(){
      copy_web_url.textContent = 'Share With Friends!'
    },1000)
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
    console.log(audio_src.result)
    //play it automatically 
    audio_src.play()
    //set the current cover
    audio_img.setAttribute('src', audio_cover[i])
    //display the audio name
    document.getElementById('audio_name').innerHTML = audio_name[i]
    //display the audio author 
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
  else {
    i = 0
    get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
    audio_src.play()
   audio_img.setAttribute('src', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
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
  audio_src.volume = this.value /100
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
     music_cover.setAttribute('href', audio_cover[i])
    audio_img.setAttribute('src',audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } 
  else {
    i = 0
    get_audio_length.innerHTML = i +  '/' + audios.length
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
     music_cover.setAttribute('href', audio_cover[i])
    audio_img.setAttribute('src', audio_cover[i])
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
    audio_img.setAttribute('src', audio_cover[i])
     music_cover.setAttribute('href', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = audios.length - 1 || audio_cover.length - 1 || audio_name.length - 1 || audio_author.length - 1
     get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
     audio_src.play()
    audio_img.setAttribute('src', audio_cover[i])
      music_cover.setAttribute('href', audio_cover[i])
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
    audio_img.setAttribute('src', audio_cover[i])
    music_cover.setAttribute('href', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  } else {
    i = 0
    get_audio_length.innerHTML = i + '/' + audios.length
    audio_src.setAttribute('src', audios[i])
    audio_img.setAttribute('src', audio_cover[i])
     music_cover.setAttribute('href', audio_cover[i])
    document.getElementById('audio_name').innerHTML = audio_name[i]
    document.getElementById('audio_author').innerHTML = audio_author[i]
  }
}


window.onload = showAudio;
