class Grid{
    constructor(rows, cols, canvas, wallRatio = 0.4){
        this.rows = rows
        this.cols = cols
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.el
        this.wallRatio = wallRatio
        this.#setup()
    }
    #setup(){
        const grid = new Array(this.cols)
        for (let i = 0; i < this.cols; i++) {
            grid[i] = new Array(this.rows)
        }
        this.el = grid
        this.#createNode()
    }
    #createNode(){
        for (let col = 0; col < this.el.length; col++) {
            for (let row = 0; row < this.el[col].length; row++) {
                this.el[col][row] = new Node(col, row, this)
            }
        }
        this.findAllNeighbor()
    }
    findAllNeighbor(){
        for (let col = 0; col < this.el.length; col++) {
            for (let row = 0; row < this.el[col].length; row++) {
                this.el[col][row].findNeighbor()
            }
        }
    }
    write(text){
        this.ctx.font = '100px Helvetica';
        this.ctx.textAlign = 'center'
        this.ctx.fillText(text, this.canvas.width/2, this.canvas.height/2);
    }
    draw(){
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows; row++) {
                this.el[col][row].draw(this.ctx)
          }
        }
    }
}
