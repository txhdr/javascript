function somar (){
    let tnum = document.getElementById('txtnum')  
    let n = Number(tnum.value)
    let res = document.getElementById('res')

    if (n <= 0){
        window.alert('Número inválido!')
    }else{ // número válido ...
        switch(n){
            case 1:
                res.innerHTML = `
                1 x 1 = 1 <br>
                1 x 2 = 2 <br>
                1 x 3 = 3 <br>
                1 x 4 = 4 <br>
                1 x 5 = 5 <br>
                1 x 6 = 6 <br>
                1 x 7 = 7 <br>
                1 x 8 = 8 <br>
                1 x 9 = 9 <br>
                1 x 10 = 10 <br>
                `
                break
                case 2:
                    res.innerHTML = `
                    2x1 = 2 <br>
                    2x2 = 4 <br>
                    2x3 = 6 <br>
                    2x4 = 8 <br>
                    2x5 = 10 <br>
                    2x6 = 12 <br>
                    2x7 = 14 <br>
                    2x8 = 16 <br>
                    2x9 = 18 <br>
                    2x10 = 20 <br>
                    `
                    break
                case 3:
                    res.innerHTML = `
                    3x1 = 3 <br>
                    3x2 = 6 <br>
                    3x3 = 9 <br>
                    3x4 = 12 <br>
                    3x5 = 15 <br>
                    3x6 = 18 <br>
                    3x7 = 21 <br>
                    3x8 = 24 <br>
                    3x9 = 27 <br>
                    3x10 = 30 <br>`
                    break
                case 4: res.innerHTML = `
                    4x1 = 4<br>
                    4x2 = 8<br>
                    4x3 = 12<br>
                    4x4 = 16<br>
                    4x5 = 20<br>
                    4x6 = 24<br>
                    4x7 = 28<br>
                    4x8 = 32<br>
                    4x9 = 36<br>
                    4x10 = 40<br>`
                    break
                case 5: res.innerHTML = `
                    5x1 = 5 <br>
                    5x2 = 10 <br>
                    5x3 = 15 <br>
                    5x4 = 20 <br>
                    5x5 = 25 <br>
                    5x6 = 30 <br>
                    5x7 = 35 <br>
                    5x8 = 40 <br>
                    5x9 = 45 <br>
                    5x10 = 50 <br>
                `
                    break
                case 6: res.innerHTML = `
                6x1 = 6 <br>
                6x2 = 12 <br>
                6x3 = 18 <br>
                6x4 = 24 <br>
                6x5 = 30 <br>
                6x6 = 36 <br>
                6x7 = 42 <br>
                6x8 = 48 <br>
                6x9 = 54 <br>
                6x10 = 60 <br>
                `
                break

                default:
                    res.innerHTML = `oi, você cansou o código, volte mais tarde. ele pensa devagar...`

        }

    }
}