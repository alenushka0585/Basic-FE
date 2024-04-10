//  Task #1____________________________________________________

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] % 2 == 0) {
		evenSum += array[i];
	} else {
		oddSum += array[i];
	}
}

let result = 0;

if (evenSum > oddSum) {
	result = evenSum - oddSum;
    console.log(
        `Even sum is ${evenSum}, odd sum is ${oddSum}, difference is ${result}`
    );
} else {
	result = oddSum - evenSum;
    console.log(
        `Odd sum is ${oddSum}, even sum is ${evenSum}, difference is ${result}`
    );
}


// Task #2____________________________________________________

const array2 = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    }, 
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];

for (let i = 0; i < array2.length; i++) {
   if (array2[i].type == 'shoes') {
    console.log(array2[i].title);
   }
}

// Task #3____________________________________________________

const array3 = [];
for (let i = 0; i < array2.length; i++) {
    if (array2[i].price < 1000) {
     array3.push(array2[i]);
    }
 }

 console.log(array3);
