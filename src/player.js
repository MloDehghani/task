// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
let wrapper =document.getElementById('showWraper')

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  // console.log(event)
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
  }
  }
  function stopVideo() {
    player.stopVideo();
  }

function showVideo() {
  document.getElementById('playerWrapper').classList.remove('hidden')
  document.getElementById('player').src ='http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'
  document.getElementById('modal').classList.add('modal')
}

window.onclick = function(event) {

  let wrapper2 = document.getElementById('buttonModal1')
  let wrapper3 = document.getElementById('modal1')
  let wrapper4 = document.getElementById('inputName')
  let wrapper5 = document.getElementById('inputEmail')
  let wrapper6 = document.getElementById('buttonModal2')
  let wrapper7 = document.getElementById('buttonModal3')
  // let wrapper6 = document.getElementById('submitButton')
 
  if (event.target != wrapper 
    && event.target != wrapper2 
    && event.target != wrapper3
    && event.target != wrapper4
    && event.target != wrapper5
    && event.target != wrapper6
    && event.target != wrapper7
    ) {
    document.getElementById('playerWrapper').classList.add('hidden')
    document.getElementById('modal1').classList.add('hidden')
    document.getElementById('modal').classList.remove('modal')
    document.getElementById('player').src =' '
    // event.target.stopVideo()
    // document.getElementById('playerWrapper')
  }
}