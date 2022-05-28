class Node{
    constructor(x, y, grid){
        this.x = x
        this.y = y
        this.grid = grid
        this.cost = 0
        this.h = 0
        this.f = 0
        this.color = '#FFFFFF'
        this.neighbors = []
        this.cameFrom 
        this.open = Math.random() < this.grid.wallRatio ? false : true
    }
    setOpening(boolean){
        this.open = boolean
        this.grid.findAllNeighbor()
    }
    findNeighbor(){
        this.neighbors = []

        // Down
        if(this.x < this.grid.rows-1 && this.grid.el[this.x + 1][this.y].open == true){
            this.neighbors.push(this.grid.el[this.x + 1][this.y])
        } 
        // Top
        if(this.x > 0 && this.grid.el[this.x - 1][this.y].open == true){
            this.neighbors.push(this.grid.el[this.x - 1][this.y])
        } 
        // Right
        if(this.y < this.grid.cols-1 && this.grid.el[this.x][this.y + 1].open == true){
            this.neighbors.push(this.grid.el[this.x][this.y + 1])
        } 
        // Left
        if(this.y > 0 && this.grid.el[this.x][this.y - 1].open == true){
            this.neighbors.push(this.grid.el[this.x][this.y - 1])
        }

        // Down && Right
        if(this.x < this.grid.rows-1 && this.y < this.grid.cols-1 && this.grid.el[this.x + 1][this.y + 1].open == true){
            this.neighbors.push(this.grid.el[this.x + 1][this.y + 1])
        }

        // Down && Left
        if(this.x < this.grid.rows-1 && this.y > 0 && this.grid.el[this.x + 1][this.y - 1].open == true){
            this.neighbors.push(this.grid.el[this.x + 1][this.y - 1])
        }

        // Top && Right
        if(this.x > 0 && this.y < this.grid.cols-1 && this.grid.el[this.x - 1][this.y + 1].open == true){
            this.neighbors.push(this.grid.el[this.x - 1][this.y + 1])
        }

        // Top && Left
        if(this.x > 0 && this.y > 0 && this.grid.el[this.x - 1][this.y - 1].open == true){
            this.neighbors.push(this.grid.el[this.x - 1][this.y - 1])
        }

    }
    draw(ctx){
        let k = (canvas.width / this.grid.rows)
        let x = this.x * k
        let y = this.y * k
        ctx.beginPath();
        if(!this.open) this.color = '#444444'
        ctx.fillStyle = this.color
        ctx.arc(x+k/2, y+k/2, k/4, 0, Math.PI*2)
        ctx.fill();
    }
}