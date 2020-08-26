const quotes = [
  '" Person wey naked no dey put hand for pocket "',
  '" Akara and moin moin get the same parent na wetin dey pass tru make dem different "',
  '" Jollof Rice wey dey for d bottom of pot 2day go dey for top of cooler 2moro "',
  ' " Poor man no dey siddon for front for village meeting "',
  '" Dem no dey slimfit borrowed clothes... except sey you be mad person sha "',
  ' " Because native doctor travel go UK no mean sey the gods go begin speak english " ',
  ' " Sey toto sweet no mean sey hin go cause diabetes "',
  ' " Cos sey e be small world no mean sey you fit trek from Ajah to Berger " ',


]


const btn = $('.generate');
const quoteArea = $('.quotes');

function changeQuotes() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteArea.text(quotes[random]);

}

btn.click(changeQuotes)