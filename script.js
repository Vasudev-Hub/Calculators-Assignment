
document.getElementById('cosineBtn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('sidea').value);
    const b = parseFloat(document.getElementById('sideb').value);
    const C = parseFloat(document.getElementById('angleC').value) * (Math.PI / 180); 
  
    const cSquared = a * a + b * b - 2 * a * b * Math.cos(C);
    const c = Math.sqrt(cSquared);
    document.getElementById('cosineResult').innerText = c.toFixed(2);
});

