import React from 'react';

export default function CombinationSum() {
    //  candidates = [2,3,6,7], target = 7
    // Output: [[2,2,3],[7]]
    const candidates = [2, 3, 6, 7, 1, 4, 5, 4, 6, 0];
    const target = 5;
    // let result = [i, j]

    // const getCombinationSum = (candidates: number[], target: number) => {
    //     const getSmallNumberOfArray = candidates.filter((candidate) => candidate <= target)
    //     let totalArray = []
    //     let array = [];
    //     for (let i = 0; i < getSmallNumberOfArray.length; i++) {
    //         if (getSmallNumberOfArray[i] === target) {
    //             totalArray.push([getSmallNumberOfArray[i]])
    //         } else {
    //             const divide = target / getSmallNumberOfArray[i];
    //             const remaining = target % getSmallNumberOfArray[i];
    //             console.log("remaining", remaining, getSmallNumberOfArray[i], Math.floor(divide))
    //             if (remaining === 0) {
    //                 const tempArray = []
    //                 for (let k = 0; k < divide; k++) {
    //                     tempArray.push(getSmallNumberOfArray[i])
    //                 }
    //                 totalArray.push(tempArray);
    //             } else {
    //                 let sum = 0;
    //                 const tempArray1 = getSmallNumberOfArray.filter((smallNumber) => smallNumber <= Math.floor(divide))
    //                 console.log("tempArray1", tempArray1);
    //                 for (let j = 0; j < Math.floor(divide); j++) {
    //                     sum = Math.floor(divide) * getSmallNumberOfArray[j];
    //                     let num = sum + tempArray1[j];
    //                     let arr = [];
    //                     if (num == target) {
    //                         let tempArray2 = []
    //                         for (let z = 0; z < Math.floor(divide); z++) {
    //                             tempArray2.push(getSmallNumberOfArray[i])
    //                         }
    //                         tempArray2.push(tempArray1[j])
    //                         arr.push(tempArray2)
    //                     }
    //                     arr.length > 0 && totalArray.push(arr)
    //                     console.log("arr", arr)
    //                 }
    //             }
    //         }
    //         console.log("i", totalArray, getSmallNumberOfArray)
    //     }
    //     return totalArray
    // }

    // const getTwoNumber = () => {
    //     const getSmallNumberOfArray = candidates.filter((candidate) => candidate <= target)
    //     let tempArray = []
    //     for (let i = 0; i < getSmallNumberOfArray.length; i++) {
    //         for (let j = i + 1; j < getSmallNumberOfArray.length; j++) {
    //             if (getSmallNumberOfArray[i] + getSmallNumberOfArray[j] === 7) {
    //                 tempArray.push([i, j])
    //             }
    //         }
    //     }
    //     // tempArray = tempArray.filter((temp) => temp === temp)
    //     console.log("tempArray", tempArray)
    // }

    // const getTwoNumber = () => {
    //     // const getSmallNumberOfArray = candidates.filter((candidate) => candidate <= target)
    //     let tempArray = []
    //     for (let i = 0; i < candidates.length; i++) {
    //         if (candidates[i] + candidates[i + 1] === 5) {
    //             tempArray.push([i, i + 1])
    //         }
    //     }
    //     // tempArray = tempArray.filter((temp) => temp === temp)
    //     console.log("tempArray", tempArray)
    // }

    const getTwoNumber = () => {
        const candidates = [2, 3, 6, 7, 1, 4, 5, 4, 6, 0];
        let tempArray = []
        for (let i = 0; i < candidates.length; i++) {
            for (let j = i + 1; j < candidates.length; j++) {
                if (candidates[i] - candidates[j] > 0) {
                    tempArray.push(candidates[i])
                }
            }
        }
        // tempArray = tempArray.filter((temp) => temp === temp)
        console.log("tempArray", tempArray)
    }

    const getCombinationSum = (candidates: number[], target: number) => {
        const getSmallNumberOfArray = candidates.filter((candidate) => candidate <= target)
        let totalArray = []
        for (let i = 0; i < getSmallNumberOfArray.length; i++) {
            if (getSmallNumberOfArray[i] === target) {
                totalArray.push([getSmallNumberOfArray[i]])
            } else {
                const reminder = target - getSmallNumberOfArray[i]
                console.log("reminder", reminder, getCombinationSum(getSmallNumberOfArray, reminder))
            }
        }
        return totalArray
    }
    // getCombinationSum(candidates, target)
    getTwoNumber()
    return (
        <div>

        </div>
    );
}


