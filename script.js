const removeButtons = document.querySelectorAll('.remove').forEach(function(button) {
    button.addEventListener('click', function() {
        var rowToRemove = button.parentElement;
        rowToRemove.remove();
    });
});

const addButton = document.querySelector('.add').addEventListener('click', function() {
    var newOrderDiv = document.createElement('div');
    newOrderDiv.classList.add('order');

    var newOrderInput = document.createElement('input');
    newOrderInput.type = 'text';
    newOrderInput.placeholder = 'Order';

    var newPriceInput = document.createElement('input');
    newPriceInput.type = 'price';
    newPriceInput.placeholder = 'price';

    var newAmountInput = document.createElement('input');
    newAmountInput.type = 'quantity';
    newAmountInput.placeholder = 'qty';

    var removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.innerText = 'x';

    newOrderDiv.appendChild('newOrderInput');
    newOrderDiv.appendChild('newPriceInput');
    newOrderDiv.appendChild("newAmountInput");
    newOrderDiv.appendChild("removeButton");

    document.querySelector('.cashier').appendChild(newOrderDiv);
});