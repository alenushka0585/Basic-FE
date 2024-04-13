// TASK #1_________________________________________________________________________________
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			sum += array[i];
		}
	}
	return sum;
}

function oddSum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 != 0) {
			sum += array[i];
		}
	}
	return sum;
}

function biggestNum(num1, num2) {
	if (num1 > num2) {
		console.log(num1);
	} else {
		console.log(num2);
	}
}

biggestNum(oddSum(array), evenSum(array));

// TASK #2_________________________________________________________________________________

function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(25));

// TASK #3_________________________________________________________________________________

const books = [
    {
        titel: 'Book #1',
        author: 'Author #1',
        pages: 300
    },
    {
        titel: 'Book #2',
        author: 'Author #2',
        pages: 1500
    },
    {
        titel: 'Book #3',
        author: 'Author #3',
        pages: 1000
    },
    {
        titel: 'Book #4',
        author: 'Author #4',
        pages: 2000
    },
    {
        titel: 'Book #5',
        author: 'Author #5',
        pages: 850
    }
]

function biggestBook (array){
    let numberOfPages = 0;
    let book = {};

    for(let i = 0; i < array.length; i++){
        const {pages} = array[i];
        if(pages > numberOfPages){
            numberOfPages = pages;
            book = array[i];
        }
    }

    return book;
}

console.log(biggestBook(books));

// TASK #4_________________________________________________________________________________

function uniqueNum (array){
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let isUnique = true;
        for (let x = 0; x < result.length; x++) {
            if (array[i] === result[x]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(uniqueNum([1,1,2,3,3,4,5,6,6,7,8,8,9,9,10]));
