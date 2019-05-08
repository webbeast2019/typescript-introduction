import {differenceBy} from 'lodash';

let tsString: string;
tsString = 'I am A string!';
console.log(tsString);

let myBool = true;

const differenceByIntegerFn = (arr1: number[], arr2: number[]): number[] => {
    return differenceBy(arr1, arr2, Math.floor);
}


function differenceByInteger(arr1: Array<number>, arr2: Array<number>):
    Array<number> {
    return differenceBy(arr1, arr2, Math.floor);
}

function differenceByString(arr1: Array<string>, arr2: Array<string>):
    Array<string> {
    return differenceBy(arr1, arr2);
}

const diff1 = differenceByInteger([1.2, 4, 5], [1.1, 5.1]);   // 4
const diff2 = differenceByString(['a', 'b', 'c'], ['c', 'd']);   // a b
console.log('diff1', diff1);
console.log('diff1', diff2);