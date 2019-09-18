

//Event listerners for buttons

//Letter Button listener
document.querySelector('.letter-btn').addEventListener('mouseup', LetterBtn);
//word Button listener
document.querySelector('.word-btn').addEventListener('mouseup', WordBtn);

//LetterBtn function
letterArray = [];

function LetterBtn(e)
{
    if(e.target.className === "btn letter-btn play-again")
    {
        window.location.reload();
    }

    let letterGuess = document.querySelector('.letter-input').value.toLowerCase();

    //Adds 'used' class to the letters that are used
    for(n = 1; n < 14; n++)
    {
        if(letterGuess.toUpperCase() === document.querySelector('.letA').childNodes[n].childNodes[0].data)
        {
            document.querySelector('.letA').childNodes[n].classList.add('used');
        }
        else if(letterGuess.toUpperCase() === document.querySelector('.letB').childNodes[n].childNodes[0].data)
        {
            document.querySelector('.letB').childNodes[n].classList.add('used');
        }
    }

    if(obj.propWord.toLowerCase().indexOf(letterGuess) !== -1)
    {
        //Gets the letters of the word
        let compWord = obj.propWord.toLowerCase().match(/[a-zA-Z]/ig);

        let positionArray = []; ;
        for(k = 0; k < compWord.length; k++)
        {
            if(compWord[k] === letterGuess)
            {
                //Gets indexes for the letter Guessed
                positionArray.push(k);
                letterArray.push(letterGuess);

                document.querySelector('.letter-input').value = '';

                //Win condition checker: All letters checked
                for(j = 0; j < positionArray.length; j++)
                {
                    let letterNode = document.createTextNode(`${letterGuess}`)
                    let replaceItem = document.querySelector('.letter-place').childNodes[positionArray[j]];


                    replaceItem.replaceChild(letterNode, replaceItem.childNodes[0]);

                    let counter = 0;

                    for(m = 0; m < compWord.length; m++)
                    {

                        if(letterArray.includes(compWord[m]))
                        {
                            //Keeps track of how many letters match
                            counter ++;

                            if(counter === compWord.length)
                            {
                                //If the matches === the length of the word the palyer wins
                                console.log('win');
                                console.log(document.querySelector('.counter').childNodes[1].childNodes[0]);
                               
                                //Inserts 'you win to ui
                                let HTMLWin = document.createElement("div");
                                HTMLWin.innerHTML = `<h4>You <span style="color:green">Win</span></h4>`;
                                document.querySelector('.counter').childNodes[1].appendChild(HTMLWin);

                                gameOver('letter');

                            }
                        }
                    }
                }

            }
        }
    }
    else
    {
        console.log('Letter Not Found');
        guesses --;

        document.querySelector('.counter').childNodes[1].innerText = `Guesses left: ${guesses}`;

        //then check if letter array includes all the letters for the word in the correct gues section
        letterArray.push(letterGuess);

        document.querySelector('.letter-input').value = '';

        if(guesses <= 0)
        {
            let HTMLLose = document.createElement("div");
            HTMLLose.innerHTML = `<h4>You <span style="color:red">Lose</span>, word was: ${obj.propWord}</h4>`;
            document.querySelector('.counter').childNodes[1].appendChild(HTMLLose);

            gameOver('letter');
        }
    }

}

function WordBtn(e)
{

    if(e.target.className === "btn word-btn play-again")
    {
        window.location.reload();
    }

    let wordGuess = document.querySelector('.word-input').value;
    /* console.log(wordGuess); */


    if(obj.propWord.toLowerCase() === wordGuess.toLowerCase())
    {
        console.log(`${obj.propWord} was the word`);
        //Gameover win

        document.querySelector('.word-input').value = '';

        //Inserts 'you win to ui
        let HTMLWin = document.createElement("div");
        HTMLWin.innerHTML = `<h4>You <span style="color:green">Win</span></h4>`;
        document.querySelector('.counter').childNodes[1].appendChild(HTMLWin);

        gameOver('word');

    }
    else if(!wordGuess.toLowerCase())
    {
        console.log('empty');
    }
    else
    {
        console.log(`${obj.propWord} is not the word`);
        guesses --;
        document.querySelector('.counter').childNodes[1].innerText = `Guesses left: ${guesses}`;

        document.querySelector('.word-input').value = '';

        if(guesses <= 0)
        {
            let HTMLLose = document.createElement("div");
            HTMLLose.innerHTML = `<h4>You <span style="color:red">Lose</span>, word was: ${obj.propWord}</h4>`;
            document.querySelector('.counter').childNodes[1].appendChild(HTMLLose);

            gameOver('word');
        }
    }
}


