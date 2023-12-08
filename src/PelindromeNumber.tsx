import React from 'react';

export default function PelindromeNumber() {
    var isPalindrome = function (x: number) {
        const d = x.toString().split("").reverse().join("")
        console.log("X", d, typeof d)
        return x === Number(d)
    };
    console.log("isPalindrome", isPalindrome(-122))
    return (
        <div>
            PelindromeNumber
        </div>
    );
}
