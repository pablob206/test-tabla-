const fs = require('fs');
const colors = require('colors/safe');

let listarArchivoMultiplicar = (base, limite = 10) => { //Declaracion de promesa
    let data = '';
    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;
        data += `${base} * ${ i } = ${resultado}\n`;
    }
    console.log('======================================='.green);
    console.log(`${data}`);
    console.log('======================================='.underline.red);
    console.log('======================================='.inverse);
    console.log('======================================='.rainbow);
    console.log('======================================='.trap);
}

let crearArchivoMultiplicar = (base, limite = 10) => { //Declaracion de la promesa
    return new Promise((resolve, reject) => { //Logica de la promesa
        if (!Number(base)) {
            reject(`El valor introducido: "${base}" no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${ i } = ${resultado}\n`;
        }

        fs.writeFile(`txt/tabla-${base}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivoMultiplicar,
    listarArchivoMultiplicar
}