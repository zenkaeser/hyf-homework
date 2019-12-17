class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return Math.PI * (this.radius * this.radius);
    }
    
}

const c = new Circle(5);
console.log(c.getDiameter());
console.log(c.getCircumference());
console.log(c.getArea());
