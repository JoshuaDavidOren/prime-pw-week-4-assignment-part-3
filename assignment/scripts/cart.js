console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['candy','morecandy','lesscandy'];

function addItem( item ) {
  basket.push( item );
  return true;
}


function listItems() {
  for( let i = 0; i < basket.length-1; i++) {
    console.log(basket[i]);
  }return console.log('Item list');
}

  function empty() {
    while(basket.length > 0) {
      basket.pop();
    } return console.log('No items in cart');
  }
