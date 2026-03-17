fetch("data/illustration.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddIllustration(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })



let AddIllustration = (data) => {
    const container = document.querySelector("#illustration-container");

    let i = 0
    data.forEach(item => {
        const illustration = document.createElement('div');
        illustration.id = `illustration-thumbnail-${i}`;
        illustration.className = "display";
        illustration.innerHTML = `
            <a href="#illustration-${i}" class="btn">
                <img src="${item.images[0]}">
                <h2>${item.title}</h2>
                <p>${item.shortdescription}</p>
            </a>
        `;
        container.appendChild(illustration);

        const hiddenIllustration = document.createElement('div');
        hiddenIllustration.id = `illustration-${i}`;
        hiddenIllustration.className = "pop-up";
        hiddenIllustration.setAttribute("role", "dialog");
        hiddenIllustration.setAttribute("aria-labelledby", "portfolio-work-pop-up");
        hiddenIllustration.setAttribute("aria-hidden", "false");

        let gallery = ""
        let first = true
        item.images.forEach(image => {
            if (first) {
                first = false
            } else {
                gallery += `<img src="${image}">`
            }
        })

        hiddenIllustration.innerHTML = `
            <div class="main-content">
                <div class="main-content">
                    <img src="${item.images[0]}">
                    <div class="pop-up-text">
                        <h3>${item.title}</h3>
                        <p>${item.longdescription}</p>
                        <a href=#illustration-thumbnail-1" class="pop-up-close-btn" aria-label="close">Back</a>
                    </div>
            </div>
            <div class="gallery">
                    <div class="gallery-grid">
                        ${gallery}
                    </div>
            </div>
        `
        document.body.appendChild(hiddenIllustration);
        i ++
    });
}
