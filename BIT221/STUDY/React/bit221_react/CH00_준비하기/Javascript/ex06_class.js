/* 
- ES6 클래스(class)
*/

// 콜백함수가 뭐야?

class Rectangle {

  // 생성자
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const p = new Rectangle(3, 7);
const square = new Rectangle(10, 10);
square.area();

