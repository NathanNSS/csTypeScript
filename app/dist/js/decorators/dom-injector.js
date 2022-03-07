export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propiedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`Buscando elemento do DOM com seletor ${selector} para injetar em ${propertyKey} `);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
