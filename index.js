function Animals(params) {
    this.name = params;
}

var triangle = function (n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0 - 1; j < i; j++) {
            document.write("*");
        }
        document.write('<br/>')
    }
}
triangle(5);
var triangleReverse = function (n) {
    var space = n - 1;
    var star ='';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < space; j++) {
            star+='-';
        }
        space--;
        for (let k = 0 - 1; k < i; k++) {
            //document.write('*');
            star+='*';
        }
        star+='\n';
    }
    console.log(star);
}
triangleReverse(5);
var triangleIsosceles = function (n) {
    var space = n - 1;
    var star ='';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < space; j++) {
            star+='-';
        }
        space--;
        for (let k = 0 - 1; k < i; k++) {
            //document.write('*');
            star+='*';
        }
        star+='\n';
    }
    console.log(star);
}
triangleIsosceles(5);


let sampleObj = {
    name: 'Nick',
    info: {
        major: 'Computer Science',
        year: 2,
        interest: 'Web development'
    }
}

let copiedObj = Object.assign({}, sampleObj);
copiedObj.name = 'Finn';
copiedObj.info.major = 'Physics';
copiedObj.info.interest = 'Astronomy';

console.log(sampleObj);
console.log(copiedObj);