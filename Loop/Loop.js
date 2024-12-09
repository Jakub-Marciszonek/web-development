function calculateFactorial() {
    let n = document.getElementById("factorial").value;
    
    if (n < 1) {
        document.getElementById("result-factorial").innerText = "Please enter a non-negative integer.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById("result-factorial").innerText = n + "! = " + factorial;
}

function calculatesum() {
    let n = document.getElementById("sum").value;

    if(n < 1) {
        document.getElementById("result-sum").innerText="Please enter a non-negative integer.";
        return
    }

    let sum = 0
    for (let i = 0; i <= n ; i++) {
        sum += i
    }
    document.getElementById("result-sum").innerText = sum
}

function finaloperation() {
    let n = document.getElementById("final").value;
    
    if(n < 1) {
        document.getElementById("last-formula").innerText="Please enter a non-negative integer."
        return
    }

    let lasteven = 0
    let lastodd = 0
    
    for (let i = 0; i <=n; i++) {
        if (i % 2 ==0) {
            lasteven += i 
        }
        else {
            lastodd += i
        }
    }
    document.getElementById("last-formula").innerText = "Sum of Odd="+lastodd+",Sum of Even="+lasteven
}