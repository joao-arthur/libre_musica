const reorderArrayByIndex = (array: Array<any>, index: number) =>
    array.slice(index).concat(array.slice(0, index));

export default reorderArrayByIndex;