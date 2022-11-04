const copyToClipboard = () => {
    document.getElementById('darkPost-textArea').select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
};

const countWords = () => {
    const numWords = document.getElementById('darkPost-textArea').value.split(/\S+/).length - 1 || 0;
    
    const wordsWord = numWords === 1 ? 'word' : 'words';
    
    const countWordsString = numWords + ' ' + wordsWord;
    
    document.getElementById('darkPost-wordCounter').innerHTML = countWordsString;
};

const darkPostAutoSaver = () => {
    const text = document.getElementById('darkPost-textArea').value;
    
    localStorage.setItem('darkPostText', text);
    countWords();
}

const darkPostInitializer = () => {
    const savedText = localStorage.getItem('darkPostText');
    document.getElementById('darkPost-textArea').innerHTML = savedText;
    
    countWords();
}

window.onload = (event) => {
    darkPostInitializer();
};
