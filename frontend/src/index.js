const rootEl = document.getElementById("root");

// // Make a fetch request to get the data from our server

fetch("http://localhost:3000/items")
  .then((res) => res.json())
  .then((data) => renderItems(data));
//   .then(function (res) {
//     return res.json();
//   })
//   .then(handleResponse);

// function handleResponse(res) {
//   return res.json();
// }

function formatPrice(price) {
  return `$${price}`;
}

const renderItems = function (items) {
  console.log(items);

  items.forEach((item) => {
    rootEl.innerHTML += `
    <article>
        <h2>${item.name}</h2>
        <h3>Price: ${formatPrice(item.price)}</h3>
    </article>
    `;
  });
};
