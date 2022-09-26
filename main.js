
const usernameInput = document.getElementById('username')
var defaultUserName = 'JohnDoe123'


const data = {
  title : 'Play Me Loud', 
  text : 'Free Online Music, Click to play now', 
  url : ''
}

function my_data(){
if (navigator.canShare && navigator.canShare(data)){
  navigator.share(data);
}else {
  alert('Your device does not support this sharing method, Try copy the website Url')
}
}



  
  
  
  
  // show username
    usernameInput.addEventListener('input',function(){
      if(usernameInput.value == ' '){
        this.value = defaultUserName
      }else {
        usernameInput.value = this.value
        localStorage.setItem('username',this.value)
      }
    })
    const getUserName = localStorage.getItem('username')
    if(getUserName == null || getUserName == ''){
      usernameInput.value = defaultUserName
      usernameInput.focus()
  }else {
    usernameInput.value = getUserName
  }
  
  // end show username 
  
  
  
  
   //cover playlist one
   
     


// gym playlist cover one 


//end of gym Playlist cover one
