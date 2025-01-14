/**
 * The characters used for generating tokens.
 */
let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

/**
 * Generates a token based on the provided key.
 * @param {string} key - The key used for generating the token.
 * @returns {string} The generated token.
 */
const generateToken = (key) => {
  let token = '';
  for (let i = 0; i < key.length; i++) {
    let index = char.indexOf(key[i]) || char.length / 2;
    let randomIndex = Math.floor(Math.random() * index);
    token += char[randomIndex] + char[index - randomIndex];
  }
  return token;
};

/**
 * Compares a token with a key and returns true if they match, false otherwise.
 * @param {string} token - The token to compare.
 * @param {string} key - The key to compare.
 * @returns {boolean} True if the token and key match, false otherwise.
 */
const compareToken = (token, key) => {
  let string = '';
  for (let i = 0; i < token.length; i = i + 2) {
    let index1 = char.indexOf(token[i]);
    let index2 = char.indexOf(token[i + 1]);
    string += char[index1 + index2];
  }
  if (string === key) {
    return true;
  }
  return false;
};

/**
 * Sends data to the specified path using a POST request.
 * @param {string} path - The path to send the data to.
 * @param {Object} data - The data to send in the request body.
 */
const sendData = (path, data) => {
  fetch(path, {
    method: 'post',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((response) => {
      processData(response);
    });
};

/**
 * Processes the data received from the server.
 * @param {Object} data - The data received from the server.
 */
const processData = (data) => {
  loader.style.display = null;
  if (data.alert) {
    showAlert(data.alert);
  } else if (data.name) {
    // Create authToken
    data.authToken = generateToken(data.email);
    sessionStorage.user = JSON.stringify(data);
    location.replace('/');
  } else if (data === true) {
    // Seller page
    let user = JSON.parse(sessionStorage.user);
    user.seller = true;
    sessionStorage.user = JSON.stringify(user);
    location.reload();
  } else if (data.product) {
    location.href = '/seller';
  }
};

/**
 * Displays an alert message.
 * @param {string} msg - The message to display in the alert.
 * @param {string} type - The type of alert ('success' or any other value for error).
 * @returns {boolean} Always returns false.
 */
const showAlert = (msg, type) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  let alertImg = document.querySelector('.alert-img');

  alertMsg.innerHTML = msg;

  if (type === 'success') {
    alertImg.src = `img/success.png`;
    alertMsg.style.color = `#0ab50a`;
  } else {
    alertImg.src = `img/error.png`;
    alertMsg.style.color = null;
  }

  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
  return false;
};
