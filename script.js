const copyToClipboard = () => {
    document.getElementById('#darkPost-textArea');
    document.execCommand('copy');
};

const countWords = (text) => {
    let numWords = 0;
    text.forEach(character => {
        character === " " && numWords ++; 
    });

    document.getElementById('#darkPost-wordCounter').innerHTML = numWords;
};

const darkPostAutoSaver = () => {
    const text = document.getElementById('#darkPost-textArea').value;
    
    localStorage.setItem('darkPostText', text);
    countWords(text);
}

window.onload(() => {
    const savedText = localStorage.getItem('darkPostText');
    document.getElementById('#darkPost-textArea').innerHTML(savedText);
});
