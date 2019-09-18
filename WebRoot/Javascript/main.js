
//Event listerners for buttons

//Letter Button listener
document.querySelector('.letter-btn').addEventListener('mouseup', LetterBtn);
//word Button listener
document.querySelector('.word-btn').addEventListener('mouseup', WordBtn);

//LetterBtn function
letterArray = [];

function LetterBtn()
{
    setTimeout(function()
    {
            document.querySelector('letter-btn').setAttribute(disabled, "true");
    }, 1000);

    let letterGuess = document.querySelector('.letter-input').value.toLowerCase();

    console.log(letterGuess);

    //Adds 'used' class to the letters that are used
    for(n = 1; n < 14; n++)
    {
        if(letterGuess.toUpperCase() === document.querySelector('.letA').childNodes[n].childNodes[0].data)
        {
            console.log(document.querySelector('.letA').childNodes[n].childNodes[0].data);

            document.querySelector('.letA').childNodes[n].classList.add('used');
        }
        else if(letterGuess.toUpperCase() === document.querySelector('.letB').childNodes[n].childNodes[0].data)
        {
            console.log(document.querySelector('.letB').childNodes[n].childNodes[0].data);

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

        //console.log('guesses left', guesses);
        //console.log(document.querySelector('.counter').childNodes[1].innerText = `Guesses left: ${guesses}`);

        document.querySelector('.counter').childNodes[1].innerText = `Guesses left: ${guesses}`;

        //then check if letter array includes all the letters for the word in the correct gues section
        letterArray.push(letterGuess);

        document.querySelector('.letter-input').value = '';

        if(guesses <= 0)
        {
            let HTMLLose = document.createElement("div");
            HTMLLose.innerHTML = `<h4>You <span style="color:red">Lose</span>, word was: ${obj.propWord}</h4>`;
            document.querySelector('.counter').childNodes[1].appendChild(HTMLLose);
        }
    }
}

function WordBtn()
{

    setTimeout(function()
    {
            document.querySelector('word-btn').setAttribute(disabled, "true");

    }, 1000);


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
        }
    }
}


//On Load

//Private word
let obj = (function()
{
    let val = 'Sonia';
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

/* if(guesses === 0)
{
    let HTMLLose = document.createElement("div");
    HTMLLose.innerHTML = `<h2>You <span style="color:red">Lose</span>${obj.propWord}</h2>`;
    document.querySelector('.counter').childNodes[1].appendChild(HTMLLose);
} */

console.log(document.querySelector('.counter').childNodes[1].innerText = `Guesses left: ${guesses}`);
console.log(document.querySelector('.letter-place').childNodes[0]);



