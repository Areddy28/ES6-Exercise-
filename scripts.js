"use: strict"; 

class Room {
    constructor (name, length, width, capacity = 15) {
        this.roomName = name; 
        this.roomLength = length; 
        this.roomWidth = width; 
        this.available = true; 
        this.capacity = capacity; 
    }
    // methods go here
    getArea() {
        return this.roomLength * this.roomWidth;   
    }
    getPerimeter() {
        return 2 * (this.roomLength + this.roomWidth)
    }

}

let room1 = new Room("Sun", 30, 20); 
let room2 = new Room("Green", 15, 20, 18); 
console.log("room1's name:", room1.roomName); // "Sun" 
console.log("room1's name:", room1.roomLength); 
console.log("room1's name", room1.roomWidth);

console.log("room1's area:", room1.getArea()); 
console.log("room1's perimeter:", room1.getPerimeter()); 

console.log("room2's name:", room2.roomName);
console.log("room2's length:", room2.roomLength);
console.log("room2's width:", room2.roomWidth);

console.log("room2's area:", room2.getArea()); 
console.log("room2's perimeter:", room2.getPerimeter()); 

room2.available = false; 

console.log("room1's available", room1.available); 
console.log("room2's available", room2.available); 

console.log("room1's capacity", room1.capacity);
console.log("room2's capacity", room2.capacity);  
