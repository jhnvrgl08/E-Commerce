/**
 * Retrieves the search keyword from the URL and displays it on the page.
 */
const setSearchKeyword = () => {
    const searchKey = decodeURI(location.pathname.split('/').pop());
    const searchSpanElement = document.querySelector('#search-key');
    searchSpanElement.innerHTML = searchKey;
  }
  
  // Fetch products based on the search keyword
  const fetchProductsBySearch = () => {
    const searchKey = decodeURI(location.pathname.split('/').pop());
  
    getProducts(searchKey)
      .then(data => createProductCards(data, '.card-container'))
      .catch(error => {
        // Handle error
      });
  }
  
  // Set search keyword and fetch products
  setSearchKeyword();
  fetchProductsBySearch();
  