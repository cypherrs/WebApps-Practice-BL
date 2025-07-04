type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    side: number;
};

type Shape = Circle | Square;

function area(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}