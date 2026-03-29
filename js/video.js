fetch("data/video.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddVideo(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })



let AddVideo = (data) => {
    const container = document.querySelector("#video-container");

    let i = 0
    data.forEach(item => {
        const video = document.createElement('div');
        video.id = `video-thumbnail-${i}`;
        video.className = "display";
        video.innerHTML = `
            <a href="#video-${i}" class="btn">
                <img class="thumbnail" src="${item.thumbnail}">
                <h2>${item.title}</h2>
                <p>${item.shortdescription}</p>
            </a>
        `;
        container.appendChild(video);
        
        const hiddenVideo = document.createElement('div');
        hiddenVideo.id = `video-${i}`;
        hiddenVideo.className = "pop-up";
        hiddenVideo.setAttribute("role", "dialog");
        hiddenVideo.setAttribute("aria-labelledby", "portfolio-work-pop-up");
        hiddenVideo.setAttribute("aria-hidden", "false")

        hiddenVideo.innerHTML = `
        <div class="pop-up-content">
            <a href=#illustration-thumbnail-1" class="pop-up-close-btn" aria-label="close"><img src="assets/icons/close.png"></a>
           
            <div class=content>
            <div class="main-content">
                <div class="video">
                    <iframe src="${item.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>  
                <div class="pop-up-text">
                    <h3>${item.title}</h3>
                    <p>${item.longdescription}</p>
                    
                </div>
            </div>

        </div>
        `
        document.body.appendChild(hiddenVideo);
        i ++
    });
}
