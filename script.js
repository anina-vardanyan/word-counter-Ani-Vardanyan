const textvalue= document.querySelector(".count__textarea");
const word=document.querySelector(".word-count");
const character=document.querySelector(".character-count");
const sentences =document.querySelector(".sentences-count");
const count=document.querySelector(".count");

// buttons for changing the background
const inputcolor= document.querySelector("#color");
const btncolor=document.querySelector(".color");

// for changing the background:
function color(){
  document.body.style.backgroundColor= inputcolor.value;
}
btncolor.addEventListener("click", color)
//================================================================


function myFunction(){
  word.innerHTML=countWords()
  character.innerHTML=countChars()
  sentences.innerHTML=countSentences()
}

count.addEventListener("click", myFunction)

   const countWords = function() {
     const value = textvalue.value.match(/\b\w+\b/g);
      if(!value)
      return 0
      return value.length
             
   }


    const countChars = function () {
       const chars= textvalue.value.match(/[A-zА-я]/g);
           if(chars) 
             return chars.length
             return 0

    }

    const countSentences= function(){
           const sentences= textvalue.value.split(/[.!?]/)
           const filterSentences= sentences.filter(sentence=> sentence.trim() !=='')
               if(!filterSentences) 
                  return 0
                  return filterSentences.length

    }
