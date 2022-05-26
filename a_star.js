class A_Star{
    constructor(grid, startNode, goalNode, ctx){
        this.grid = grid
        this.startNode = startNode
        this.goalNode = goalNode
        this.ctx = ctx
        this.gCost
        this.hCost
        this.fCost
        this.openSet = []
        this.closedSet = []
        this.openSet.push(this.startNode)
        this.path = []
        this.done = false
        this.startNode.setOpening(true)
        this.goalNode.setOpening(true)
        this.startNode.color = '#00FF00'
        this.goalNode.color = '#FF0000'

    }
    heuristic(a, b){
        let sideA = a.x - b.x;
        let sideB = a.y - b.y;
        return Math.sqrt(sideA*sideA + sideB*sideB);
    }
    execute(){
        if(this.openSet.length > 0 && !this.done){
            // Set color
            for (let i = 0; i < this.openSet.length; i++) {
                this.openSet[i].color = '#0000FF'
            }
            for (let i = 0; i < this.closedSet.length; i++) {
                this.closedSet[i].color = '#000000'
            }

            // Select suitable node
            let select = 0
            for (let i = 0; i < this.openSet.length; i++) {
                if(this.openSet[i].f < this.openSet[select].f) select = i
            }
            let current = this.openSet[select]

            // Find path
            let node = current
            this.path.push(node)
            while (node.cameFrom){
                this.path.push(node.cameFrom)
                node.color = '#00FF00'
                node = node.cameFrom
            }
            if(current === this.goalNode){
                this.done = true
            } 
            for (let i = this.openSet.length-1; i >= 0; i--) {
                if(this.openSet[i] == current){
                    this.openSet.splice(i, 1)
                }
            }
            this.closedSet.push(current)
            for (let i = 0; i < current.neighbors.length; i++) {
                let neighbor = current.neighbors[i]
                if(!this.closedSet.includes(neighbor)){
                    let tempCost = current.cost + 1
                    if(this.openSet.includes(neighbor)){
                        if(tempCost < neighbor.cost){
                            neighbor.cost = tempCost
                        }
                    }else{
                        neighbor.cost = tempCost
                        this.openSet.push(neighbor)
                    }
                    neighbor.h = this.heuristic(neighbor, this.goalNode)
                    neighbor.f = neighbor.cost + neighbor.h
                    neighbor.cameFrom = current
                }
            }
        }else if(this.done){
            this.grid.write('COMPLETE')
            clearInterval(loop);
        }
        else{
            this.grid.write('NO SOLUTION')
            clearInterval(loop);
        }
    }
}