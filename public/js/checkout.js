/**
 * Performs actions when the window loads.
 * If the user is not logged in, redirects to the login page.
 */
window.onload = () => {
    if (!sessionStorage.user) {
        location.replace('/login');
    }
};

/**
 * Handles the place order button click event.
 * Retrieves the address and sends an order request to the server.
 */
const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
    let address = getAddress();

    if (address) {
        fetch('/order', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                order: JSON.parse(localStorage.cart),
                email: JSON.parse(sessionStorage.user).email,
                add: address,
            })
        }).then(res => res.json())
        .then(data => {
            if (data.alert == 'your order is placed') {
                delete localStorage.cart;
                showAlert(data.alert, 'success');
            } else {
                showAlert(data.alert);
            }
        });
    }
});

/**
 * Retrieves and validates the address from the input fields.
 * @returns {object} - The address object if all inputs are filled, otherwise shows an alert.
 */
const getAddress = () => {
    let address = document.querySelector('#address').value;
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    let pincode = document.querySelector('#pincode').value;
    let landmark = document.querySelector('#landmark').value;

    if (!address.length || !street.length || !city.length || !state.length || !pincode.length || !landmark.length) {
        return showAlert('fill all the inputs first');
    } else {
        return { address, street, city, state, pincode, landmark };
    }
};
