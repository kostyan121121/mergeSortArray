function mergeSortedArrays(arr1, arr2){
    const res = [];

    let i = arr1.length - 1;
    let j = arr2.length - 1;

    while(i >= 0 && j >= 0){
        if(arr1[i] >= arr2[j]){
            res.push(arr1[i]);
            i--;
        } else {
            res.push(arr2[j]);
            j--;
        }
    }

    while(i >= 0) {
        res.push(arr1[i]);
        i--;
    }

    while(j >= 0){
        res.push(arr2[j]);
        j--;
    }
    return res;
}

const arr1 = [4, 5, 6, 7, 8];
const arr2 = [2, 3, 5, 7, 9];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log("Отсортированный список(по убыванию):", mergedArray);

