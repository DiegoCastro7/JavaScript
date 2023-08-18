//###################################
// Reto 2
//####################################

//Desarrolado por: Diego Fernando Castro Torres

//<>&&

//Condiciones
function countpairs(){
    let n=5
    let array=[1,5,3,4,2]
    let tarjet=2
    let pares=[]
    bander=true
    for (let i = 0; i < n;i++) {
        for (let j = i+1; j < n;j++){
            if ((array[i]==array[j])||!((0<=array[i])&& (array[i]<=2*10**9))){
                bander=false
            }
        }
    }
    if ( (5<=n) && n<=(10**5) && (bander==true) && (1<=tarjet) && (tarjet<=10**9)){
        for (let i = 0; i < n;i++) {
            for (let j = i+1; j < n;j++){
                if ((array[i]- array [j]==tarjet)||(array[j]- array [i]==tarjet)){
                    pares.push(array[i],array[j]);
                }
            }
        }
        cantidad=((pares.length)/2)
        // for (let h = 0; h < pares.length; h+2) {
        //     console.log("{"+pares[h]+pares[h+1]+"}")
        // }
        //console.log(pares)
        console.log("Numero de pares:" + cantidad)
        console.log(bander)
    }
    
}
countpairs()