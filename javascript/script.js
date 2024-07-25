function generarCarton() {
    let tabla;
    let multiplicar;
    let tablaMulti;
    let contador = 0;
    let tablaHTML = '<table class="table">';
    //es para generar la tabla del dos donde se genera el numero por el que se multiplica
    for (tabla = 0; tabla < 5; tabla++) {
        tablaHTML += '<tr>';
        //es para generar la tabla del dos donde se genera el numero por el que se multiplica
        for (multiplicar = 0; multiplicar < 5; multiplicar++) {
            contador += 1;
            tablaMulti = contador * 2;// almacena la tabla del 2
            tablaHTML += '<td onclick="cambiarColor(this)">' + tablaMulti + '</td>';
            console.log(tablaMulti);
        }
        tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';
    document.getElementById('bingo-table').innerHTML = tablaHTML;
}
function cambiarColor(elemento) {
    if (elemento.style.backgroundColor === 'blue') {
        elemento.style.backgroundColor = '';
    } else {
        elemento.style.backgroundColor = 'blue';
    }
    // Cambia el color cuando se hace clic en la celda
}
console.log()
function colorearFilas(opcion) {
    let tabla = document.getElementById('bingo-table');
    let columnas = tabla.getElementsByTagName('td');
    switch (opcion) {
        case 'colorear colomna B':
            for (let posicion = 0; posicion < columnas.length; posicion += 5) {
                if (columnas[posicion].style.backgroundColor == 'red') {
                    columnas[posicion].style.backgroundColor = '';
                } else {
                    columnas[posicion].style.backgroundColor = 'red';
                }
            }

            break;
        case 'colorear colomna I':
            for (let posicion = 1; posicion < columnas.length; posicion += 5) {
                if (columnas[posicion].style.backgroundColor == 'green') {
                    columnas[posicion].style.backgroundColor = '';
                } else {
                    columnas[posicion].style.backgroundColor = 'green';
                }
            }
            break;
        case 'colorear colomna N':
            for (let posicion = 2; posicion < columnas.length; posicion += 5) {
                if (columnas[posicion].style.backgroundColor == 'yellow') {
                    columnas[posicion].style.backgroundColor = '';
                } else {
                    columnas[posicion].style.backgroundColor = 'yellow';
                }
            }
            break;
        case 'colorear colomna G':
            for (let posicion = 3; posicion < columnas.length; posicion += 5) {
                if (columnas[posicion].style.backgroundColor == 'aqua') {
                    columnas[posicion].style.backgroundColor = '';
                } else {
                    columnas[posicion].style.backgroundColor = 'aqua';
                }
            }
            break;
        case 'colorear colomna O':
            for (let posicion = 4; posicion < columnas.length; posicion += 5) {
                if (columnas[posicion].style.backgroundColor == 'orange') {
                    columnas[posicion].style.backgroundColor = '';
                } else {
                    columnas[posicion].style.backgroundColor = 'orange';
                }
            }
            break;
        case 'colorear X':
            for (let recorre_bingo = 0; recorre_bingo < 5; recorre_bingo++) {
                // Diagonal de arriba a abajo

                if (columnas[(4 - recorre_bingo) * 5 + recorre_bingo].style.backgroundColor == 'aqua'
                    && columnas[(4 - recorre_bingo) * 6].style.backgroundColor == 'aqua') {
                    
                    columnas[(4 - recorre_bingo) * 6].style.backgroundColor = '';

                    columnas[(4 - recorre_bingo) * 5 + recorre_bingo].style.backgroundColor = '';
                } else {
                    columnas[(4 - recorre_bingo) * 6].style.backgroundColor = 'aqua';
                    columnas[(4 - recorre_bingo) * 5 + recorre_bingo].style.backgroundColor = 'aqua';
                }
            }
            break;
        case 'colorear las tres X':

            let tabla = document.querySelector('.table tbody');
            let rows = tabla.querySelectorAll('tr');

            // Itera a través de cada fila
            for (let iteracion = 0; iteracion < rows.length; iteracion++) {
                let cells = rows[iteracion].querySelectorAll('td');
                // Colorea la celda en las tres x columna (triple 'X')
                cells[cells.length - 3 - iteracion].style.backgroundColor = 'purple';
                cells[iteracion].style.backgroundColor = 'purple';
                cells[cells.length - 1 - iteracion].style.backgroundColor = 'purple';
                cells[iteracion + 2].style.backgroundColor = 'purple';
                for (let iteracion = 2; iteracion < rows.length; iteracion++) {
                    let cells = rows[iteracion].querySelectorAll('td');

                    for (let iteracion3 = 2; iteracion3 < 5; iteracion3++) {
                        for (let iteracion4 = 2; iteracion4 < 5; iteracion4++) {
                            if (iteracion3 % 2 == 0 && iteracion4 % 2 == 1) {
                                cells[iteracion - 1].style.backgroundColor = 'purple';
                            } else if (iteracion3 % 2 == 1 && iteracion4 % 2 == 0) {
                                cells[cells.length - 1 - iteracion + 1].style.backgroundColor = 'purple';
                            } else {
                                console.log("")
                            }
                        }
                    }
                }
            }

            break;

        default:
            alert("error");
            break;
    }
}