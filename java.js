const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const body = document.querySelector('body');

image2.addEventListener('mouseover' , function(){
    image2.classList.add("width");
        image2.addEventListener("mouseleave", function(){
            image2.classList.remove("width");
            image2.classList.add("opacity");
        })
})

image1.addEventListener('mouseover' , function(){
    image1.classList.add("width");
        image1.addEventListener("mouseleave", function(){
            image1.classList.remove("width");
            image1.classList.add("opacity");
        })
})


