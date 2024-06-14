const cubeContainer = document.getElementById('cube-container');
const scrambleBtn = document.getElementById('scramble-btn');
const solveBtn = document.getElementById('solve-btn');

// Define cube size and colors
const cubeSize = 3;
const colors = ['white', 'red', 'green', 'yellow', 'orange', 'blue'];

// Cube class representing a single cubie
class Cube {
  constructor(x, y, z, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    this.element = document.createElement('div');
    this.element.classList.add('cube');
    for (let i = 0; i < 6; i++) {
      const face = document.createElement('div');
      face.classList.add('face');
      face.style.backgroundColor = colors[i];
      this.element.appendChild(face);
    }
    // Hide back faces of cubies
    if (z === 0) {
      this.element.querySelector('#back').classList.add('hidden');
    }
  }

  rotateX(cw) { // cw: clockwise rotation
    const temp = this.y;
    this.y = this.z * (cw ? -1 : 1);
    this.z = temp * (cw ? 1 : -1);
    this.element.style.transform = `translateZ(<span class="math-inline">\{50 \* this\.z\}px\) rotateX\(</span>{cw ? '-' : ''}90deg)`;
  }

  rotateY(cw) {
    const temp = this.x;
    this.x = this.z * (cw ? 1 : -1);
    this.z = temp * (cw ? -1 : 1);
    this.element.style.transform = `translateX(<span class="math-inline">\{50 \* this\.x\}px\) rotateY\(</span>{cw ? '-' : ''}90deg)`;
  }

  rotateZ(cw) {    const temp = this.x;
    this.x = this.y
}
