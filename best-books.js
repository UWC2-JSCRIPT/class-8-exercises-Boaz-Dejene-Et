document.addEventListener("DOMContentLoaded", function() {
  const formEl = document.getElementById('best-books-form');
  const yearEl = document.getElementById('year');
  const monthEl = document.getElementById('month');
  const dateEl = document.getElementById('date');

  const displayBooks = (array) => {
    const container = document.getElementById('books-container');
    container.innerHTML = "<h2>Top 5 Hardcover Best Sellers Books</h2>";
  
    let top5 = array.results.books.filter(book => book.rank <= 5);
    top5.forEach(book => {
      console.log(book)
      let liElement = document.createElement('li');
      liElement.innerHTML = `
      <img src="${book.book_image}">
      <div>
        <h5>${book.title}</h5>
        <p>${book.description}</p>
        <h6>by ${book.author}</h6>
      </div>`;
      container.appendChild(liElement);
    });
  
  };

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();

    const year = yearEl.value;
    const month = monthEl.value;
    const date = dateEl.value;

    // Fetch bestselling books for date and add top 5 to page

    fetch(`${BASEAPI}/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${APIKEY}`
    ).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      displayBooks(data)
    }).catch((err) => {
      console.log(err)
      console.log(err?.response?.data)
    })
  });
})

