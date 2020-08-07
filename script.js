const quotes = [
   '" Person wey naked no dey put hand for pocket "' ,
    '" Akara and moin moin get the same parent na wetin dey pass tru make dem different "',
   '" Jollof Rice wey dey for d bottom of pot 2day go dey for top of cooler 2moro "' ,
   ' " Poor man no dey siddon for front for village meeting "',
    '" Dem no dey slimfit borrowed clothes... except sey you be mad person sha "',
   ' " Because native doctor travel go UK no mean sey the gods go begin speaker english " ' ,
   ' " Sey toto sweet no mean sey hin go cause diabetes "',
   ' " Cos sey e be small world no mean sey you fit trek from Ajah to Berger " ',
    

]

const con = document.querySelector('.container')
const btn = document.querySelector(".generate");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quotes ").textContent = quotes[random];
   });

  btn.addEventListener('mouseover',function(){
    con.style.backgroundColor = 'black';
    con.style.color  = 'white';



  });
  btn.addEventListener('mouseleave',function(){
    con.style.backgroundColor = 'white';
    con.style.color  = 'black';



  });
  

  
