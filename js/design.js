fetch("data/design.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('File not found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        AddDesign(data);
    })
    .catch(error => {
        console.error('fetch error: ', error);
    })



let AddDesign = (data) => {
    const container = document.querySelector("#design-container");

    let i = 0
    data.forEach(item => {
        const design = document.createElement('div');
        design.id = `design-thumbnail-${i}`;
        design.className = "display";
        design.innerHTML = `
            <a href="#design-${i}" class="btn">
                <img src="${item.images[0]}">
                <h2>${item.title}</h2>
                <p>${item.shortdescription}</p>
            </a>
        `;
        container.appendChild(design);

        const hiddenIllustration = document.createElement('div');
        hiddenIllustration.id = `design-${i}`;
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
        <div class="pop-up-content">
            <div class="main-content">
                    <div class="main-content">
                        <img src="${item.images[0]}">
                        <div class="pop-up-text">
                            <h3>${item.title}</h3>
                            <p>${item.longdescription}</p>
                            <a href=#design-thumbnail-1" class="pop-up-close-btn" aria-label="close">Back</a>
                        </div>
                </div>
                <div class="gallery">
                        <div class="gallery-grid">
                            ${gallery}
                        </div>
                </div>
        </div>
        `
        document.body.appendChild(hiddenIllustration);
        i ++
    });
}
