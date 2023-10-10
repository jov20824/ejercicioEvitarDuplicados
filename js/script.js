var array = [100, 23, 23, 23, 23, 67, 45];
var outputArray = [];

function eliminarDupesAuto(lista){
    let mapa = new Set();
    for(var i =0;i<array.length;i++){
        mapa.add(array[i]);
    }
    outputArray.push(mapa);
}
function eliminarDupesManual(lista){
    outputArray = array;
    for(var i=0;i<array.length;i++){
       outputArray.sort();
       if(outputArray[i]==outputArray[i+1]){
            outputArray.splice(i,1);
            i-=1;
       }
    }
}
eliminarDupesAuto(array);
eliminarDupesManual(array);
console.log(outputArray);