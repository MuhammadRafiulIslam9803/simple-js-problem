let dayOfMedichine = 62;

for (let i = 1; i <= dayOfMedichine; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Day ${i}: Take double medicine today`);
    }
    else if (i % 3 === 0) {
        console.log(`Day ${i}: Take your medicine`);
    }
    else if (i > 60) {
        console.log(`Day ${i}: Stop taking medicine because you already complete it `);
    }
    else {
        console.log(`Day ${i}: No medicine today`);
    }

}
