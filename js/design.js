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

        const hiddenDesign = document.createElement('div');
        hiddenDesign.id = `design-${i}`;
        hiddenDesign.className = "pop-up";
        hiddenDesign.setAttribute("role", "dialog");
        hiddenDesign.setAttribute("aria-labelledby", "portfolio-work-pop-up");
        hiddenDesign.setAttribute("aria-hidden", "false");

        let gallery = ""
        let first = true
        item.images.forEach(image => {
            if (first) {
                first = false
            } else {
                gallery += `<img src="${image}">`
            }
        })

        hiddenDesign.innerHTML = `
 <div class="pop-up-content">
            <a href=#illustration-thumbnail-1" class="pop-up-close-btn" aria-label="close"><img src="assets/icons/close.png"></a>
            <div class="content">
                <div class="main-content">
                    <img src="${item.images[0]}">
                    <div class="pop-up-text">
                        <h3>${item.title}</h3>
                        <p>${item.longdescription}</p>
                    </div>
                </div>

                <div class="gallery">
                    <div class="gallery-grid">
                        ${gallery}
                    </div>
                </div>

            </div>
    </div> 
        `
        document.body.appendChild(hiddenDesign);
        i ++
    });
}
