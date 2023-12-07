import React from 'react';

export default function Solve1() {
    // const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const height = [4, 2, 0, 3, 2, 5]
    const waterSolve = (height: number[]) => {
        let left = [height[0]]
        let right = [height[height.length - 1]]
        let bigNumber = height[0]
        let i = 1
        let total = []
        while (i < height.length) {
            bigNumber = bigNumber > height[i] ? bigNumber : height[i]
            left.push(bigNumber)
            i++
        }
        i = height.length - 2
        bigNumber = height[height.length - 1]
        while (i >= 0) {
            bigNumber = bigNumber > height[i] ? bigNumber : height[i]
            right.push(bigNumber)
            i--
        }
        right = right.reverse()
        i = 0
        while (i <= height.length - 1) {
            let number = left[i] < right[i] ? left[i] : right[i]
            number = number - height[i]
            total.push(number)
            i++
        }
        total = [total.reduce((a, b) => a + b)]
        return total[0]
    }
    return (
        <div>
            water
        </div>
    );
}
