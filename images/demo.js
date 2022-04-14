const adressbtn = document.querySelector("#adress-form")
const adressclose = document.querySelector("#adress-close")

//console.log (rightbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"

})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"

})

//slider--------------------------------
const rightbtn = document.querySelector(".fa-chevron-right")
const lefttbtn = document.querySelector(".fa-chevron-left")
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0


rightbtn.addEventListener("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})
lefttbtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index *100+"%"
})

//slider 1--------------------------------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
let imgactive = document.querySelector('.active')
 //console.log(imgactive)
imgNumberLi.forEach(function(image,index){
    image.addEventListener('click',function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        imgactive.classList.remove('remove')
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto() {
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNumberLi[index].classList.add("active")
    //console.log(index)

}
setInterval(imgAuto,5000)

//----------------------slider-product--------//
const rightbtntwo = document.querySelector(".fa-chevron-right-two")
const leftbtntwo  = document.querySelector(".fa-chevron-left-two")
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
//console.log(rightbtntwo )
//console.log(leftbtntwo)//
rightbtntwo.addEventListener("click", function(){
    index = index+1
    if(index >imgNumbertwo.length-1){
        index=0
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%"
})
leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index <=0){
        index=imgNumbertwo.length-1
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%"
})
//----------------------danh mục đồng hồ---------//
const rightbtnthree = document.querySelector(".fa-chevron-right-three")
const lefttbtnthree = document.querySelector(".fa-chevron-left-three")
const imgNumberthree = document.querySelectorAll('.product-gallery-four-content-left-top')
 index = 0


rightbtnthree.addEventListener("click", function(){
    index = index+1
    if(index>imgNumberthree.length-1){
        index=0
    }
    document.querySelector('.product-gallery-four-content-left-top').style.right = index *100+"%"
})
lefttbtnthree.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNumberthree.length-1
    }
    document.querySelector('.product-gallery-four-content-left-top').style.right = index *100+"%"
})
