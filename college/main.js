let options = ["math","innovation","design","construction","operation","maintance","devices","machines",
"production","distribution","events","information","techniques","reports","media","freedom of speech",
"science","diagnosis","treatment","prevention","health","illness","genetics", "physical examination",
"computers","systems","software","designs","development","application","info-technology","data"]

let engineering = options.slice(0,8) ;

let journalism = options.slice(8,16);
let medical = options.slice(16,24);
let computer = options.slice(24,);


//shuffle 
var shuffle = function (array) {

	var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; 

		// And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
	}

	return array;
}

//unit object
var unit = {
    clicked: {
        selected0: false,
        selected1: false,
        selected2: false,
        selected3: false,
        selected4: false,
        selected5: false,
        selected6: false,
        selected7: false,
        selected8: false,
        selected9: false,
        selected10: false,
        selected11: false,
        selected12: false,
        selected13: false,
        selected14: false,
        selected15: false,
        selected16: false,
        selected17: false,
        selected18: false,
        selected19: false,
        selected20: false,
        selected21: false,
        selected22: false,
        selected23: false,
        selected24: false,
        selected25: false,
        selected26: false,
        selected27: false,
        selected28: false,
        selected29: false,
        selected30: false,
        selected31: false,
        selected32: false
    },
    iclicked: {
        selected0: 0,
        selected1: 0,
        selected2: 0,
        selected3: 0,
        selected4: 0,
        selected5: 0,
        selected6: 0,
        selected7: 0,
        selected8: 0,
        selected9: 0,
        selected10: 0,
        selected11: 0,
        selected12: 0,
        selected13: 0,
        selected14: 0,
        selected15: 0,
        selected16: 0,
        selected17: 0,
        selected18: 0,
        selected19: 0,
        selected20: 0,
        selected21: 0,
        selected22: 0,
        selected23: 0,
        selected24: 0,
        selected25: 0,
        selected26: 0,
        selected27: 0,
        selected28: 0,
        selected29: 0,
        selected30: 0,
        selected31: 0,
        selected32: 0
    },
    engineeringClicked: false,
    journalismClicked: false,
    medicalClicked: false,
    computerClicked: false,

    ofClick: 0,
    getResultsIndex: 0,

    engineering: 0,
    journalism: 0,
    medical: 0,
    computer: 0,
    
    engineeringAdd: function(){this.engineering++;},
    engineeringSub: function(){this.engineering--;},
    journalismAdd: function(){this.journalism++},
    journalismSub: function(){this.journalism--},
    medicalAdd: function(){this.medical++},
    medicalSub: function(){this.medical--},
    computerAdd: function(){this.computer++},
    computerSub: function(){this.computer--}
}

//Events
var startReload = 0;
var startEvent = document.getElementById("startButton");
var refresh = document.getElementById("refresh");
var buttonElements;
var buttonNums = [];
var nums;

    refresh.addEventListener("click",function(){location.reload(true)})
    startEvent.addEventListener("click",function(){displayOptions()});
    document.getElementById("results").addEventListener("click",function(){getResults()}); 

//display the options to html
function displayOptions(){
    if(startReload == 0){
        startReload++;
        if(unit.ofClick == 0){
            shuffle(options);
            var elem1;
    
            var i = 0;
            while(i < options.length){
                    elem1 = document.createElement("input");
                    elem1.setAttribute("type","button");
                    elem1.setAttribute("class","button");
                    elem1.setAttribute("id","button"+i)
                    elem1.setAttribute("value",options[i]);
                    document.getElementById("container").appendChild(elem1);;
        
                i++;
            }
            unit.ofClick++;
            
        }
    buttonElements = document.getElementsByClassName("button")
        

    }else if(startReload != 0){
        startEvent.addEventListener("click",function(){location.reload()});
    }
    for(var i = 0;i < buttonElements.length;i++){
        buttonElements[i].addEventListener("click",function(){selection(this)});
        buttonNums.push(buttonElements[i].value);
    }
    
}


function getResults(){
    if(unit.getResultsIndex == 0 && (unit.engineering != engineering.length || unit.journalism != journalism.length || unit.medical != medical.length || unit.computer != computer.length)){

        if(unit.ofClick != 0 && (unit.engineering != 0 || unit.journalism != 0 || unit.medical != 0 || unit.computer != 0)){
            elem1 = document.createElement("div");
            elem1.setAttribute("class","results_header");
            elem = document.getElementById("container");
            elem.appendChild(elem1);

            var firstOption;

            var resultsArray = [unit.engineering,unit.journalism,unit.medical,unit.computer];
            var sorted = resultsArray.sort(function(a,b){return b - a});

            if(unit.engineering == sorted[0]){
                firstOption = "an engineering field";
            }else if(unit.journalism == sorted[0]){
                firstOption = "journalism";
            }else if(unit.medical == sorted[0]){
                firstOption = " a medical field";
            }else{
                firstOption = " a computer related field";
            }

        elem1.innerHTML = "<b>Results include:</b>"+"<br>"+ "Your first option is " + firstOption;
        unit.getResultsIndex++;
        }
        
    }
}

function selection(elem){

    var value = elem.value;
    nums = (buttonNums.indexOf(value));
    var Isclicked;

        if(unit.clicked["selected"+ nums] == false){
            unit.clicked["selected"+nums] = true;
            //
    
            optionsItem = document.getElementById("button"+nums);
            optionsItem.setAttribute("class","clicked");
            optionsItem = optionsItem.value;
    
            if(unit.iclicked["selected"+ nums] == 0){
                unit.iclicked["selected"+ nums]++;
    
                if(engineering.includes(optionsItem)){
                   unit.engineeringAdd();
                }else if(journalism.includes(optionsItem)){
                    unit.journalismAdd();
                 }else if(medical.includes(optionsItem)){
                    unit.medicalAdd();
                 }else if(computer.includes(optionsItem)){
                    unit.computerAdd();
                 }
    
            }
        
    
        }else if(unit.clicked["selected"+ nums] == true){
            //if the options were already selected decrement one;
            Isclicked = false;
    
            optionsItem = document.getElementById("button"+ nums);
            optionsItem.setAttribute("class","unclicked")
            optionsItem = optionsItem.value;
    
            if(unit.iclicked["selected"+ nums] != 0){
                unit.iclicked["selected"+ nums]--;
    
                if(engineering.includes(optionsItem)){
                    unit.engineeringSub();
                }else if(journalism.includes(optionsItem)){
                    unit.journalismSub();
                 }else if(medical.includes(optionsItem)){
                    unit.medicalSub();
                 }else if(computer.includes(optionsItem)){
                    unit.computerSub();
                 }
            }  
        } 
    
}
