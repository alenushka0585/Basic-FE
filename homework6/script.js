const array = ["https://png.pngtree.com/png-clipart/20230508/original/pngtree-tiger-walking-wildlife-scene-transparent-background-png-image_9153495.png",
"https://png.pngtree.com/png-clipart/20230413/original/pngtree-elephant-realistic-african-animal-png-image_9050172.png",
"https://png.pngtree.com/png-clipart/20230508/original/pngtree-big-lion-walking-wild-cat-png-image_9153481.png",
"https://png.pngtree.com/png-clipart/20230411/original/pngtree-goat-animal-realistic-white-transparent-png-image_9047537.png",
"https://png.pngtree.com/png-clipart/20210523/original/pngtree-real-animal-sheep-clipart-png-image_6322919.jpg"];

const div1 = document.createElement("div");
document.body.append(div1);

for (let i=0; i < array.length; i++){
    const img = document.createElement("img");
    img.setAttribute("src", array[i]);
    img.setAttribute("class", "smallImg");
    div1.append(img);

    img.onclick = function (){
        const elem = document.querySelector(".bigImg")
        if (elem){
            elem.parentNode.removeChild(elem);
        }

        const div2 = document.createElement("div");
        div2.setAttribute("class", "bigImg");
        document.body.append(div2);

        const bigImg = document.createElement("img");
        bigImg.setAttribute("src", array[i]);
        div2.append(bigImg);
        
    }
}