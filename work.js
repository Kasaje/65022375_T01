let random = Math.floor(Math.random() * 101);
var num = 0;
function GN(){
    num = num + 1;
    const Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number > random){
        alert("มากกว่า")
    }
    else if (Guess_Number < random){
        alert("น้อยกว่า")
    }
    else{
        alert("ถูกต้อง ค่าที่ถูกต้องคือ : " + random + " คุณทายไปทั้งหมด " + num + " ครั้ง")
    }

}