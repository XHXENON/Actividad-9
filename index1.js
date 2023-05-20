//- Instala la dependencia Winston
//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
//- Registra el error en un archivo a través de un try...catch
function doble(val){
    return val*2;
} 

try{
    const vari=12;
    const res=doble(vari);
    if(typeof vari==="number"){
        console.log("El valor multiplicado por 2 es:" + res);
    }
}catch(e){
    console.log("El dato que se solicita debe ser umero no de otro tipo");
}