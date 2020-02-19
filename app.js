var game = {

    answerC: 0,
    answerU: 0,
    unAnswered: 0,

    gameQuestion: [
        {
            question: "What was the first full length CGI movie?",
            answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
            correctAnswer: "Toy Story"
          }, 
          {
            question: "Which of these is NOT a name of one of the Spice Girls?",
            answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
            correctAnswer: "Fred Spice"
          }, 
          {
            question: "Which NBA team won the most titles in the 90s?",
            answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
            correctAnswer: "Chicago Bulls"
          }, 
          {
            question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
            answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
            correctAnswer: "Nirvana"
          }, 
          {
            question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
            answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
            correctAnswer: "The Lion King"
          }, 
          {
            question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
            answers: ["Dice", "Mirror", "Fresh", "Cab"],
            correctAnswer: "Fresh"
          }, 
          {
            question: "What was Doug's best friend's name?",
            answers: ["Skeeter", "Mark", "Zach", "Cody"],
            correctAnswer: "Skeeter"
          }, 
          {
            question: "What was the name of the principal at Bayside High in Saved By The Bell?",
            answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
            correctAnswer: "Mr.Belding"
          }
    ],
};


$('#start').on('click', function(){
    var myVar = setInterval(myTimer,1000);
    document.getElementById('sub-wrapper').innerHTML = '';

    let secondDiv = document.createElement('h2');
    secondDiv.append(document.createTextNode('You have ' + second + ' seconds'));
    secondDiv.style = 'font-size: 40px';
    $('#second').html(secondDiv);

    var button = document.createElement('button');

    button.classList.add('.button');

    button.append(document.createTextNode('End Game'));

    for(let i = 0;i < game.gameQuestion.length;i++){

        let questionDiv = document.createElement('h2');

        questionDiv.append(document.createTextNode(game.gameQuestion[i].question));

        questionDiv.style = 'margin-top: 10px;'

        $('#sub-wrapper').append(questionDiv);

        for(let j = 0;j < game.gameQuestion[i].answers.length; j++){

            let label = document.createElement('label');
            label.append(document.createTextNode(game.gameQuestion[i].answers[j]));
            let input = document.createElement('input');
            input.dataset['answer'] = game.gameQuestion[i].answers[j];
            input.setAttribute('type','radio');
            input.style = 'margin-left: 10px';
            input.setAttribute('name','name - '+i);
            input.classList.add('all_input');
            $('#sub-wrapper').append(input);
            $('#sub-wrapper').append(label);

        }
    }
    $('#sub-wrapper').append(button);

    $(button).on('click', function(){
        $('#second').html('');
        showResult();
        function stopTime(){
            clearInterval(myVar);
        };
        stopTime();
    });

});



///// This is function to display question before or after end of time or when you click end button ////
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
function showResult(){
    var input_list = $('.all_input:checked');
        for(let i = 0;i < input_list.length;i ++){
            if(input_list[i].dataset['answer'] === game.gameQuestion[i].correctAnswer){
                game.answerC ++;
            }else{
                game.answerU ++;
            }
    };
        document.getElementById('sub-wrapper').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        var title = document.createElement('h2');
        title.append(document.createTextNode('ALL DONE!!!'));

        var correctDiv = document.createElement('div');
        var corrAnswer = document.createElement('h3')
        corrAnswer.append(document.createTextNode('Correct answer: ' + game.answerC));
        correctDiv.append(corrAnswer);

        var uncorrectDiv = document.createElement('div');
        var uncorrAnswer = document.createElement('h3');
        uncorrAnswer.append(document.createTextNode('Incorrect answer: ' + game.answerU));
        uncorrectDiv.append(uncorrAnswer);

        $('#sub-wrapper').append(title);
        $('#sub-wrapper').append(correctDiv);
        $('#sub-wrapper').append(uncorrectDiv);
};

////////////////////////////////////////////////////////////
/////////////// this is function is for display the seconds////////

var second = 120;

function myTimer(){
    second --;
    if(second < 0){
        showResult();
        return false;
    };
    displaySecond();
}

function displaySecond(){
    let secondDiv = document.createElement('h2');
    secondDiv.append(document.createTextNode('You have ' + second + ' seconds'));
    secondDiv.style = 'font-size: 40px';
    $('#second').html(secondDiv);
};



