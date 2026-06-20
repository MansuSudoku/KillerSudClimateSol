
const ValErrorColour = "red";
const ValValidColour =   "yellow"; 

var scale = 49;
var pad = 4;
var widthcell=scale;
var heightcell=scale ;
var fontSize =15;
var cluefontSize =11;
var clueColour ="white";
var fontName = 'Verdana';
var LoadIndex = 0 ;

/*
const canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');


*/

class GrpObj {
   constructor(val,IndexArr){
   this.testval = false;
    this.GrpVal = val;
    this.GrpIndedArray = IndexArr;
    this.clueErr = false;
    }


displayGroupObj(GrpObj){
  
 for (let i =0; i < GrpObj.GrpIndedArray.length ; i++){
var posxy = GrpObj.GrpIndedArray[i];
var y = posxy % 10;
var x = Math.floor(posxy / 10);
if(GrpObj.clueErr == true){
newBoard.KSudGrid[y-1][x-1].valErr = true;
newBoard.KSudGrid[y-1][x-1].DispReady = true;

newBoard.KSudGrid[y-1][x-1].displayCanvasGridObj();}
}

}

}



class GridObj {

constructor( xpos, ypos){
this.val = 0;
this.isEditable= true;
this.groupIndex =-999;
this.groupVal=-1;
this.x = xpos;
this.y = ypos;
this.bTop = false ;
this.bRight = false ;
this.bBottom = false ;
this.bLeft = false ;
this.combs = ""; //+xpos+ypos;

this.valErr = false;
this.clueErr =false;
this.DispReady = false;



} // end of constructor


stringBorders(){
var StrSetBorders ="";
if(this.bTop) StrSetBorders += "~";
if(this.bRight) StrSetBorders += "]";
if(this.bBottom) StrSetBorders += "_";
if(this.bLeft) StrSetBorders += "[";
return(StrSetBorders);
} // endof Fn stringBorders



displayCanvasGridObj(){
//if (this.val==0) return;
//var canvas = document.getElementById('myCanvas');
//if (canvas.getContext) {
//var ctx = canvas.getContext('2d');

if(ctx){


// here put the code to display one gridObj
/*
var scale = 55;
var pad = 4;
var widthcell=scale;
var heightcell=scale ;
var fontSize =19;
var cluefontSize =12;
var fontName = 'Verdana';
*/

ctx.strokeStyle = "black";
ctx.lineWidth =1;

ctx.fillStyle = "purple";
ctx.fillRect(this.x*widthcell, this.y*heightcell, widthcell, heightcell);
ctx.setLineDash([1, 0]);
ctx.strokeRect(this.x*widthcell, this.y*heightcell, widthcell, heightcell);



//const ValErrorColour = "red"; 
//const ValValidColour =  "black"

ctx.fillStyle = ValValidColour; //"black";
//ctx.font = "16px Verdana";
ctx.font = ''+ fontSize +'px '+ fontName ;
if(this.val >0)
{    //  remove = after testing as zero denotes empty 

if (this.valErr == true)
 ctx.fillStyle = ValErrorColour ;
ctx.fillText(this.val , this.x*widthcell+ (widthcell/3)    , this.y*heightcell+fontSize+ (heightcell/3) );
}else {
ctx.fillStyle =  ValValidColour ; //"yellow"; //ValErrorColour;//"red";
ctx.fillText(" " , this.x*widthcell+ (widthcell/3)    , this.y*heightcell+fontSize+ (heightcell/3) );

var CombsFontSize = 10;

if(this.combs.length >= 1){
ctx.fillStyle = "white";
ctx.font = ''+ CombsFontSize +'px '+ fontName ;

var padx = 15;
var pady = 3;
var coordx = this.x*widthcell + padx;
var coordy = this.y*heightcell + pady;

 for(let iComb = 0; iComb <9 ; iComb++){
  if(this.combs.includes(""+(iComb+1))){
var posx = coordx + (((widthcell-(2*padx))/4)* (iComb%3)+1) ;
var posy = coordy + (((heightcell-(2*pady))/4)*(Math.floor(iComb/3)+1))+CombsFontSize;

ctx.fillText(""+(iComb+1), posx, posy);
/*
 ctx.fillText(""+(iComb+1) , this.x*widthcell+ (iComb%3*(widthcell/3))    , (this.y-1)*heightcell+fontSize+ (heightcell/2)+(iComb/3*(heightcell/3) ));
// ctx.fillText(this.combs , this.x*widthcell+ pad    , this.y*heightcell+fontSize+ (heightcell/2) );
*/
}
 } // end for iCom

/*
var row = 1;  // 1,2,3
var col = 1; // 1,2,3
var posx = this.x*widthcell+ ((widthcell/4)*col);
var posy = ((this.y)*heightcell)+((heightcell/5)*row)+10;
ctx.fillText("x", posx, posy);
*/

// this.x*widthcell+ (iComb%3*(widthcell/3))    , //(this.y-1)*heightcell+fontSize+ (heightcell/2)+(iComb/3
//*(heightcell/3) ));


}


}
// put else here to empty griditem with fillrect


ctx.setLineDash([7, 3]);
ctx.lineWidth =1;
var GroupBorderColour = "";
GroupBorderColour = "yellow" 

if(this.bTop){

 ctx.moveTo(this.x*widthcell, this.y*heightcell+pad);
 ctx.lineTo(this.x*widthcell+ widthcell, this.y*heightcell+pad);
ctx.strokeStyle = GroupBorderColour; // "red";
ctx.stroke();
}
if(this.bBottom){
 ctx.moveTo(this.x*widthcell, this.y*heightcell+heightcell-pad);
 ctx.lineTo(this.x*widthcell+ widthcell, this.y*heightcell +heightcell-pad);
ctx.strokeStyle = GroupBorderColour;
ctx.stroke();
}

if(this.bLeft){
 ctx.moveTo(this.x*widthcell+pad, this.y*heightcell);
 ctx.lineTo(this.x*widthcell+pad, this.y*heightcell+heightcell);
ctx.strokeStyle = GroupBorderColour;
ctx.stroke();
}

if(this.bRight){
 ctx.moveTo(this.x*widthcell+widthcell-pad, this.y*heightcell);
 ctx.lineTo(this.x*widthcell+ widthcell-pad, this.y*heightcell +heightcell);
ctx.strokeStyle = GroupBorderColour;
ctx.stroke();
}


if(this.groupVal >=0)
{

//var testout  = newBoard.KSudGrps[this.groupIndex].testval;
//if (testout)
//var bGroupTotal = newBoard.KSudGrps[this.groupIndex].clueErr;
////else 
//var bGroupTotal = false;

if(this.clueErr == false)
ctx.fillStyle = clueColour; //"white";
else  ctx.fillStyle = "red";
//ctx.font = "10px Verdana";
ctx.font = ''+ cluefontSize +'px '+ fontName 
ctx.fillText(this.groupVal, this.x*widthcell+pad+2, this.y*heightcell+cluefontSize+pad+2 );
}



} // if ctx
DrawQuads();
this.DispReady = false;

}



displayGridObj(){
var strbttnId = "Bttn"+this.x + this.y;
var outButton = document.getElementById(strbttnId);
var paraTab = outButton.childNodes[0];
if(this.groupVal >=0)
paraTab.rows[0].cells[0].innerHTML = this.groupVal;
if(this.val > 0)
paraTab.rows[1].cells[0].innerHTML = this.val;
paraTab.rows[2].cells[0].innerHTML = this.combs;
if(this.bTop) 
outButton.classList.add("Dtop");  
if (this.bRight) {
         outButton.classList.add("Dright");
       }else  outButton.classList.add("Opright");
      if (this.bLeft) {
         outButton.classList.add("Dleft");
       }else  outButton.classList.add("Opleft");
       if (this.bBottom) {
        outButton.classList.add("Dbottom");
       }else  outButton.classList.add("Opbottom");
}//end function displayGridObj

 
initializeGridObj(){
this.val = 0;
this.groupIndex =-999;
this.groupVal=-1;
this.bTop = false ;
this.bRight = false ;
this.bBottom = false ;
this.bLeft = false ;
//this.combs = "1,2,3,4,5,6,7,8,9";
this.combs = "";
this.valErr = false;
this.clueErr =false;
this.DispReady = true;
return;
 }


}// end of class GridObj






