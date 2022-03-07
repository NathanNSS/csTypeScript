
export function tempoExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOroginal = descriptor.value;
        descriptor.value = function(...params: Array<any>){
            let divisor = 1;
            let unidade = "Milisegundos";
            if(emSegundos){
                divisor = 1000;
                unidade = "Segundos"
            }

            const t1 = performance.now();
            const retorno = metodoOroginal.apply(this, params);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempode de execução em ${(t2 - t1)/divisor} ${unidade}.`);
            retorno;
        }
        return descriptor;
    }
}