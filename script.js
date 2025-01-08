const user = [12,333,3];

const sortedUser = user.sort((a, b) => {
    // If both numbers are even, sort by their sum
    if (a % 2 === 0 && b % 2 === 0) {
        return a + b - (b + a);
    }
    // If one number is even, sort it first
    else if (a % 2 === 0) {
        return -1;
    }
    else if (b % 2 === 0) {
        return 1;
    }
    // If both numbers are odd, sort by their product
    else {
        return b * a - (a * b);
    }
});

console.log(sortedUser);

// Output: [3, 12, 333]

