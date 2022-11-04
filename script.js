const copyToClipboard = () => {
    document.getElementById('darkPost-textArea').select();
    document.execCommand('copy');
};

const countWords = () => {
    const text = Array.from(document.getElementById('darkPost-textArea').value);
    let numWords = 0;
    
    if (text.length > 0) text.forEach(character => {
        character === " " && numWords ++; 
    });

    const wordsWord = numWords === 1 ? 'word' : 'words';
    const countWordsString = numWords + ' ' + wordsWord;
    document.getElementById('darkPost-wordCounter').innerHTML = countWordsString;
};

const darkPostAutoSaver = () => {
    const text = document.getElementById('darkPost-textArea').value;
    
    localStorage.setItem('darkPostText', text);
    countWords();
}

window.onload = (event) => {
    const savedText = localStorage.getItem('darkPostText');
    document.getElementById('darkPost-textArea').innerHTML = savedText;
};
