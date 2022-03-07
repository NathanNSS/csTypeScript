export function domInjector(selector: string){
    return function( target: any, propertyKey:  string){
        
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propiedade ${propertyKey}`)

        let elemento: HTMLElement;

        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(selector);
                console.log(`Buscando elemento do DOM com seletor ${selector} para injetar em ${propertyKey} `)
            }

            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}