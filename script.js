const canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 1000

const grid = new Grid(50, 50, canvas)
const a_star = new A_Star(grid, grid.el[0][0], grid.el[grid.cols-1][grid.rows-1])
grid.draw()

// Set speed on input
document.querySelector('#speed').oninput = function() {
    a_star.speed = this.value
    a_star.play ? a_star.execute() : null
    document.querySelector('#ms').innerHTML = this.value
}

// Play on click
document.querySelector('#play').addEventListener('click', () =>{
    a_star.execute()
})