function GroupIndexAssignGrid(GroupArr, GridArr){
for (let z =0; z <GroupArr.length ; z++){
for (let i =0; i <GroupArr[z].GrpIndedArray.length ; i++){
var posxy = GroupArr[z].GrpIndedArray[i];
var y = posxy % 10;
var x = Math.floor(posxy / 10);
GridArr[y-1][x-1].groupIndex  = z;
if (i==0){
GridArr[y-1][x-1].groupVal=  GroupArr[z].GrpVal ;
}
}
}
}

function ResolveBorders(GridArr){
for (let  j= 0 ; j < 9; j++){
  for(let i =0; i<9 ;i++){
    //
    if((i==0)||(GridArr[j][i].groupIndex!=GridArr[j][i-1].groupIndex))
       GridArr[j][i].bLeft  = true;
    if((i==8)||(GridArr[j][i].groupIndex!=GridArr[j][i+1].groupIndex))
       GridArr[j][i].bRight   = true;
    if((j==0)||(GridArr[j][i].groupIndex!=GridArr[j-1][i].groupIndex))
       GridArr[j][i].bTop = true;
    if((j==8)||(GridArr[j][i].groupIndex!=GridArr[j+1][i].groupIndex))
       GridArr[j][i].bBottom = true;
   //    console.log(GridArr[j][i].groupIndex);
   }// for i
}// for j

}// end fn ResolveBorders




function RecCell(LoadData, KSudGrps) {
var totalFoundElements = 0;
var GroupArr = LoadData.split("}");
for (let z =0; z <GroupArr.length-1 ; z++){
var GrParams = GroupArr[z].split("{");
var indices = GrParams[1].split(",");
var GrValStr = GrParams[0].split(":");
var GrVal =0;

if (GrValStr.length > 1){
  GrVal = parseInt(GrValStr[1]);
} else {
  GrVal= parseInt(GrValStr[0]) }

var IntCoordArr = [];
   for (let i = 0; i < indices.length ; i++){
   IntCoordArr.push(parseInt(indices[i])) ;
   totalFoundElements++;
   }

var myObj = new GrpObj(GrVal, IntCoordArr);
KSudGrps.push(myObj);
newBoard.KSudGrps.push(myObj);

}
console.log("total Found Elements ="+totalFoundElements);
console.log(KSudGrps);

}

function DrawQuads(){
//var canvas = document.getElementById('myCanvas');
//if (canvas.getContext) {
//var ctx = canvas.getContext('2d');
if(ctx){
ctx.setLineDash([1, 1]);
ctx.strokeStyle = "black";
ctx.lineWidth =4;
ctx.fillStyle = "green"
var widthBox =  canvas.width/3;
var heightBox = canvas.height/3;

for (let y =0; y <3; y++){
for (let x =0; x <3; x++){
ctx.strokeRect(x*widthBox , y*heightBox, widthBox , heightBox);
}
}
}// endof  if (canvas
}// endof function DrawQuads


