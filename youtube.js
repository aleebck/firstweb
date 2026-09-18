
const videoPreview = [
    {
        image: 'thumbnails/hq720.webp',
        time: '4:28:35',
        profilePic: 'channelpics/channels4_profile.jpg',
        title: 'He didnt pay attention to the bullying until his girlfriend got',
        author: 'Manhwa Narratives',
        stats: '39K views &#183; 1 year ago',
    },

    {
        image: 'thumbnails/riverie.jpg',
        time: '4:37',
        profilePic: 'channelpics/channels4_profile (1).jpg',
        title: 'Floating in riverie - Moayad Aljabal (Piano Cover)',
        author: 'Moayad Aljabal',
        stats: '100K views &#183; 2 year ago',
    },

    {
        image: 'thumbnails/hq720.avif',
        time: '29:04',
        profilePic: 'channelpics/channels3_profile.jpg',
        title: 'TOP 15 MOST BROKEN SOLO QUEUE HEROES',
        author: 'Xecution YT',
        stats: '16K views &#183; 2 days ago',
    },

    {
        image: 'thumbnails/thumb4.avif',
        time: '25:48',
        profilePic: 'channelpics/chess_profile.jpg',
        title: 'The French Defene Trap',
        author: 'Chess Expplained',
        stats: '100K views &#183;  3 weeks ago',
    },

    {
        image: 'thumbnails/yamal.avif',
        time: '14:25',
        profilePic: 'channelpics/espn.jpg',
        title: 'BARCELONA vs VALENCIA HIGHLIGTS',
        author: 'ESPN',
        stats: '250K views &#183; 1 day ago',
    },

    {
        image: 'thumbnails/mrbeast.avif',
        time: '26:59',
        profilePic: 'channelpics/mrbeastchannel.jpg',
        title: 'How 1 Person Solved A $1,000,000 Puzzle!',
        author: 'MrBeast 2',
        stats: '33M views &#183; 4 days ago',
    }
]

let videoHTML = '';

videoPreview.forEach(function(video) {
    videoHTML += `
        <div class="video-preview">
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
    `
});

document
    .querySelector('.video-container')
    .innerHTML = videoHTML;