let mevalar = [ "olma", "banan", "mandarin", "qulupnay" ]

alert( mevalar + " bu arrayning uzunligi " +  mevalar.length );

let sorov =confirm( " bu malumotni ochirasizmi " )

console.log(sorov);

if (sorov) {
    mevalar.pop(1)
    alert(' Arryning uzunligi ' + mevalar.length )
}else{
    alert(' arryning uzunligi '+  mevalar.length )
}