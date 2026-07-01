// Convert 1 to 20 taka in letter

let taka = 16;

let letter = (taka === 1) ? "One" : (taka === 2) ? "Two" : (taka === 3) ? "Three" : (taka === 4)
    ? "Four" : (taka === 5) ? "Five" : (taka === 6) ? "Six" : (taka === 7) ? "Seven" : (taka === 8)
        ? "Eight" : (taka === 9) ? "Nine" : (taka === 10) ? "Ten" : (taka === 11) ? "Eleven" : (taka === 12)
            ? "Twelve" : (taka === 13) ? "Thirteen" : (taka === 14) ? "Fourteen" : (taka === 15)
                ? "Fifteen" : (taka === 16) ? "Sixteen" : (taka === 17) ? "Seventeen" : (taka === 18)
                    ? "Eighteen" : (taka === 19) ? "Nineteen" : (taka === 20)
                        ? "Twenty" : "Invalid input";

console.log(letter);