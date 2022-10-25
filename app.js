const buttons = {
    b1:document.getElementById("b1"),
    b2:document.getElementById("b2"),
    b3:document.getElementById("b3"),
    b4:document.getElementById("b4"),
    b5:document.getElementById("b5"),
    b6:document.getElementById("b6"),
    b7:document.getElementById("b7"),
    b8:document.getElementById("b8"),
    b9:document.getElementById("b9"),
    };
    const reset = ()=>{
        for(const key in buttons){
            const button = buttons[key];
            button.disabled = false;
        button.innerText =""
       currentUser = 1 }
    }
    let currentUser =1; 
    
    const start =(btn) =>{
        const button = buttons[btn];
        if(currentUser === 1){
            button .innerText = "x"
            currentUser = 2;
        }else{
            button.innerText = "o"
            currentUser = 1;
        }
        button.disabled = true;
        checkIt();
    }
    const checkIt = ()=>{
     if (buttons.b1.innerText && buttons.b1.innerText === buttons.b2.innerText && buttons.b2.innerText===buttons.b3.innerText) {
        console.log(`player ${buttons.b1.innerText} Won`);
        return reset();
    
     }else if (buttons.b4.innerText && buttons.b4.innerText === buttons.b5.innerText && buttons.b5.innerText===buttons.b6.innerText) {
            console.log(`player ${buttons.b4.innerText} Won`);
            return reset();
    
      } else if (buttons.b7.innerText && buttons.b7.innerText === buttons.b8.innerText && buttons.b8.innerText===buttons.b9.innerText) {
                alert(`player ${buttons.b7.innerText} Won`);
                        return reset();
        }  else if (buttons.b1.innerText && buttons.b1.innerText === buttons.b4.innerText && buttons.b4.innerText===buttons.b7.innerText) {
            alert(`player ${buttons.b1.innerText} Won`);
                    return reset();
    
                }  else if (buttons.b2.innerText && buttons.b2.innerText === buttons.b5.innerText && buttons.b5.innerText===buttons.b8.innerText) {
                    alert(`player ${buttons.b2.innerText} Won`);
                    return reset();
    
                }  else if (buttons.b3.innerText && buttons.b3.innerText === buttons.b6.innerText && buttons.b6.innerText===buttons.b9.innerText) {
                    alert(`player ${buttons.b3.innerText} Won`);
                    return reset();
    
                }  else if (buttons.b1.innerText && buttons.b1.innerText === buttons.b5.innerText && buttons.b5.innerText===buttons.b9.innerText) {
                    alert(`player ${buttons.b1.innerText} Won`);
                    return reset();
                }  else if (buttons.b3.innerText && buttons.b3.innerText === buttons.b5.innerText && buttons.b5.innerText===buttons.b7.innerText) {
                    alert(`player ${buttons.b1.innerText} Won`);
                    return reset();    
    }
    for(const key in buttons){
        const button = buttons[key];
        if (button.innerText === "") {
            return;
        };
    }
    alert("Game Draw");
    return reset();
    }