var Municipality = document.getElementById('Municipality');
//select的id名稱

var area = document.getElementById('area');
//select的id名稱
var list = document.querySelector('.list');
//顯示出來的列表
var country = [
    {
        municipality:'台北市',
        area:'中正區',
        road:['八德路','三元路','大埔路']
    },
    {
        municipality:'台北市',
        area:'大同區',
        road:['大龍街','五原街']
    },
    {
        municipality:'台北市',
        area:'中山區',
        road:['一元街']
    },
    {
        municipality:'新北市',
        area:'萬里區',
        road:['二坪','八斗','下社']
    },
    {
        municipality:'新北市',
        area:'金山區',
        road:['八煙','八德']
    },
    {
        municipality:'桃園市',
        area:'中壢區',
        road:['七福新村']
    }
]
var munLen = country.length;
//console.log(munLen);
function updateArea(e){
    var select = e.target.value;
   // console.log(e.target);
    //.log(e);
    //console.log(select);
    var str = '';
    for(var i = 0 ; i < munLen ; i ++){
        if(select == country[i].municipality){
            var option = '<option value='+country[i].area +'>' + country[i].area + '</option>';
            str += option;
            area.innerHTML = '<option>請選擇'+str+'</option>';
            //area.innerHTML = str;
            //地區直接顯示的話，會沒辦法點選而秀出路段 
        }
        else if(select == '請選擇'){
            area.innerHTML = '<option>請選擇</option>'; 
         }
       // console.log(str);
    }
}

function updateRoad(e){
    var select = e.target.value;
    //console.log(e.target);
    
    //console.log(select);
     var strlist = '';
    
     //console.log(munLen);
     for(var i = 0 ; i < munLen ; i ++){
         if(select == country[i].area)
         {
            var roadLen = country[i].road.length;
            //console.log(roadLen);
            console.log(country[i].road);
            for(j = 0 ; j<roadLen ;j++){
                //console.log(country[i].road[j]);
                var option = '<li>'+country[i].road[j] +'</li>';
                strlist += option;
                list.innerHTML = strlist;
            }
              
         }  

    }    
}
Municipality.addEventListener('change',updateArea,false);
area.addEventListener('change',updateRoad,false);