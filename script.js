document.getElementById('generateFormula').addEventListener('click', function() {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    document.getElementById('formula').textContent = `${num1} x ${num2}`;
    document.getElementById('resultInput').value = '';
    document.getElementById('validation').className = 'validation';
    document.getElementById('correctResult').textContent = '';
});

document.getElementById('resultInput').addEventListener('blur', function() {
    const formula = document.getElementById('formula').textContent.split(' x ');
    const correctAnswer = parseInt(formula[0]) * parseInt(formula[1]);
    const userAnswer = parseInt(this.value);
    const validationDiv = document.getElementById('validation');
    if (userAnswer === correctAnswer) {
        this.classList.add('greenBorder');
        validationDiv.className = 'validation greenCheck';
    } else {
        this.classList.add('redBorder');
        validationDiv.className = 'validation redCross';
    }
});

document.getElementById('showResult').addEventListener('click', function() {
    const formula = document.getElementById('formula').textContent.split(' x ');
    const correctAnswer = parseInt(formula[0]) * parseInt(formula[1]);
    document.getElementById('correctResult').textContent = `正确结果是：${correctAnswer}`;
});
