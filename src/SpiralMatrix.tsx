import React from 'react';

export default function SpiralMatrix() {
    const spiralMaker = () => {
        const n = 3
        const matrix = n * n
        let arrayOfMatrix = []
        for (let i = 0; i < n; i++) {
            let array = []
            for (let j = 0; j < n; j++) {
                array.push(`${i + j + 1}`)
            }
            arrayOfMatrix.push(array)
        }
    }

    // 1 a[n-n]
    // 2 a[n-2]
    // 3 a[n-1]
    // 4 a[n+2]
    // 5 a[n+5]
    // 6 a[n+4]
    // 7 a[n+3]
    // 8 a[n]
    // 9 a[n+1]

    return (
        <div>
            Spiral Matrix
        </div>
    );
}
