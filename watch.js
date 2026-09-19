
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

const recommnendedVideos = videoPreview.filter(function(video) {
    return video.id != videoId;
});

let recommendationHTML = '';

recommnendedVideos.forEach(function(video){
    recommendationHTML += `
        <div class="video-recommendation" onclick="openVideo(${video.id})">

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