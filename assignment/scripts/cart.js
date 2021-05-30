console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['candy','morecandy','lesscandy'];
function addItem( item ) {
  basket.push( item );
  return true;

}
addItem( 'food')
addItem( 'food2')
addItem( 'food3')
console.log(basket)
console.log(`Basket is ${basket}`);

function listItems() {
  for( i = 0; i < basket.length; i++)
    return console.log(basket[i]);
  }

function empty() {
  for( i in basket, basket.pop)
   i = basket.length-1;
   i >=0
  return noItems
}

  console.log(`Basket is ${basket}`);
  console.log('Adding apples (expect true)', addItem('apples'));
  console.log(`Basket is now ${basket}`);
