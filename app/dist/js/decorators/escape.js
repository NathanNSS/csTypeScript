export function escape(target, propertyKey, descriptor) {
    const metodoOroginal = descriptor.value;
    descriptor.value = function (...params) {
        let retorno = metodoOroginal.apply(this, params);
        return retorno;
    };
    return descriptor;
}
