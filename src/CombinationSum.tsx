import React from 'react';

export default function CombinationSum() {
    //  candidates = [2,3,6,7], target = 7
    // Output: [[2,2,3],[7]]
    const candidates = [2, 3, 6, 7];
    const target = 7;
    // let result = [i, j]

    var combinationSum = function (candidates: number[], target: number) {
        let result: number[][] = [];
        dfs(candidates, target, [], result);
        return result;

    };

    function dfs(nums: number[], target: number, path: number[], result: number[][]) {
        if (target < 0) {
            // Backtracking 
            return;
        }
        if (target === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            dfs(nums.slice(i), target - nums[i], [...path, nums[i]], result);
        }
    }

    console.log("combinationSum", combinationSum(candidates, target))
    // getTwoNumber()
    return (
        <div>

        </div>
    );
}


