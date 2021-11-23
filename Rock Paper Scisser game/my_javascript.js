function rpsGame(yourChoice) {
    let humanChoice = yourChoice.id;
    let botChoice = numToChoice(intRandom());
    console.log('human:' + humanChoice + ' bot:' + botChoice);
    result = deciedWinner(humanChoice, botChoice);
    console.log(result);
    let rpsMassege = finalMassege(result);
    console.log(rpsMassege);
    rpsFrontEnd(yourChoice.id, botChoice, rpsMassege);
    btnLast();

}

function intRandom() {
    return Math.floor(Math.random() * 3);

}

function numToChoice(number) {
    return ['rock', 'paper', 'scisser'][number];
}

function deciedWinner(humanChoice, botChoice) {
    let rpsGameData = {
        'rock': { 'scisser': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scisser': 0 },
        'scisser': { 'paper': 1, 'scisser': 0.5, 'rock': 0 }
    };




    let yourScore = rpsGameData[humanChoice][botChoice];
    let botScore = rpsGameData[botChoice][humanChoice];
    return [yourScore, botScore]
}


function finalMassege([yourScore, botScore]) {
    switch (yourScore) {
        case 0:
            return { 'massege': 'You lost!', 'color': '#db0000' };
            break;
        case 0.5:
            return { 'massege': 'You tie!', 'color': '#e1ff21' };
            break;
        case 1:
            return { 'massege': 'You Win!', 'color': '#34ed18' }

    }


}


function rpsFrontEnd(humanImgChoice, botImgChoice, finalMassege) {
    let imgDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scisser': document.getElementById('scisser').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scisser').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let massegeDiv = document.createElement('div');

    humanDiv.setAttribute('class', 'human-div');
    massegeDiv.setAttribute('class', 'massege-div')
    botDiv.setAttribute('class', 'bot-div')

    humanDiv.innerHTML = "<h1>HUMAN</h1> <img src ='" + imgDataBase[humanImgChoice] + "' height=200px width=200px  >";
    massegeDiv.innerHTML = "<h1  style= 'color:" + finalMassege['color'] + ";font-size:60px;padding:30px;margin:10px' >" + finalMassege['massege'] + "<h1>  ";
    botDiv.innerHTML = " <h1>COMPUTER</h1> <img src ='" + imgDataBase[botImgChoice] + "' height=200px width=200px  >";

    console.log(finalMassege['massege'])
    document.getElementById('flex-container-id').appendChild(humanDiv);
    document.getElementById('flex-container-id').appendChild(massegeDiv);
    document.getElementById('flex-container-id').appendChild(botDiv);


}

function btnLast() {

    let btnDiv = document.createElement('div');
    btnDiv.innerHTML = " <button class='btn btn-primary'  onclick='btnAction()' style='margin:10px;font-size: 15px;' > " + 'reset<' + "/button>";
    document.getElementById('container-id').appendChild(btnDiv);
}

function btnAction() {
    location.reload();

}
