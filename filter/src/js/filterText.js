meFilterName  = function  (_data,_text) {
    var arr = [];
    arr = _data.filter(function(ele){
        return  ele.name.indexOf(_text)  !=  -1;
    })
    return arr 
}