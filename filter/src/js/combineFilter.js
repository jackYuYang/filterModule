function combine(obj){
    return function (arr) {
         for (var prop in obj){
             arr = obj[prop](arr,state[prop]);
         }
         return arr
    }
}

var lastFilter = combine({text:meFilterName,sex:meFilterSex});