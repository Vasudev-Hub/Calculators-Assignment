
document.getElementById('cosineBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const C = parseFloat(document.getElementById('angleC').value) * (Math.PI / 180); // Convert degrees to radians


    const cSquared = a * a + b * b - 2 * a * b * Math.cos(C);
    const c = Math.sqrt(cSquared);
    document.getElementById('cosineResult').innerText = c.toFixed(2);
});


document.getElementById('asymptoteBtn').addEventListener('click', function() {
    const m = parseInt(document.getElementById('mValue').value);
    const n = parseInt(document.getElementById('nValue').value);


    let result = "";
    if (m === n) {
        result = "The asymptote is horizontal";
    } else if (m > n) {
        result = "The asymptote is the x-axis";
    } else {
        result = "The asymptote is vertical";
    }

    document.getElementById('asymptoteResult').innerText = result;
});


document.getElementById('piBtn').addEventListener('click', function() {
    const n = parseInt(document.getElementById('iterations').value);


    let piApprox = 0;
    for (let i = 0; i < n; i++) {
        piApprox += Math.pow(-1, i) / (2 * i + 1);
    }
    piApprox *= 4;

    document.getElementById('piResult').innerText = piApprox.toFixed(10);
});

