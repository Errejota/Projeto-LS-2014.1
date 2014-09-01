//SLIDE BACKGROUND START - JavaScript ///////////////////////////////////////////////////////////////////////////////////////////////////////
var bgimages=new Array()
	bgimages[0]="_slide/img1.jpg"
	bgimages[1]="_slide/img2.jpg"
	bgimages[2]="_slide/img3.jpg"

var TextoSlide=new Array()
	TextoSlide[0]="\<span\>Gnar, o Yordle Pré-Histórico\<\/span\>\<br\> Armado de bumerangue e pedregulho - e seu temperamento no limite - Gnar chegou aos Campos da Justiça."
	TextoSlide[1]="\<span\>Animação League of Legends: Uma Nova Alvorada\<\/span\>\<br\>O dia nasce sobre um cenário consagrado com sangue e aço. Uma batalha começa ao nascer de uma nova alvorada."
	TextoSlide[2]="\<span\>Central Summoner’s Rift\<\/span\>\<br\>Saiba das novidades e dê sua opinião sobre a versão atualizada do mapa."

//Carregar imagens
var pathToImg=new Array()
for (i=0;i<bgimages.length;i++){
	pathToImg[i]=new Image();
	pathToImg[i].src=bgimages[i];
}
//Inicializar texto do slide e imagem de fundo¬
document.body.background=pathToImg[0].src;
document.querySelector("#SlideText").innerHTML=TextoSlide[0];

//Função e bootloader da mesma
var inc=-1;
function bgSlide(){
if (inc<bgimages.length-1){
	inc++;
	document.querySelector("#SlideText").innerHTML=TextoSlide[inc];
}else
	inc=0;
	document.body.background=pathToImg[inc].src;
	document.querySelector("#SlideText").innerHTML=TextoSlide[inc];
}

if (document.all||document.getElementById)
	window.onload=new Function('setInterval("bgSlide()",5000)');
//SLIDE BACKGROUND FIM