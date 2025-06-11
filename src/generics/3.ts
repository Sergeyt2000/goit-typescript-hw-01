function merge<T, B>(objA: T, objB: B): T & B {
    return Object.assign({}, objA, objB);
}
