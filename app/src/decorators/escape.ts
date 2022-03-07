
export function escape(
    target:any,
    propertyKey:string,
    descriptor: PropertyDescriptor
){
    const metodoOroginal = descriptor.value;
    descriptor.value = function(...params: Array<any>){
        let retorno = metodoOroginal.apply(this, params);
        /*if(typeof retorno === "string"){
            console.log(`@escape ativo na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }*/

        return retorno;
    }

    return descriptor;
}