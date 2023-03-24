let season=prompt("Enter a month:");
let date= new Date();
date.setMonth(season);
let month=date.getMonth();

if(season<4){
	b="it's Summer Season";
}
else if(season<8){
	b="it's Fall Season";
}
else{
	b="it's Winter Season";
}
document.write("<h2>"+b);
