console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ) {
  basket.push( item );
  return true;

}
addItem( 'food')
addItem( 'food2')
addItem( 'food3')
console.log(basket)

function listItems(basket) {
  for( let i = 0; i < basket.length; i++)
  console.log(basket[i]);
}
