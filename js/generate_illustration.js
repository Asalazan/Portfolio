fetch("data/illustration.json")
.then(response => {
        if (!response.ok) {
            throw new Error("File Not Found")
        }
        return response.json();
    })
.then(data => {
        console.log(data)
        AddIllustration(data)
    })
.catch(error => {
        console.error("fetch error: ", error);
    })

let AddIllustration = (data) => {
    const parent = document.querySelector("#illustration-container");

    data.forEach(item => {
        const infoBox = document.createElement('div');
        infoBox.innerHTML = `
        ${item.title} ${item.short_description} ${item.long_description} ${item.images}
        `;
        parent.appendChild(infoBox);
    })

}
