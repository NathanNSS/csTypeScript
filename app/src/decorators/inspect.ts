
export function inspect(){
    return function (
        target:any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        const metodoOroginal = descriptor.value
        descriptor.value = function(...params: Array<any>){
            console.log('---------- Inspetor ----------');
            console.log(`--- Metodo ${propertyKey}`);
            console.log(`--- Parametros: ${JSON.stringify(params)}`);
            const retorno = metodoOroginal.apply(this, params)
            console.log(`--- Retorno: ${JSON.stringify(retorno)}`)
            console.log(`-------------------------------`)
        }


       return  descriptor;
    }
}