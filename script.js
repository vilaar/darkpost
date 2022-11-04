const copyToClipboard = () => {
    document.getElementById('darkPost-textArea');
    document.execCommand('copy');
};

const countWords = (text) => {
    let numWords = 0;
    text.forEach(character => {
        character === " " && numWords ++; 
    });

    const wordsWord = numWords === 1 ? 'word' : 'words';
    const countWordsString = numWords + ' ' + wordsWord;
    document.getElementById('darkPost-wordCounter').innerHTML = countWordsString;
};

const darkPostAutoSaver = () => {
    const text = document.getElementById('darkPost-textArea').value;
    
    localStorage.setItem('darkPostText', text);
    countWords(text);
}

window.onload = (event) => {
    const savedText = localStorage.getItem('darkPostText');
    document.getElementById('darkPost-textArea').innerHTML = savedText;
};
