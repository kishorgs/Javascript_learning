let marks = [90,87,56,78,76];
console.log(marks);

console.log(marks[0]);

marks[0] = 99;

console.log(marks);

marks.push(66);

console.log(marks);

let lastElement = marks.pop();

console.log(marks , lastElement);

marks.shift();

console.log(marks);

marks.unshift(45);

console.log(marks);

console.log(marks.length);

delete marks[0];

console.log(marks);

let math_marks = [1,2,3,4,5,6];

let newArray = marks.concat(math_marks);

console.log(newArray);

// marks.sort()

// console.log(marks);

let compare = (a,b) => {
    return a - b;
}
newArray.sort(compare);
console.log(newArray);

console.log(marks);

marks.reverse();

console.log(marks);

let slicedArray = marks.slice(2,4);

console.log(slicedArray);