function LoadGame(InData, KSudGrps, KSudGrid ){
//alert("Arrived at LoadGame");
 newBoard.KsetIntervaludGrps = null;
 KSudGrps= [];
newBoard.LogGridBorders();
newBoard.initializeBoard();
newBoard.LogGridBorders();
RecCell(InData,  KSudGrps);
GroupIndexAssignGrid(KSudGrps, KSudGrid);
ResolveBorders(KSudGrid);
newBoard.LogGridBorders();
for (let  j= 0 ; j < 9; j++){
for(let i =0; i<9 ;i++){
//newBoard.KSudGrid[j][i].displayGridObj();
newBoard.KSudGrid[j][i].displayCanvasGridObj();
}
}
newBoard.RenderDisplay(newBoard);
	LoadIndex++;
if(newBoard.clockInterval==null)
newBoard.clockInterval = setInterval(updateTimer, 1000);
}
  




function LoadGameFile(KSudGrps, KSudGrid){
     //alert("Arrived at this LoadGameFile will add more"); 
   let fr = new FileReader();
/*
                fr.onload = function () {
                   let strData = fr.result;
	        //   let Groups = strData.substring(strData.indexOf("Groups"), strData.indexOf("UndoMark"));
                   //string ops to narrow down the groups only to pass as first paramater
                   LoadGame(strData, KSudGrps, KSudGrid);
                }
 */
//alert("reached the end plus");
                fr.readAsText("LinksGit.txt"); //this.files[0]); 
//alert("Past the read as text func");


}

/*
function LoadGame(InData, KSudGrps, KSudGrid ){
KSudGrps= [];
newBoard.initializeBoard();
RecCell(InData,  KSudGrps);
GroupIndexAssignGrid(KSudGrps, KSudGrid);
ResolveBorders(KSudGrid);
for (let  j= 0 ; j < 9; j++){
for(let i =0; i<9 ;i++){
//newBoard.KSudGrid[j][i].displayGridObj();
newBoard.KSudGrid[j][i].displayCanvasGridObj();
}
}






newBoard.RenderDisplay(newBoard);
//displayCanvasGridObj();

var outDisp =  document.getElementById("my2Table");
newBoard.OutDisplay =outDisp ;
newBoard.Display =outDisp ;


DrawQuads();
} // eofn LoadGame

*/


function ToggleBordersSel(ID)
{
//var myBut = document.getElementById("ToolDigBtn10");
var myBut = document.getElementById(ID);
myBut.classList.toggle("toolButtonSelected");
}



function ToolCombToggle(strID, ev){
this.bCombs = ! this.bCombs;

var myBut = document.getElementById("ToolDigBtn10");
//if(this.bCombs)
myBut.classList.toggle("toolButtonSelected");
//else
//myBut.classList.add("toolButtnUnSel");
}

function ToolDigButtonClick(strID, ev){
var lastChar = strID[strID.length-1];
var curdigit = parseInt(  lastChar );
var strOldOff  = strID;
strOldOff[strOldOff.length-1]=newBoard.CurrentDigit;
//ToggleBordersSel(strOldOff);

if(newBoard.CurrentDigit>=0)
ToggleBordersSel("ToolDigBtn"+ newBoard.CurrentDigit);

if( newBoard.CurrentDigit != curdigit ){

newBoard.SetCurDigit(curdigit);

ToggleBordersSel(strID);
}
}

function remCharString(c2rem, srcString)
{
var newString ="";
for(var i=0; i< srcString.length; i++){
  if(srcString[i] != c2rem){
	newString+= srcString[i];
      }// end if
}//end for i
return (newString);
}




