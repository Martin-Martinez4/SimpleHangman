
//Event listerners for buttons

//Letter Button listener
document.querySelector('.letter-btn').addEventListener('mouseup', LetterBtn);
//word Button listener
document.querySelector('.word-btn').addEventListener('mouseup', WordBtn);

//LetterBtn function
function LetterBtn()
{

    let letterGuess = document.querySelector('.letter-input').value;
    /* console.log(letterGuess); */

    if(obj.propWord.toLowerCase().indexOf(letterGuess) !== -1)
    {
        let compWord = obj.propWord.toLowerCase().match(/[a-zA-Z]/ig);
        console.log(compWord.length);
        console.log(obj.propWord.toLowerCase().indexOf(letterGuess));

        let positionArray = [];

        for(k = 0; k < compWord.length; k++)
        {
            if(compWord[k] === letterGuess)
            {
                //Gets indexes for the letter Guessed
                positionArray.push(k);
                //console.log(positionArray);

                console.log(positionArray);

                for(j = 0; j < positionArray.length; j++)
                {
                    let letterNode = document.createTextNode('A')
                    let replaceItem = document.querySelector('.letter-place').childNodes[positionArray[j]];
                    console.log(positionArray[j]);
                    console.log(replaceItem);
                    console.log(replaceItem.childNodes[0])

                    replaceItem.replaceChild(letterNode, replaceItem.childNodes[0]);
                }
            }
        }

            /* console.log(positionArray);
            for(j = 0; j < positionArray.length; j++)
            {
                let letterNode = document.createTextNode('A')
                let replaceItem = document.querySelector('.letter-place').childNodes[positionArray[k]];
                console.log(positionArray[k]);
                console.log(replaceItem);
                console.log(replaceItem.childNodes[0])

                replaceItem.replaceChild(letterNode, replaceItem.childNodes[0]);
            } */
        

/*         let sliceWord = compWord.slice((obj.propWord.toLowerCase().indexOf(letterGuess)) + 1, compWord.length);
        console.log(sliceWord +'slice'); */

        /* while(obj.propWord.toLowerCase().indexOf(letterGuess) !== -1)
        {
            //Get index, insert into nth child of .letter-place, slice off index

        } */
        console.log(obj.propWord.toLowerCase().indexOf(letterGuess));
        console.log(letterGuess);
        console.log(obj.propWord);
    }
    else
    {
        console.log('Letter Not Found');
    }
}

function WordBtn()
{
    let wordGuess = document.querySelector('.word-input').value;
    /* console.log(wordGuess); */


    if(obj.propWord.toLowerCase() === wordGuess.toLowerCase())
    {
        console.log(`${obj.propWord} was the word`);
        //Gameover win

    }
    else
    {
        console.log(`${obj.propWord} is not the word`);

    }
}


 //On Load

//Private word
let obj = (function()
{
    let val = 'ThisWordtdtdtdtd';
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

console.log(document.querySelector('.letter-place').childNodes[0]);

/* for( k = 0; k < wordLength; k++)
{
let letterNode = document.createTextNode('A')
let replaceItem = document.querySelector('.letter-place').childNodes[k];

console.log(replaceItem);

replaceItem.replaceChild(letterNode, replaceItem.childNodes[0]);
 
}  */


