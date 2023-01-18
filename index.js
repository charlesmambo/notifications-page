const markAllEl = document.querySelector('.notification-bar-text p');
const reddots = document.querySelectorAll('i');

markAllEl.addEventListener('click', function(){
  changeBackgroundColor();
})

function changeBackgroundColor(){
   document.getElementById('webber-el').classList.add('remove-background');
   document.getElementById('angela-g').classList.add('remove-background');
   document.getElementById('jacob-el').classList.add('remove-background');
   document.getElementById('mark-icon').classList.add('hide-reddot');
   document.getElementById('angie-icon').classList.add('hide-reddot');
   document.getElementById('jacob-icon').classList.add('hide-reddot');
   document.getElementById('num-bar').innerHTML = 0;
}

const messageIcon = document.getElementById('message-icon');
messageIcon.addEventListener('click', function(){
  document.querySelector('.hidden-div').classList.toggle('show');
  document.getElementById('message-icon').classList.add('stop-animation')

});

function bigImg(x) {
  document.getElementById('message-icon').classList.add('stop-animation')
}

function normalImg(x) {
  document.getElementById('message-icon').classList.remove('stop-animation')
}






const webberElementId = 'webber-el';
const webberImg = 'images/avatar-mark-webber.webp';
const webberName = 'Mark Webber';
const webberLink = 'My first tournament today!';
const webberTime = '1m ago';

function renderPersonProfile(elementId, avatar, name, link, time){
    document.getElementById(elementId).innerHTML = `
        <div class="user-img-container">
           <img src="${avatar}" alt="mark's profile picture">
        </div>
        <div class="user-post-container">
          <p class="user-text">
            <span class="user-link">
                <a href="#">${name}</a>
            </span> reacted to your recent post  
            <span class="user-link">
               <a href="#">${link}</a>
            </span>

            <i class="fa-solid fa-circle" id="mark-icon"></i>
          </p>
        <p class="time">${time}</p>
        </div>
         `
}

const angelaElementId = 'angela-g';
const angelaImg = 'images/avatar-angela-gray.webp';
const angelaName = 'Angela Gray';
const angelaTime = '5m ago';

function angelaProfile(elementId, avatar, name, time){
    document.getElementById(elementId).innerHTML = `
    <div class="user-img-container">
     <img src="${avatar}" alt="angela's profile picture">
    </div>
    <!----------- User Post ------>
    <div class="user-post-container">
    <p class="user-text">
      <span class="user-link"><a href="#">${name}</a></span> followed you <i class="fa-solid fa-circle" id="angie-icon"></i></p>
      
    <p class="time">${time}</p>
  </div>
         `
}

const jacobElementId = 'jacob-el';
const jacobImg = 'images/avatar-jacob-thompson.webp';
const jacobName = 'Jacob Thompson';
const jacobLink = 'Chess Club';
const jacobTime = '1 day ago';

function jacobProfile(elementId, avatar, name, link, time){
  document.getElementById(elementId).innerHTML = `
      <div class="user-img-container">
         <img src="${avatar}" alt="jacob's profile picture">
      </div>
      <div class="user-post-container">
        <p class="user-text"> 
          <span class="user-link">
            <a href="#">${name}</a>
          </span> reacted to your recent post  
            <span class="user-link">
            <a href="#">${link}</a>
            </span>
            <i class="fa-solid fa-circle" id="jacob-icon"></i>
            </p>
      <p class="time">${time}</p>
      </div>
       `
}

renderPersonProfile(webberElementId, webberImg, webberName, webberLink, webberTime);
angelaProfile(angelaElementId, angelaImg, angelaName, angelaTime);
jacobProfile(jacobElementId, jacobImg, jacobName, jacobLink, jacobTime)

