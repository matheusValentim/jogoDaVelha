var game = [[0,0,0],[0,0,0],[0,0,0]];

var vez = "x"

var div =  document.getElementById("jogo");
div.addEventListener("click", listener);

function listener(event) {
  if(event.target.id[0]!='c'){return;}
  var i1 = event.target.id[2];
  var i2 = event.target.id[4];
  if(game[i1][i2] == 0){
    game[i1][i2] = vez;
    var f = event.target;
    var s = "imgs/"+vez+".jpg";
    colocaImg(f,s,200,200);
    if(vez == 'x'){
      vez = 'o';
    }else{
      vez = 'x';
    }
  }
}


function colocaImg(father,src,h,w){
  var oImg = document.createElement("img");
  oImg.setAttribute('src', src);
  oImg.setAttribute('alt', 'na');
  oImg.setAttribute('height', h);
  oImg.setAttribute('width', w);
  father.appendChild(oImg);
}