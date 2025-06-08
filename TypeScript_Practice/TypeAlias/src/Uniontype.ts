type point = {x: number , y: number};
type Shape ="circle"|"line"|"rectangle";

function drawShape(shape: Shape, position: point):void {
    console.log(`Drawing a${shape} at position (${position.x} , ${position.y})`);
}

drawShape("circle", { x: 10, y: 20 });