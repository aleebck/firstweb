
const params = new URLSearchParams(window.location.search);
const videoId = params.get('id');

const selectedVideo = videoPreview.find(function(video){
    return video.id == videoId;
});


document.querySelector('.watch-video').src = selectedVideo.image;
document.querySelector('.watch-title').innerHTML = selectedVideo.title;
document.querySelector('.profile-pic').src = selectedVideo.profilePic;
document.querySelector('.author').innerHTML = selectedVideo.author;
document.querySelector('.subscriber-count').innerHTML = selectedVideo.subscribers;
document.querySelector('.description-stats').innerHTML = selectedVideo.stats;
document.querySelector('.video-description').style.setProperty('--hover-color', selectedVideo.hoverColor);

const recommnendedVideos = videoPreview.filter(function(video) {
    return video.id != videoId;
});

let recommendationHTML = '';

recommnendedVideos.forEach(function(video){
    recommendationHTML += `
        <div class="video-recommendation" style="--hover-color: ${video.hoverColor}" onclick="openVideo(${video.id})">

            <div class="video-recommendation-thumbnail-container">

                <img class="video-recommendation-thumbnail"
                    src="${video.image}">

                <div class="video-recommendation-time">
                    ${video.time}
                </div>

            </div>

            <div class="video-recommendation-video-info">

                <p class="video-recommendation-title">
                    ${video.title}
                </p>

                <div class="video-recommendation-video-stats">

                    <p class="video-recommendation-author">
                        ${video.author}
                    </p>

                    <p class="video-recommendation-stat">
                        ${video.stats}
                    </p>

                </div>

            </div>

        </div>
    `
});

document.querySelector('.side-videos-section').innerHTML = recommendationHTML;

function openVideo(id) {
    window.location.href = `watch.html?id=${id}`;
}

const subscribeButton = document.querySelector('.subscribe-button');
subscribeButton.addEventListener('click', function() {
    if(subscribeButton.innerText.trim() === 'Subscribe') {
        subscribeButton.innerHTML=`
        <span>Subscribed</span>
    `
    subscribeButton.classList.add('subscribed');
    }
    else {
        subscribeButton.innerHTML = `Subscribe`
        subscribeButton.classList.remove('subscribed');
    }
});

const likeButton = document.querySelector('.like-button');
const dislikeButton = document.querySelector('.dislike-button');

likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('active');
    dislikeButton.classList.remove('active');
});

dislikeButton.addEventListener('click', function() {
    dislikeButton.classList.toggle('active');
    likeButton.classList.remove('active');
});

const saveText = document.querySelector('.save-text');
const saveIcon = document.querySelector('.save-icon');
const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', function() {
    saveIcon.classList.toggle('active');
    if(saveText.innerText.trim() === 'Save') {
        saveText.innerText = `Saved`;
    }
    else {
        saveText.innerText = `Save`;
    }
});
