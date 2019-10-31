array1 = ['1','2','3'];
array2 = ['1','2','4'];
resultFilter = (array1,array2)=>{
    for (let i=0; i<array1.length; i++) {
        if (array1[i] != array2[i]) {
            return array1[i];
        }
    }
};