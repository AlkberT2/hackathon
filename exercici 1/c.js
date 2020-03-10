/*

1. grid de 3 x 3.






*/






    
setInterval(
    function()
    {
        
        let n = document.getElementById( Math.floor( Math.random()*8) + 1);
        n.classList.add('coloreado');
        

       
    },
    1000);

    function reset()
    {
        n.classList.add('reset');
    }

    

    
    