//On Load

//List of words
let words = 
[
    "ability",
    "able",
    "about",
    "above",
    "accept",
    "according",
    "account",
    "across",
    "act",
    "action",
    "activity",
    "actually",
    "add",
    "address",
    "administration",
    "admit",
    "adult",
    "affect",
    "after",
    "again",
    "against",
    "age",
    "agency",
    "agent",
    "agree",
    "agreement",
    "ahead",
    "allow",
    "almost",
    "alone",
    "along",
    "already",
    "always",
    "American",
    "amount",
    "analysis",
    "animal",
    "answer",
    "anyone",
    "anything",
    "appear",
    "apply",
    "approach",
    "area",
    "argue",
    "arm",
    "around",
    "arrive",
    "art",
    "article",
    "artist",
    "assume",
    "attack",
    "attention",
    "attorney",
    "audience",
    "author",
    "authority",
    "available",
    "avoid",
    "away",
    "baby",
    "back",
    "bag",
    "ball",
    "bank",
    "bar",
    "base",
    "beat",
    "beautiful",
    "bed",
    "behavior",
    "behind",
    "believe",
    "benefit",
    "best",
    "better",
    "between",
    "business",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chair",
    "challenge",
    "chance",
    "change",
    "character",
    "charge",
    "check",
    "child",
    "choice",
    "choose",
    "church",
    "citizen",
    "city",
    "civil",
    "collection",
    "college",
    "color",
    "come",
    "commercial",
    "common",
    "community",
    "company",
    "compare",
    "computer",
    "concern",
    "condition",
    "conference",
    "consider",
    "consumer",
    "contain",
    "continue",
    "control",
    "data",
    "daughter",
    "day",
    "dead",
    "deal",
    "death",
    "debate",
    "decade",
    "decide",
    "decision",
    "deep",
    "defense",
    "degree",
    "describe",
    "design",
    "despite",
    "detail",
    "determine",
    "develop",
    "development",
    "die",
    "difference",
    "different",
    "difficult",
    "early",
    "east",
    "easy",
    "eat",
    "economic",
    "economy",
    "edge",
    "education",
    "year"
]

//Generates a rnadom number
let randNum = Math.floor((Math.random()*words.length) + 0);

//Private word
let obj = (function()
{
    let val = words[randNum];
    let _propWord = val;

    return{
        get propWord()
        {
            return  _propWord;
        },

        set propWord(_val)
        {
            _propWord = _val;
        }
    }
})();


val = '0';

toHTML = '';
toHTML2 = '';

//Adds letter Blanks
let wordLength = obj.propWord.length;
for(i = 0; i < wordLength; i++)
{
    toHTML += '<li class="letterblank">_</li>';
}

document.querySelector('.blank-place').innerHTML= toHTML;


for(j = 0; j < wordLength; j++)
{
    toHTML2 += '<li class="letter">&nbsp</li>';
}

document.querySelector('.letter-place').innerHTML= toHTML2;

let guesses = 3;


function gameOver(kindOfButton)
{
    
    document.querySelector(`.letter-input`).disabled = true;
    document.querySelector('.word-input').disabled = true;



    //Play Again
    document.querySelector(`.` + kindOfButton + `-btn`).innerText = 'Play Again';
    document.querySelector(`.` + kindOfButton + `-btn`).className +=' play-again';

}
