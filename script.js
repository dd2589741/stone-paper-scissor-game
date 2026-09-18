var display_print=document.getElementById("display");
    var your_point=document.getElementById("usrpnt");
    var system_point=document.getElementById("syspnt");
    var yd=0;
    var sd=0;
    function game(para){
        if(yd>2||sd>2){
            return;
        }
        var computer=Math.floor(Math.random()*3);
        var system="";
        
        console.log(computer);
        if(computer==0){
            system="rock";
        }else if(computer==1){
            system="paper";
        }else{
            system="scissor"
        }

        

        console.log("ststem: "+system);
        console.log("you: "+para);
        
        if(para===system){
            display_print.textContent="match tie";
        
        }
        else if(para==="scissor"&&system==="paper"){
            display_print.textContent="🎉🎉you win🎉🎉";
            yd++;
            your_point.textContent="your point: "+yd;
            
        }
        else if(para==="paper"&&system==="rock"){
               display_print.textContent="🎉you win🎉🎉";
               yd++;
               your_point.textContent="your point: "+yd;
                
        }else if(para==="rock"&&system==="scissor"){
            display_print.textContent="🎉🎉you win🎉🎉";
            yd++;
            your_point.textContent="your point: "+yd;
            
        }else{
           display_print.textContent="Syatem win✌️";
           sd++;
            system_point.textContent="system point: "+sd;
            
        }
        console.log("system display: "+ sd);
        console.log("your display: "+ yd);
        
    }

    function reset(){
        yd=0;
        sd=0;
        display_print.textContent="wait..."
        system_point.textContent="system point: "+sd;
         your_point.textContent="your point: "+yd;

    }
        