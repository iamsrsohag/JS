let quest = document.querySelector('#question');
let speaker = document.querySelector('#speak');
let ans = document.querySelector('#answer');

speaker.addEventListener('click',function(){
    var reply = " ";
    let query = quest.value;
    if(query.match("Who are you?")){
        reply = "I'm SrBot";
    }
    else if(query.match("How old are you?")){
        reply = "That's a secret :D ";
    }
    else if(query.match("Do you like JavaScript")){
        reply = "I Love JavaScript!!";
    }
    else if(query.match("What's in your brain?")){
        reply = "Hmm! That's a difficult question. I don't know how to respond to that.";
    }
    else{
        reply = `I'm Sorry. My data are limited. If you want to add more data, please contact with Sohag`;
        //reply = `对不起，找不到。`;
    }
    ans.innerHTML = reply;
    var msg = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(msg);
})
