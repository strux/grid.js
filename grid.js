var Grid = function (grid) {
    grid.validCell = function(x, y) {
        if(grid[x, y]) return [x, y];
    }
    grid.north = function(x, y) {
        return this.validCell(x, y-1);
    }
    grid.northEast = function(x, y) {
        return this.validCell(x+1, y-1);
    }
    grid.east = function(x, y) {
        return this.validCell(x+1, y);
    }
    grid.southEast = function(x, y) {
        return this.validCell(x+1, y+1);
    }
    grid.south = function(x, y) {
        return this.validCell(x, y+1);
    }
    grid.southWest = function(x, y) {
        return this.validCell(x-1, y+1);
    }
    grid.west = function(x, y) {
        return this.validCell(x-1, y);
    }
    grid.northWest = function(x, y) {
        return this.validCell(x-1, y-1);
    }
    grid.surrounding = function(start_x, start_y, radius, fill) {
        if(radius === undefined) radius = 1;
        if(fill === undefined) fill = false;
        var cells = [],
            max_x = start_x + radius,
            min_x = start_x - radius,
            max_y = start_y + radius,
            min_y = start_y - radius,
            isEdge = function(x, y) {
                return (x == max_x || x == min_x) || (y == max_y || y == min_y);
            },
            isOrigin = function(x, y) {
                return (x == start_x && y == start_y);
            };

        for(var y=min_y; y<=max_y; y++){
            for(var x=min_x; x<=max_x; x++){
                if(isEdge(x, y) || (fill && !isOrigin(x,y))) cells.push([x, y]);
            }
        }
        return cells
    }

    return grid;
}