class KSudBoard {

constructor(DataSrc, OutTab){
this.ValidEntryCount = 0;
this.GameOver = false;
this.bGroupsEnables = false;   // need to be unpdated to true when loading Killer is done
this.InData = DataSrc;
this.OutDisplay = OutTab ;
this.BsizeX = 9;
this.BsizeY = 9;
this.KSudGrid = [];
this.KSudGrps = [];
this.Display  = OutTab;
this.CurrentDigit = -1;   // not yet valid number
this.bCombs = false ;
this.EnterTotal = 0;
this.CorrectTotal = 0;
this.clockInterval = null;

//board initialize 

for (let j=0; j<9; j++){
var cellcol = [];
for (let i=0; i<9 ; i++){
var newGridObj = new GridObj(j, i);
newGridObj.x = i ;
newGridObj.y = j ;
cellcol.push(newGridObj);
}
this.KSudGrid.push(cellcol);
}
//initializeTable(this.OutDisplay, this.KSudGrid, this.BsizeX, this.BsizeY);   // 
var outDisp2 =  document.getElementById("my2Table");

//initializeTable(outDisp2, this.KSudGrid, this.BsizeX, this.BsizeY);

DrawQuads();

//initializeGrid(this.OutDisplay);

//initializeGrid(outDisp2);



 var Tooltable = document.getElementById("myTools");
  var trs = Tooltable.getElementsByTagName("tr");
 var tds = document.getElementsByTagName("td");

for (let j = 0 ; j <= 10 ; j++){
var DigitBtns = [];
        DigitBtns[j] = document.createElement("button");
        DigitBtns[j].width = 30;
        DigitBtns[j].height = 30;
        DigitBtns[j].innerHTML =j;
        DigitBtns[j].id = "ToolDigBtn" + (j) ;
        if(j == 0 )  DigitBtns[j].innerHTML = "Del" ;
        if(j != 10 ) DigitBtns[j].addEventListener('click', ToolDigButtonClick.bind(this,  DigitBtns[j].id));
        if(j == 10 ){
         DigitBtns[j].innerHTML = "Combs" ;
        DigitBtns[j].addEventListener('click', ToolCombToggle.bind(this,  DigitBtns[j].id));
         }
       Tooltable.rows[0].cells[0].appendChild(DigitBtns[j]);
       tds[0].appendChild(DigitBtns[j]);
}

var br= 1;
//this.RenderDisplay(newBoard);
} //end of constructor KSudBoard

LogGridBorders(){
for (let j=0; j<9; j++){
var RowOfBorders = "";
for (let i=0; i<9 ; i++){
//RowOfBorders +=  this.KSudGrid[i][j].stringBorders() + ",";
RowOfBorders +=  newBoard.KSudGrid[i][j].stringBorders() + ",";
}// end for i
console.log(RowOfBorders)
}// end for j


if (newBoard.KSudGrps!=null) {
//console.log("also groups length = " + newBoard.KSudGrps.length);
var strGrpCont = "";
var totalGridMembers = 0;
for (let i = 0; i < newBoard.KSudGrps.length; i++){
   strGrpCont += "C" + newBoard.KSudGrps[i].GrpVal;
   strGrpCont += "[" + newBoard.KSudGrps[i].GrpIndedArray.map(String)+ "]"; 
   totalGridMembers += newBoard.KSudGrps[i].GrpIndedArray.length ;
}
 console.log("Groups conts:=>" + strGrpCont);
 console.log("number of membered Grid elements = "+ totalGridMembers);
}
else console.log("also groups length = 0");
} // endof Fn LogGridBorders

//GrpVal = val;
 //   this.GrpIndedArray



 initializeToolBar()
{
 var Tooltable = document.getElementById("myTools");
 var trs = Tooltable.getElementsByTagName("tr");
var tds = document.getElementsByTagName("td");

for (let j = 0 ; j <= 9 ; j++){
var DigitBtns = [];
     
   DigitBtns[j] = document.createElement("button");
   DigitBtns[j].width = 30;     
   DigitBtns[j].height = 30;    
   DigitBtns[j].innerHTML =j;
   DigitBtns[j].id = "ToolDigBtn" + (j) ;
    DigitBtns[j].addEventListener('click', ToolDigButtonClick.bind(this,  DigitBtns[j].id));
//     Tooltable.row[0].cell[0].appendChild(DigitBtns[j]); 
     tds[0].appendChild(DigitBtns[j]);
}
}//end of initialize toolbar


isValidHorizontal(CurDigit, x, y){
var validState = true ;
for (let i=0; i<9; i++){
if((this.KSudGrid[i][y].val ==CurDigit)&(i!=x)){
 validState = false;
this.KSudGrid[i][y].valErr=true;
}
}
this.KSudGrid[x][y].valErr= !validState;
return (validState);
} // eofn isValidHorizontal

isValidVirt(CurDigit, x, y){
var validState = true ;
for (let j=0; j<9; j++){
if((this.KSudGrid[x][j].val ==CurDigit)&(j!=y)){ validState = false;
this.KSudGrid[x][j].valErr=true;
}
}

this.KSudGrid[x][y].valErr= !validState;
return (validState);
}// eon isValidVirt


CheckValidEntry(CurDigit, x, y){
var entryIsValid = this.isValidVirt(CurDigit, x, y) && this.isValidHorizontal(CurDigit, x, y);
return (true);
}

isThereVHMatch(CurDig, x, y){
var Match = false;
for(let i=0; i<9; i++ )
{
  if((this.KSudGrid[x][i].val ==CurDig)&&(i!=y))
     Match = true;
  if((this.KSudGrid[i][y].val ==CurDig)&&(i!=x))
     Match = true;
}

return(Match);
}

clearAllBoardValueErrorFlags(){
for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
this.KSudGrid[i][j].valErr= false;
}// end for i
}  // end for j

}//endof clearAllBoardValueErrorFlags()

getXY(Sec){
var x = Sec %3;
var  y= Math.trunc(Sec /3);
var retArray=[];

retArray.push(x);
retArray.push(y);

return(retArray); 
}


updateSectorCollisions(){
for (let sec=0; sec<9; sec++){

var SecCoords = this.getXY(sec);
//console.log("x="+SecCoords[0] + "  y="+SecCoords[1]  );
for (let digit =1; digit<=9 ; digit++){
var ArrSecColls = [];
for (let GrdInd=0; GrdInd<9; GrdInd++){
var Coords = this.getXY(GrdInd);
var x = SecCoords[0]*3  + Coords[0];
var y = SecCoords[1]*3  + Coords[1];
if (this.KSudGrid[x][y].val==digit ){
var BCoords =[ x, y];
ArrSecColls.push(BCoords) ;
}

//if (sec == 8) console.log("x="+x + "  y="+ y  );
if(ArrSecColls.length >1){
  for (let k = 0; k < ArrSecColls.length; k++){
   this.KSudGrid[ArrSecColls[k][0]][ArrSecColls[k][1]].valErr= true;
 this.KSudGrid[ArrSecColls[k][0]][ArrSecColls[k][1]].DispReady = true;

 }
}
}
}
}
} //eoffnc  updateSectorCollisions


