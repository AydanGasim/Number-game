
const N = 4;
let Numbers = [];
let M = [];
let newArr = [];

onload = () => {
    createNumbers();
    createArr();
    createTable();
};

const createNumbers = () => {
    let k = 1;
    for (let i = 0; i < N * N; i++) {
        Numbers[i] = k++;
    }
};

const createArr = () => {
    let k = 0;
    for (let i = 0; i < N; i++) {
        M[i] = [];
        for (let j = 0; j < N; j++) {
            k = Math.floor(Math.random() * Numbers.length);
            M[i][j] = Numbers[k];
            Numbers.splice(k, 1);
        }
    }
};

const createTable = () => {
    let table = '';
    for (let i = 0; i < N; i++) {
        table += `<tr>`
        for (let j = 0; j < N; j++) {
            const value = M[i][j];
            table += `<td onclick="selectCell(${value}, this)">${value}</td>`;
        }
        table += '</tr>';
    }
    document.getElementsByTagName("table")[0].innerHTML = table;
};

const selectCell = (value, cell) => {
    if (newArr.length === 0 && value === 1) {
        newArr.push(1);
        cell.style.backgroundColor = "green";
    }
    else if (value === newArr[newArr.length - 1] + 1) {
        newArr.push(value);
        cell.style.backgroundColor = "green";
        checkWin();
    }

    else {
        cell.style.backgroundColor = "red";
        setTimeout(() => {
            gameOver();
        }, 1000);

    }
};

const gameOver = () => {
    alert("Game Over! You Lose.");
    resetGame();
};

const resetGame = () => {
    newArr = [];
    createNumbers();
    createArr();
    createTable();
};
const checkWin = () => {
    if (newArr.length === N * N) {
        setTimeout(() => { 
            youWin(); 
        }, 1000)

    }
};


const youWin = () => {
    alert("Congratulations! You Win!");
    resetGame();
};













