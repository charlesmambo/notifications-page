
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
          <p class="user-text"> <span class="user-link"><a href="#">${name}</a></span> reacted to your recent post  <span class="user-link"><a href="#">${link}</a></span></p>
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
      <span class="user-link"><a href="#">${name}</a></span> followed you</p>
    <p class="time">${time}</p>
  </div>
         `
}

const jacobElementId = 'webber-el';
const jacobImg = 'images/avatar-mark-webber.webp';
const jacobName = 'Mark Webber';
const jacobLink = 'My first tournament today!';
const jacobTime = '1 day ago';

renderPersonProfile(webberElementId, webberImg, webberName, webberLink, webberTime);
angelaProfile(angelaElementId, angelaImg, angelaName, angelaTime);

