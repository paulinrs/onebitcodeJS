function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)        
    } else {
        return num
    }
}

dividir(256)