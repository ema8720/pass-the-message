// immediate invoked function expression
(function() {
    // setting up logic for every time we will be submitting the form.
document.getElementById('message-form').addEventListener('submit', function(e) {
    // prevent default action
    e.preventDefault();
    // getting a value
const message = document.getElementById('message');
const value = message.value;

if (value === '') {
    console.log('empty value');
    
}



    // debugging and testing
    console.log(value);
    // take the message.value to the dom on h4 element
document.querySelector('.message-content').textContent = value;
message.value = '';

})
})();