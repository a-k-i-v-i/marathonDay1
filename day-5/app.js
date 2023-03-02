const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
console.log(board);

let time = 0
let score = 0
const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];


startBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click',(event)=>{
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
        console.log('start');
    }
})

board.addEventListener('click',(event)=>{
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame(){
   setInterval(decreaseTime,1000)
   createRandomCircle()
   setTime(time)
}

function decreaseTime (){
    if (time === 0){
        finishGame()
    }else{
        let current = --time
        if(current < 10)
        current = `0${current}`
      
        setTime(current)
    }
 
}

function setTime (value){
    timeEl.innerHTML= `00:${value}`
}

function finishGame (){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class='primary'> ${score}</span></h1>`
    console.log('finish');
}


function createRandomCircle (){
    const circle = document.createElement('div')
    const size  = Math.round(Math.random() * (60-10) + 10)
    const width = board.getBoundingClientRect().width
    const height = board.getBoundingClientRect().height
   
    const x = Math.round(Math.random() * (width - size - 0) + 0)

    const y =  Math.round(Math.random() * (height - size - 0) + 0)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = getRandomColor()
    circle.style.background= color


    board.append(circle)
    console.log('pending');

}

function getRandomColor (){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }

