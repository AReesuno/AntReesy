function replaceMe(){
    let storT = document.getElementById('story').value;
    let findT = document.getElementById('findText').value;
    let replT = document.getElementById('replaceText').value;

    let newText = storT.replace(new RegExp(findT, 'g'), replT);
    document.getElementById('story').value = newText;
}

function clearMe(){
    document.getElementById('findText').value = "";
    document.getElementById('replaceText').value = "";
    console.log('clear');
}

function upperC(){
    let storT = document.getElementById('story').value;
    document.getElementById('story').value = storT.toUpperCase();
}

function lowerC(){
    let storT = document.getElementById('story').value;
    document.getElementById('story').value = storT.toLowerCase();
}

function grabLength(){
    let textLength =  document.getElementById('story').value.length;
    document.getElementById('lenghtDisplay').innerText=""
}