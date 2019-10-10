var meFilterSex  = function (_data, sexText) {
    var newArr = _data;
    if (sexText == 'f' || sexText == 'm') {
        newArr = _data.filter(function (ele) {
            return ele.sex == sexText;
        });
    }
    return newArr;
}