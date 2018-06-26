//skillcrush bonus election map code


var createCandidate = function (name, partyColor) {


  var politician = {};
  politician.name = name;
  politician.results = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor
  politician.tallyVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < politician.results.length; i++) {
      this.totalVotes = this.totalVotes + politician.results[i];
    };

  };

  return politician;

};


var saundra = createCandidate("Saundra S.", [132, 17, 11])
var arshia = createCandidate("Arshia M.", [245, 141, 136])

saundra.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
arshia.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

saundra.results[9] = 1;
saundra.results[4] = 17;
saundra.results[43] = 11;

arshia.results[9] = 28;
arshia.results[4] = 38;
arshia.results[43] = 27;


var setStateResults = function(state) {
theStates[state].winner = null;
  if (arshia.results[state] < saundra.results[state]) {
    theStates[state].winner = arshia;
    }
  else if (arshia.results[state] > saundra.results[state]) {
    theStates[state].winner = saundra;
    }

  console.log("And the winner is " + theStates[state].winner + "of that " + state +"!!!");



var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11,32,57];
    }

//interactive state table
var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var winnerName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = theStates[state].nameAbbrev;
candidate1Name.innerText = saundra.name;
candidate1Results.innerText = arshia.results[state];
candidate2Name.innerText = arshia.name;
candidate2Results.innerText = saundra.results[state];


if (stateWinner === null) {
  winnerName.innerText = "DRAW";
} else {
winnerName.innerText = theStates[state].winner.name;
}

};



arshia.tallyVotes();
console.log(arshia.totalVotes);
console.log(arshia);

saundra.tallyVotes();
console.log(saundra.totalVotes);
console.log(saundra);

var winner = "";
var countryTotal = function() {


if (arshia.totalVotes > saundra.totalVotes) {winner = arshia.name;}
else if (arshia.totalVotes < saundra.totalVotes) {winner = saundra.name}
else winner = "a tie";
console.log("And the winner is " + winner + "!!!");
};
countryTotal();


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = saundra.name;
row.children[1].innerText = saundra.totalVotes;
row.children[2].innerText = arshia.name;
row.children[3].innerText = arshia.totalVotes;
row.children[5].innerText = winner;