updateHVCollisionFlags(){


for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
  if(this.KSudGrid[i][j].val >0){
  var ERRDig = this.isThereVHMatch(this.KSudGrid[i][j].val, i, j);
if(ERRDig && (this.KSudGrid[i][j].valErr==false)){
this.KSudGrid[i][j].valErr=true;
this.KSudGrid[i][j].DispReady=true;
}else{
  if((this.KSudGrid[i][j].valErr==true)&&(ERRDig==false)) {
   this.KSudGrid[i][j].valErr=false;
   this.KSudGrid[i][j].DispReady= true;
   }
}

}else{
  if((this.KSudGrid[i][j].val == 0) &&(this.KSudGrid[i][j].valErr == true)){
   this.KSudGrid[i][j].valErr = false;
   this.KSudGrid[i][j].DispReady = true
}

}

//this.KSudGrid[i][j].valErr= false;

}// end for i
}  // end for j

//alert("updateHVCollisionFlags found");
return;
} // endof updateHVCollisionFlags()


updateBoardValidFlags(){
this.clearAllBoardValueErrorFlags();

// for each Row cheak for duplicate digit entries
for (let j=0; j<9; j++){
for (let digit =1; digit<=9 ; digit++){
var ArrHline = [];
var ArrVline = [];
for (let i=0; i<9 ; i++){
if (this.KSudGrid[i][j].val==digit ) ArrHline.push(i) ;
if (this.KSudGrid[j][i].val==digit ) ArrVline.push(i) ;
}//end  i
if(ArrHline.length >1){
  for (let k = 0; k < ArrHline.length; k++){
   this.KSudGrid[ArrHline[k]][j].valErr= true;
   this.KSudGrid[ArrHline[k]][j].DispReady= true;
   }
}// end if ArrHline

if(ArrVline.length >1){
  for (let k = 0; k < ArrVline.length; k++){
   this.KSudGrid[j][ArrVline[k]].valErr= true;
   this.KSudGrid[j][ArrVline[k]].DispReady = true;
   }
}// end if ArrVline


}
} //end j


} //offnc   updateBoardValidFlags



UpdateGroupSumsErrors(GroupArr, GridArr){
for (let z =0; z <GroupArr.length ; z++){
var grpElementValSum =0;
var entryCount = 0;


 for (let i =0; i <GroupArr[z].GrpIndedArray.length ; i++){
var posxy = GroupArr[z].GrpIndedArray[i];
var y = posxy % 10;
var x = Math.floor(posxy / 10);
grpElementValSum += GridArr[y-1][x-1].val;
if(GridArr[y-1][x-1].val > 0) entryCount++;

}// endOf i

if( grpElementValSum >   GroupArr[z].GrpVal ) {
 GroupArr[z].clueErr = true;
 var gridInd = GroupArr[z].GrpIndedArray[0];
 var gridx = Math.floor(gridInd / 10);
 var gridy = gridInd % 10;
 newBoard.KSudGrid[gridy-1][gridx-1].clueErr = true;
newBoard.KSudGrid[gridy-1][gridx-1].DispReady = true;
GroupArr[z].displayGroupObj(GroupArr[z]);
}
else  {
if((grpElementValSum < GroupArr[z].GrpVal)&&
(entryCount==GroupArr[z].GrpIndedArray.length)){
 GroupArr[z].clueErr = true;
 var gridInd = GroupArr[z].GrpIndedArray[0];
 var gridx = Math.floor(gridInd / 10);
 var gridy = gridInd % 10;
 newBoard.KSudGrid[gridy-1][gridx-1].clueErr = true;
newBoard.KSudGrid[gridy-1][gridx-1].DispReady = true;
GroupArr[z].displayGroupObj(GroupArr[z]);
}else{

GroupArr[z].clueErr = false;
 var gridInd = GroupArr[z].GrpIndedArray[0];
 var gridx = Math.floor(gridInd / 10);
 var gridy = gridInd % 10;
if(newBoard.KSudGrid[gridy-1][gridx-1].clueErr == true){ 
newBoard.KSudGrid[gridy-1][gridx-1].clueErr = false;
newBoard.KSudGrid[gridy-1][gridx-1].DispReady = true;
}

}

}
}
}


isInValidSumGroup(x,y) {

}


NumberOfGridsEntered(){
var total =0;
for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
   if (( this.KSudGrid[i][j].valErr == false)&&(this.KSudGrid[i][j].val>0)&&(this.KSudGrps[this.KSudGrid[i][j].groupIndex].clueErr==false))
    total++;
   }
}
return(total );
}


isAllEntriesValid(){
for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
   if ( this.KSudGrid[i][j].valErr)
     return(false);
   }
}
return(true);
}






