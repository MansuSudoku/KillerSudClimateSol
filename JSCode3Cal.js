
var Months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var StartDays26 = [5,1,1,4,6,2,3,7,3,5,1,3];
var DaysInMonth26 = [31,28,31,30,31,30,31,31,30,31,30,31];
var currentMonth = 9;
var daysOfWeek = ["Su","Mo","Tu","We","Th","Fr","Sa"];
var CalInitialised = false;
var CurrentDay = 0;
var LevelNames = ["null", " Easy", " Medium", " Hard"];



// example simple event handler for calander td selected opperation
function tdClickHandler(StrData, ev){
var EvTd = document.getElementById(StrData);
if(EvTd.innerHTML !="")
alert ("you picked me says day "+EvTd.innerHTML);

//if(StrData!="")
//alert ("you picked me says "+ev.currentTarget.innerHTML);



}

function RadioSelect(StrData, ev) {

LoadGame(LoadGames[CurrentDay-1], newBoard.KSudGrps, newBoard.KSudGrid); 

newBoard.toggleLevelSel();
HideCal();
}

function tdClickCalLoad(StrData, ev){
var EvTd = document.getElementById(StrData);
if(EvTd.innerHTML !=""){

//alert ("you picked me says day "+EvTd.innerHTML);
var LoadDay = parseInt(EvTd.innerHTML);
CurrentDay = LoadDay;


//toggleLevelSel();

var selev = document.getElementById("tableSelLev");
if(selev.style.display == "none")
 selev.style.display = "inline";
 else selev.style.display = "none";
//LoadGame(LoadGames[CurrentDay-1], newBoard.KSudGrps, newBoard.KSudGrid); 

//CurrentDay++;
}

}

function CodeGenTableCal() {
  if (CalInitialised == false){
  var GenCal = document.getElementById("CalanderGen");
 //var newThead = document.createElement("thead");
 //var newTBody = document.createElement("tbody");

//var newRow = document.createElement("tr");
//  GenCal.appendChild(newRow);


  var newRow = document.createElement("tr");
  GenCal.appendChild(newRow);
  for(j=0; j<7; j++){
   var newHead = document.createElement("td");
    newHead.innerHTML = daysOfWeek[j];
    newRow.appendChild(newHead);
  }
  for(i=0; i < 6; i++){
      var newRow = document.createElement("tr");
      GenCal.appendChild(newRow);

     for(j= 0; j < 7; j++){
       var newTd = document.createElement("td");
       
       if((i*7)+j+1 <32){
       newTd.innerHTML = (i*7)+j+1; 
	newTd.style.border = "0";
}
	else  {
	newTd.innerHTML ="";
	newTd.style.border = "none";

	}
newTd.id="calTD"+j+i;
//newTd.addEventListener('click', tdClickHandler.bind(this ,newTd.id ));
newTd.addEventListener('click', tdClickCalLoad.bind(this ,newTd.id ));


newTd.textAlign="center";
 //      GenCal.rows[i+1].appendChild(newTd);
      newRow.appendChild(newTd);

     }
  }
   CalInitialised = true;
  }

}


// function to generate the nth month calander of 2026
function updateTableCal() { 
currentMonth++;
	if(currentMonth > 12) currentMonth = 1; 
	var myCal= document.getElementById("CalanderGen"); 
        var OutMonth = document.getElementById("MonthOut"); // test output for current month features
        var startDay = StartDays26[currentMonth -1];
        var numDaysInThisMonth = DaysInMonth26[currentMonth -1];
         
//        OutMonth.innerHTML = Months[currentMonth-1] + " Start Day = " + myCal.rows[0].cells[startDay-1].innerHTML + " Num days in this month = "+ numDaysInThisMonth ;
        //generate the correct days for each calander td entry and attach event handler valid tds
	for(i=0; i < 6; i++)
         for(j=0; j < 7; j++){
           var DayOfMonth = ((i)*7)+j - (startDay-1);
		DayOfMonth++ ;
		myCal.rows[i+1].cells[j].onClick = null; 
		//myCal.rows[i+1].cells[j].removeEventListener('click', tdClickHandler.bind(this ," "));

                if((DayOfMonth>0) && (DayOfMonth<= numDaysInThisMonth)){
                	myCal.rows[i+1].cells[j].innerHTML = DayOfMonth; 
  	  //     myCal.rows[i+1].cells[j].addEventListener('click', tdClickHandler.bind(this , myCal.rows[i+1].cells[j].innerHTML ));
        //        console.log(myCal.rows[i+1].cells[j].innerHTML + myCal.rows[i+1].cells[j].onClick);

		 }else
		{       myCal.rows[i+1].cells[j].innerHTML = "";


			}
 
 
	    } // end for j
	
     } // end fn updateTableCal

function updatecurrentLoadDate() {
    var myCalStatus = document.getElementById("LoadName");
    myCalStatus.innerHTML = "Loaded game is= " + Months[currentMonth] + " " + CurrentDay + LevelNames[LoadLevel] ;
    return;
}


// function to show the current month calander of 2026
function ShowCal() { 
	if(currentMonth > 12) currentMonth = 1; 
	var myCal= document.getElementById("CalanderGen"); 
        myCal.display = "block";
	//return ;
    


    //    var OutMonth = document.getElementById("MonthOut"); // test output for current month features
        var startDay = StartDays26[currentMonth -1];
        var numDaysInThisMonth = DaysInMonth26[currentMonth -1];
         
 for(j=0; j<7; j++){
    myCal.rows[0].cells[j].innerHTML = daysOfWeek[j];
    myCal.rows[0].cells[j].style.border = "1";

  }


     //   OutMonth.innerHTML = Months[currentMonth-1] + " Start Day = " + myCal.rows[0].cells[startDay-1].innerHTML + " Num days in this month = "+ numDaysInThisMonth ;
        //generate the correct days for each calander td entry and attach event handler valid tds
	for(i=0; i < 6; i++)
         for(j=0; j < 7; j++){
           var DayOfMonth = ((i)*7)+j - (startDay-1);
		DayOfMonth++ ;
		myCal.rows[i+1].cells[j].onClick = null; 
		//myCal.rows[i+1].cells[j].removeEventListener('click me', tdClickHandler.bind(this ," "));

                if((DayOfMonth>0) && (DayOfMonth<= numDaysInThisMonth)){
                	myCal.rows[i+1].cells[j].innerHTML = DayOfMonth; 
		        myCal.rows[i+1].cells[j].style.border = "1";

  	  //     myCal.rows[i+1].cells[j].addEventListener('click', tdClickHandler.bind(this , myCal.rows[i+1].cells[j].innerHTML ));
                console.log(myCal.rows[i+1].cells[j].innerHTML + myCal.rows[i+1].cells[j].onClick);

		 }else
		{       myCal.rows[i+1].cells[j].innerHTML = "";


			}
 
 
	    } // end for j
	
     } // end fn updateTableCal





// function to generate the nth month calander of 2026
function HideCal() { 

	var myCal= document.getElementById("CalanderGen");  
	//myCal.display = "none";
//	return ;
    

    	for(i=0; i < 6; i++){
         for(j=0; j < 7; j++){
         //  var DayOfMonth = ((i)*7)+j - (startDay-1);
//console.log(myCal.rows);

		//console.log("i="+i +"  j="+j);
		
           	myCal.rows[i].cells[j].innerHTML  = "";  
 		myCal.rows[i].cells[j].style.border = "none";


	    } // end for j
} // end for i
	
     } // end fn updateCodeGenCal



