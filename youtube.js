

const hamburger = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
});

function renderVideos(videos) {
    let videoHTML = '';
    videos.forEach(function(video) {
        videoHTML +=`
            <div class="video-preview" 
                style="--hover-color: ${video.hoverColor}"
                onclick = "openVideo(${video.id})">
                <div class="thumbnail-row">
                    <img class="video-photo" src="${video.image}">
                    <div class="video-time">${video.time}</div>
                </div>
                <div class="video-info-grid">
                    <div class="channelpic-div">
                        <img class= "profilepic" src="${video.profilePic}">
                    </div>
                    <div class="video-info">
                        <p class="video-title">
                        ${video.title}
                        </p>
                        <p class= "video-author">
                            ${video.author}
                        </p>
                        <p class= "video-stats">
                            ${video.stats}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('.video-container').innerHTML = videoHTML;
}

renderVideos(videoPreview);

function openVideo(id) {
    window.location.href = `watch.html?id=${id}`;
}


/** ***********************************       Search Bar       **************************************************** */

const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search img');

function searchVideos() {
    const searchText = searchBar.value.toLowerCase();

    const filteredVideos = videoPreview.filter(function(video) {
        return video.title.toLowerCase().includes(searchText) || video.author.toLowerCase().includes(searchText);
    });
    renderVideos(filteredVideos);
};

searchIcon.addEventListener('click', function() {
    searchVideos();
});

searchBar.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        searchVideos();
    }
})