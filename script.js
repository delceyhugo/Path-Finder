const canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 1000

const grid = new Grid(50, 50, canvas)
const a_star = new A_Star(grid, grid.el[0][0], grid.el[grid.cols-1][grid.rows-1])
grid.draw()


let play
let loop
let interval
let slider = document.querySelector('#speed')
let count = document.querySelector('#ms')
let speed = slider.value
slider.oninput = function() {
    speed = this.value
    count.innerHTML = speed
    console.log(speed);
    if(play){
        clearInterval(interval)
        loop(speed)
    }
}

document.querySelector('#play').addEventListener('click', () =>{
    if(!a_star.done && !play){
        play = true
        loop(speed)
    }
})

loop = function(speed){
    interval = setInterval(() => {
        grid.draw()
        a_star.execute()
    }, speed)
}