NextMove( j, i) {

var newEntry = this.CurrentDigit ;
if((this.bCombs) &&(this.KSudGrid[i][j].val==0)){

if(newEntry == 0){
this.KSudGrid[i][j].combs = "";

  this.DispReady = true;
this.KSudGrid[i][j].DispReady=true;
  newBoard.RenderDisplay(newBoard);


 return;
}

var posof = this.KSudGrid[i][j].combs.indexOf(""+this.CurrentDigit);
if(posof>=0){
var removechar = (""+this.CurrentDigit) ;
var newcombstr = remCharString(removechar, this.KSudGrid[i][j].combs);
this.KSudGrid[i][j].combs = newcombstr ;

//  this.KSugGrid[i][j].combs = remCharString((""+this.CurrentDigit), //this.KSugGrid[i][j].combs);
}
else
  this.KSudGrid[i][j].combs += ""+ this.CurrentDigit; 
  this.DispReady = true;
this.KSudGrid[i][j].DispReady=true;
 // this.KSugGrid[i][j].displayCanvasGridObj();
  newBoard.RenderDisplay(newBoard);

}else
if(this.CurrentDigit >=0){
     this.KSudGrid[i][j].val = this.CurrentDigit;
      this.KSudGrid[i][j].DispReady = true;
//   this.CheckValidEntry(newEntry, i, j); // if this check to add up correct entry count for game over 
 //  this.updateBoardValidFlags();
this.updateHVCollisionFlags();
this.updateSectorCollisions();
this.UpdateGroupSumsErrors(this.KSudGrps, this.KSudGrid);


   
//if (this.isAllEntriesValid()) 
 //this.ValidEntryCount++;
this.ValidEntryCount=this.NumberOfGridsEntered();
if (this.ValidEntryCount== 81)
   this.GameOver = true;
//this.KSudGrid[i][j].val++;
//setTimeout(newBoard.RenderDisplay(newBoard), 100000);
//this.KSudGrid[i][j].displayCanvasGridObj();
newBoard.RenderDisplay(newBoard);

} else console.log("Error invalid toolbar option ");

//this.KSudGrid[i][j].displayCanvasGridObj();

}// eofn   3




SetCurDigit(val){
if ((val >=0) && (val <=9)){
 this.CurrentDigit = val;
var OutDig = document.getElementById( "CurDig" );
if (val ==0)
OutDig.innerHTML ="Del";
else 
OutDig.innerHTML = val ;
}
else alert("out of range curdigit attempt to = " + val);
}

RenderDisplay(Board)
{
/*
if(ctx){

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height );
} */

ctx.reset();
for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
//newBoard.KSudGrid[i][j].displayCanvasGridObj();
//if(Board.KSudGrid[i][j].DispReady)
Board.KSudGrid[i][j].displayCanvasGridObj();
}// end for i
}// end for j

var enteredScore = Board.ValidEntryCount ;//Board.NumberOfGridsEntered();
//var enteredScore = this.NumberOfGridsEntered();

var OutDlg = document.getElementById( "status" );
if(enteredScore < 81)
OutDlg.innerHTML  = ""+enteredScore + " out of 81";
else
OutDlg.innerHTML  = "GAME OVER YOU WINNER";

//DrawQuads();

}//EofnRenderDisplay

initializeBoard(){
timer =0;
if(ctx){
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height );
} 
this.KSudGrps = [];
for (let j=0; j<9; j++){
for (let i=0; i<9 ; i++){
newBoard.KSudGrid[i][j].initializeGridObj();
}// end for i
}// end for j


}


toggleLevelSel(){
var selev = document.getElementById("tableSelLev");
if(selev.style.display == "none")
 selev.style.display = "inline";
 else selev.style.display = "none";
}

    RadioSelect(Level) {
        if ((Level >= 1) & (Level <= 3)){
            if (Level == 1)
            LoadGame(LoadGamesSIM[CurrentDay - 1], newBoard.KSudGrps, newBoard.KSudGrid);

            if (Level == 2)
            LoadGame(LoadGames[CurrentDay - 1], newBoard.KSudGrps, newBoard.KSudGrid);

            if (Level == 3)
            LoadGame(LoadGamesHARD[CurrentDay - 1], newBoard.KSudGrps, newBoard.KSudGrid);


        } else console.log("Error:invalid level selected ");

newBoard.toggleLevelSel();
}


}//end of class KSudBoard




var LoadData = 
/*"Groups:14{11,12}6{21,31}12{41,42,32}12{51,61,71}27{81,91,82,92}10{22,23}12{52,62}18{72,73,74}6{13,14}" +
   "14{33,43,53}14{63,64,54}8{83,84}9{93,94}14{24,34}22{44,45,55,65,66}14{15,25,35}15{75,85,95}12{16,17}9{26,27}" +
    "10{36,37,38}24{46,56,47}10{76,86}10{96,97}6{57,67,77}13{87,88}22{18,28,19,29}10{48,58}17{68,78,69}6{98,99}" +
    "20{39,49,59}9{79,89}";*/

"Groups:7{11,21}5{12,13}15{22,23}9{32,33}26{31,41,51,61}5{42,43}29{53,52,62,72}" +
"18{71,81,91,92}20{73,83,93,82}6{63,64,74}18{84,94,95}10{75,85}9{86,96}20{76,66,65}" + "8{54,55,56}16{34,44,45}13{24,14}17{15,16,26}10{25,35}18{36,46,47}20{17,27,37,28}" + "20{18,19,29,39}17{38,48,58,57}11{67,68}21{49,59,69,79}15{77,78}8{87,88}7{97,98}7{89,99}";


var newBoard ;
var canvas = null;
var ctx = null;
var timer = 0;







/*
function init()
{
  
console.log(" Good not Initialise is invoking instead of reboot main");
   window.onload = null ;
}
*/
function isvalidVirt(CurDigit, x, y){
var validState = true ;
for (let j=0; j<9; j++){
if((newBoard.KSudGrid[x][j].val ==CurDigit)&(j!=y)) validState = false;
}
return (validState);
}


function isvalidEntry(CurDigit, x, y){
return (true);
}


function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
var cellWidth = canvas.width /9;
var cellHeight = canvas.height /9;
var j = Math. trunc(x / cellWidth);
var i = Math. trunc(y / cellHeight);
    console.log("x: " + x + " y: " + y+ "----"+ "i: " + i + "j: " + j);

