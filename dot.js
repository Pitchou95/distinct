    function dotProduct(v1, v2) {
        let ps = 0;
        for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
        }
        return ps;
    }

    function checkOrthogonality() {
    let n = parseInt(prompt("Enter the number of vector pairs:"));
    for (let i = 1; i <= n; i++) {
    let v1 = [];
    let v2 = [];
    for (let j = 1; j <= 2; j++) {
    let vector = prompt(`Enter vector ${j} (space separated values):`);
    let values = vector.split(" ").map(Number);
    if (j === 1) {
        v1 = values;
    } else {
        v2 = values;
    }
    }
    let ps = dotProduct(v1, v2);
    if (ps === 0) {
    console.log("The given vectors v1 and v2 are orthogonal");
    } else {
    console.log("The given vectors v1 and v2 are not orthogonal");
    }
}
}