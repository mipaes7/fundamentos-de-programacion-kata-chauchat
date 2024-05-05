let cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];

function chauchat (arr) {
    let fail = Math.floor(Math.random() * 10)
    let dispara = '';
    if (fail > 8) {
        for (let i = 0; i < arr.length; i++) {
            dispara += arr[i] + '\n';
            if ((i + 1) % 3 === 0) dispara += '\n';
        } 
    } else  console.log('fail');

    return dispara;
}


console.log(chauchat(cargador));