newBoard.NextMove(j, i);

}  //endof getCursorPosition

// Function to format time as MM:SS
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }


function updateTimer()
{              
var timeDisp = document.getElementById("timer");
timer++;
//console.log("TIMER reached");
//if (timer <300) {
//alert("reached Timer");

timeDisp.innerHTML = formatTime(timer);
if(newBoard.GameOver) {
clearInterval(newBoard.clockInterval);
document.getElementById( "status" ).innerHTML = "Game Over in "+formatTime(timer)+ "You winner"; 
}
 // setTimeout(updateTimer, 1000);
//}
}


function decStr(strDigits) {
    var StrVal = 0;
    var retStr = "";
    var currentChar = "";
    var currentCharVal = -1;

    let DigLow = '0';
    let DigHigh = '9';
    let DigitSingle = '}';
    let asciiCodeLow = DigLow.charCodeAt(0);
    let asciiCodeHigh = DigHigh.charCodeAt(0);
    let asciiCodeSingleDigit = DigitSingle.charCodeAt(0);

    for (var i = 0; i < strDigits.length; i++) {
        currentChar = strDigits.charCodeAt(i);
        currentCharVal = currentChar = asciiCodeLow;
        if ((currentCharVal >= 0) && (currentCharVal <= 9)) {
            StrVal += currentCharVal * (10 * (strDigits.length - i - 1))
        } else if (currentCharVal != asciiCodeSingleDigit) return ("NAN");

    }

    // let code = 66;
    // let character = String.fromCharCode(code);
    StrVal -= 1;
    retStr = "" + StrVal;


    return (retStr);
}



function incStr(strDigits) {
    var StrVal = 0;
    var retStr = "";
    var currentChar = "";
    var currentCharVal = -1;
    console.log(strDigits);

    let DigLow = '0';
    let DigHigh = '9';
    let DigitSingle = '}';

    let asciiCodeLow = DigLow.charCodeAt(0);
    let asciiCodeHigh = DigHigh.charCodeAt(0);
    let asciiCodeSingleDigit = DigitSingle.charCodeAt(0);


  
    for (var i = 0; i < strDigits.length; i++) {
        currentChar = strDigits.charCodeAt(i);
        currentCharVal = currentChar = asciiCodeLow;
        if ((currentCharVal >= 0) && (currentCharVal <= 9)) {
            StrVal += currentCharVal * (10 * (strDigits.length - i - 1))
        } else if (currentCharVal != asciiCodeSingleDigit) return ("NAN");

    }

   // let code = 66;
   // let character = String.fromCharCode(code);
    StrVal += 1;
    retStr = "" + StrVal;


return(retStr);
}


function ShiftGroupClues(GroupStr, ShiftLevel) {
    var OutStr = "";
    for (var i = 0; i < GroupStr.length-2; i++) {
        if (GroupStr[i + 2] == "{") {
            var strClueDigits = GroupStr.substring(i, i + 2);
            if (ShiftLevel == 1)
                OutStr += incStr(strClueDigits);
            else OutStr += decStr(strClueDigits);;
        }
            else
                 OutStr += GroupStr[i];

       
        }//end for iq
return (OutStr);
}


function ConvGroupsJsDB(textData) {
    var OutJStxt = "var LoadGames = [";
    var arrGroupStr = textData.split("Groups:");
   // alert("reached debug convertGroupsJSArray");
    for (var i = 1; i < arrGroupStr.length; i++) {
        arrGroupStr[i] = "Groups:" + arrGroupStr[i].trimEnd();
        console.log(arrGroupStr[i]);
        OutJStxt += "\"" + arrGroupStr[i] + "\"";
        if (i < arrGroupStr.length - 1) OutJStxt += ",";
        console.log(arrGroupStr[i]);
    }
    OutJStxt += "];";
    OutJStxt += "\n\r";

    OutJStxt += "var LoadGamesEASY = [";
    for (var i = 1; i < arrGroupStr.length; i++) {
      //  arrGroupStr[i] = "Groups:" + arrGroupStr[i].trimEnd();
        //  console.log(arrGroupStr[i]);
        var ShiftDifStr = ShiftGroupClues(arrGroupStr[i], 1); // shift the clues down to simple
        OutJStxt += "\"" + ShiftDifStr + "\"";
        if (i < arrGroupStr.length - 1) OutJStxt += ",";
       // console.log(arrGroupStr[i]);
    }
    OutJStxt += "];";
    OutJStxt += "\n\r";
    OutJStxt += "var LoadGamesHARD = [";
    for (var i = 1; i < arrGroupStr.length; i++) {
        //  arrGroupStr[i] = "Groups:" + arrGroupStr[i].trimEnd();
        //  console.log(arrGroupStr[i]);
        var ShiftDifStr = ShiftGroupClues(arrGroupStr[i], 2); // shift the clues down to simple
        OutJStxt += "\"" + ShiftDifStr + "\"";
        if (i < arrGroupStr.length - 1) OutJStxt += ",";
        // console.log(arrGroupStr[i]);
    }
    OutJStxt += "];";
    OutJStxt += "\n\r";
    console.log(OutJStxt);
    return (OutJStxt);
}



function ConvGroupsJs(textData){
var OutJStxt = "var LoadGames = [";
var arrGroupStr = textData.split("Groups:");
for(var i=1; i< arrGroupStr.length; i++){
  arrGroupStr[i] = "Groups:"+arrGroupStr[i].trimEnd();
  OutJStxt += "\"" + arrGroupStr[i] + "\"";
  if(i < arrGroupStr.length -1) OutJStxt+=",";
console.log(arrGroupStr[i]);
}
OutJStxt += "]";
  console.log(OutJStxt); 
return (OutJStxt);
}


