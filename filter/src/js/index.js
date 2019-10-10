var data = [
    {name:'王地虎',src:'./img/1.jpg',des:'耿直',sex:'m'},
    {name:'王港',src:'./img/2.jpg',des:'颈椎不好',sex:'f'},
    {name:'瓜皮刘',src:'./img/3.jpg',des:'吃瓜，不吐籽',sex:'m'},
    {name:'平头哥',src:'./img/4.jpg',des:'一种动物',sex:'f'},
    {name:'平安',src:'./img/5.jpg',des:'光头',sex:'m'},
    {name:'瓜迪奥拉',src:'./img/6.jpg',des:'外国人',sex:'m'}
]
var oInput = document.getElementsByTagName('input')[0];
var oUl = document.getElementsByTagName('ul')[0];
var oSpan = document.getElementsByTagName('span');
var activeSpan = oSpan[oSpan.length-1];
var state = {text:'',sex:''};

function randerPage (_data){
    var string = ''
    _data.forEach(function(ele){
        string =  string + '<li><img src = " '+ ele.src + ' "><div><p>' +ele.name + "</p><p> "+ele.des +"</p></div></li>"
    })
    console.log(string);
    oUl.innerHTML = string
}  


function updata () {
      randerPage(lastFilter(data));
}

oInput.oninput = function () {
    state.text  = this.value ;
    updata()
}

function bvent () {
      for(i = oSpan.length;i--;){
          oSpan[i].onclick = function (ele){
            if(activeSpan.className == 'active' && activeSpan == ele.target){
                activeSpan.className = '';
                state.sex = '';
                updata();
            }else{
                activeSpan.className = '';
                ele.target.className = 'active';
                activeSpan = ele.target;
                state.sex = ele.target.getAttribute('sex');
                updata();
            }
          }
      }
}

updata();
bvent();