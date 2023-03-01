const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slideCount = mainSlide.querySelectorAll('div').length
let activeSlidwIndex = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', ()=>{
    changeSlide('up')
})


downBtn.addEventListener('click', ()=>{
    changeSlide('down')
    
})

function changeSlide (direction){
if ( direction === 'up'){
    activeSlidwIndex++
    if(activeSlidwIndex === slideCount){
        activeSlidwIndex = 0
    }
}else if (direction === 'down'){
    activeSlidwIndex--
    if(activeSlidwIndex < 0){
        activeSlidwIndex = slideCount - 1
    }
}

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlidwIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlidwIndex * height}px)`
}
