    //==================================================================================================================================================================
    //                                                     Functions 
    //==================================================================================================================================================================


    //==================================================================================================================================================================
    //                                                 On and off functions
    //==================================================================================================================================================================


    // "i" is indicator
    // c for color and l for level
    let i = "l",point=1;
    document.addEventListener("DOMContentLoaded",function () {
        document.querySelectorAll(".img").forEach( k => {
            off(k);
        })
    })
    function on(k){
        k.style.display = "block";
    }
    function off(k){
        k.style.display = "none";
    }



    //==================================================================================================================================================================
    //                                                 Bottons to move left and right functions
    //==================================================================================================================================================================

    //                                               :it uses counter to move left and right  

    //left and right buttons
    function runimg(n){
        if (n ==1 ){
            document.querySelectorAll(".img").forEach( k => {
                off(k)
            })
            on(document.querySelector(".l1"));
        }
        else{
            document.querySelectorAll(".img").forEach( k => {
                off(k)
            })
            on(document.querySelector(".c1"));
        }
    }
    function left(){
        document.querySelectorAll(".img").forEach(k => {
            off(k);
        })
        if (i=="l") {
            if (point == 1) point = 4;
            else point--;
        }
        else{
            if (point == 1) point = 5;
            else point--;
        }
        on(document.querySelector(`.${i}${point}`));
        document.querySelector("#lvlboxin").innerHTML = point;
    }
    function right(){
        document.querySelectorAll(".img").forEach(k => {
            off(k);
        })
        if (i=="l") {
            if (point == 4) point = 1;
            else point++;
        }
        else{
            if (point == 5) point = 1;
            else point++;
        }
        on(document.querySelector(`.${i}${point}`));
        document.querySelector("#lvlboxin").innerHTML = point;
    }

    //          :To toggle between color and level and else

    function toggle(n){
        off_centre_div();
        if (n==1 || n==2){
            //  if n == 1 or n == 2
            //  turn off achievents     and turn on images
            on(document.querySelector(".images"));
            runimg(1);
        }
        else if ( n == 3 ){
            on(document.querySelector(".achievents"));
        }
    }

    function off_centre_div(){
        off(document.querySelector(".images"));
        off(document.querySelector(".achievents"));
        off(document.querySelector(".blank"));
    }