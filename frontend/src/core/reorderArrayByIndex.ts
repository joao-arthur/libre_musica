export default (array: Array<any>, index: number) =>
    array.slice(index).concat(array.slice(0, index));
