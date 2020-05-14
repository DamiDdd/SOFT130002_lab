const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

for(let i = 0; i < works.length; i++){
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    document.body.appendChild(itemDiv)
    let itemP = document.createElement("p")
    itemP.innerHTML = "Genre: " + works[i].tips;
    itemDiv.appendChild(itemP);
    let innerBox1 = document.createElement("div");
    let innerBox2 = document.createElement("div");
    innerBox1.classList.add("inner-box");
    innerBox2.classList.add("inner-box");
    itemDiv.appendChild(innerBox1);
    itemDiv.appendChild(innerBox2);
    let button = document.createElement("button");
    button.innerHTML = "Visit";
    itemDiv.appendChild(button);
    let itemH3_1 = document.createElement("h3");
    let itemH3_2 = document.createElement("h3");
    let itemH4 = document.createElement("h4");
    itemH3_1.innerHTML = works[i].author + "    ";
    itemH3_1.style.display = "inline";
    itemH3_2.innerHTML = "Popular Photos";
    itemH4.style.display = "inline";
    itemH4.innerHTML = "lifetime:"+works[i].lifetime;
    innerBox1.appendChild(itemH3_1);
    innerBox1.appendChild(itemH4);
    innerBox2.appendChild(itemH3_2);
    for (let j = 0; j < works[i].photos.length; j++){
        let img = document.createElement("img");
        img.setAttribute("src", works[i].photos[j]);
        img.classList.add("photo");
        img.style.display = "inline";
        innerBox2.appendChild(img);
    }
}