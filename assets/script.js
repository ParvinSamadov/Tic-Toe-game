let squares = document.querySelectorAll('.square')
let x_command = 'X';
let o_command = 'O';
let currentPlayer=o_command;
let forAlert=false;
function check(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (i < 3) {
            if (squares[i].innerText != '' && squares[i].innerText === squares[i + 3].innerText && squares[i].innerText === squares[i + 6].innerText) {
                forAlert=true;
            } else if (squares[0].innerText != '' && squares[0].innerText === squares[4].innerText && squares[0].innerText === squares[8].innerText) {
                forAlert=true;
            } else if (squares[2].innerText !== '' && squares[2].innerText === squares[4].innerText && squares[2].innerText === squares[6].innerText) {
                forAlert=true;
            }else if(squares[0].innerText != '' && i === 0){
                if (squares[0].innerText === squares[1].innerText && squares[0].innerText === squares[2].innerText) {
                    forAlert=true;
                }
            }

        } else if (squares[3].innerText != '' && i === 3 || squares[6].innerText != '' && i === 6) {
            if (squares[i].innerText === squares[i + 1].innerText && squares[i].innerText === squares[i + 2].innerText) {
                forAlert=true;
            }
        }
    }
}
squares.forEach(s => {
    s.addEventListener('click', function () {
        if(s.innerText==='' && currentPlayer===o_command){
            currentPlayer=x_command;
        }else if(s.innerText==='' && currentPlayer===x_command){
            currentPlayer=o_command;
        }
        s.innerText=currentPlayer
        check(squares);
        if(forAlert){
            alert(`${s.innerText} is winner`)
            squares.forEach(s=>{
                s.innerText='';
            })
            forAlert=false;
            currentPlayer=o_command;
        }
    })
})
const restart=document.querySelector('.restart');
restart.addEventListener('click',function(){
    squares.forEach(s=>{
        s.innerText='';
    })
    forAlert=false;
    currentPlayer=o_command;
})