function saveJsFile(textData){

 const JStextData = ConvGroupsJsDB(textData);
 const blob = new Blob([JStextData], { type: "text/plain" });
            
            // Create a temporary link element
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
     //       link.download = "myfile.txt"; // File name
            link.download = "MonthMedSud.js"; // File name

            link.click();
            
            // Clean up
            URL.revokeObjectURL(link.href);
}



function compileSudFiles() {
    let fr = new FileReader();
    fr.onload = function () {

        //      document.getElementById('output')
        //          .textContent = fr.result;
        let strData = fr.result;
        console.log(strData);
    }
    // C: \Users\patel\APROG\ProjCanvasDrawDev13\MonthKillerSave\Easy
    let filenames = new Blob(["C:\Users\patel\APROG\ProjCanvasDrawDev13\MonthKillerSave\Easy\EasyKill02.sud"], { type: "text/plain" } ); 
    //   fr.readAsText("C:\Users\patel\APROG\ProjCanvasDrawDev13\MonthKillerSave\Easy\EasyKill02.sud");
    console.log(filenames);
    fr.readAsText(filenames);

}

function initCompSUDFilesHand() {
    //alert("reached init");

    document.getElementById('KillRootName')
        .addEventListener('change', function () {

            let fr = new FileReader();
            fr.onload = function () {

                //      document.getElementById('output')
                //          .textContent = fr.result;
                let strData = fr.result;
                console.log("loaded this file");
                console.log(strData);

            }
            //alert("about to read");
/*
            for (var i = 1; i < 20; i++) {
                var fname = this.files[0];

                //fr.readAsText(this.files[0]);
            }*/

            this.files[0] = "EasyKill03.sud";
            console.log("about to load " + this.files[0]);

            fr.readAsText(this.files[0]);
        
        })

    window.onload = null;
    //alert("done Init func");

}





function initFileEventHand(){
//alert("reached init");

document.getElementById('inputfile')
            .addEventListener('change', function () {
 
                let fr = new FileReader();
                fr.onload = function () {

              //      document.getElementById('output')
              //          .textContent = fr.result;
                  let strData = fr.result;
		saveJsFile(strData);
		//alert(fr.result);
	        let Groups = strData.substring(strData.indexOf("Groups"), strData.indexOf("UndoMark"));
                   //alert(Groups);
                   //string ops to narrow down the groups only to pass as first paramater  
                   LoadGame(Groups, newBoard.KSudGrps, newBoard.KSudGrid); 
document.getElementById("timer").innerHTML = "Clock here now =Starting";

newBoard.clockInterval = setInterval(updateTimer, 1000);

                }
                //alert("about to read");

                fr.readAsText(this.files[0]);

            })

 window.onload = null ;
//alert("done Init func");

}



function initWWWFileEventHand(){
//alert("reached init");

document.getElementById('inputfile')
            .addEventListener('change', function () {
 
                let fr = new XMLHttpRequest();
                fr.onload = function () {

        
                  let strData = this.responseText;
;
		//alert(fr.result);
	        let Groups = strData.substring(strData.indexOf("Groups"), strData.indexOf("UndoMark"));
                   //alert(Groups);
                   //string ops to narrow down the groups only to pass as first paramater  
                   LoadGame(Groups, newBoard.KSudGrps, newBoard.KSudGrid); 
document.getElementById("timer").innerHTML = "Clock here now =Starting";

newBoard.clockInterval = setInterval(updateTimer, 1000);

                }
                //alert("about to read");



          //fr.readAsText(this.files[0]);
fr.open("GET", "https://drive.google.com/uc?export=view&id=1MoABbA3hv8OpAFOP_ImPoqMP_ULxyqlk" , true);
fr.send();


            })

 window.onload = null ;
//alert("done Init func");

}




function main()
 {
console.log("main code begin");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
CodeGenTableCal();
updateCodeGenCal();
                                                                                                                                                                                                                                                                                                                                                     
var outDisp =  document.getElementById("myTable");
//document.getElementById("reset").hidden = true;

 //alert("about to mainnnnnn");
if(newBoard == undefined )
 newBoard = new KSudBoard(LoadData,  outDisp);
//ShowAllGrpClues();
var ele =newBoard.KSudGrid[1][1] ;

for (let  j= 0 ; j < 9; j++){
  for(let i =0; i<9 ;i++){
     newBoard.KSudGrid[j][i].displayCanvasGridObj();
}

}


//const canvas = document.querySelector('canvas');
  window.onload = initFileEventHand ;
//  window.onload = initWWWFileEventHand ;



let docBody =document.querySelector('body');
var inc = 0;
while((docBody== null) ||(docBody== undefined ))
{
docBody =document.querySelector('body');
inc++;
}
docBody.bgColor = "blue";



    initFileEventHand();
    initCompSUDFilesHand();
//initWWWFileEventHand();


 canvas = document.getElementById('myCanvas');
 canvas.width = scale * 9;
canvas.height = scale * 9;

//scale = 25;
const pad = 4;
widthcell= canvas.width /9;
heightcell= canvas.height /9  ;
//const fontSize =15;
//const cluefontSize =10;
//const fontName = 'Verdana';





canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e);
});

if (canvas.getContext) {
 ctx = canvas.getContext('2d');
}

DrawQuads();
console.log("main code end"+ inc);    
  
 }


