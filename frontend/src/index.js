const BASE_URL = "http://locahost:3000";
const itemsEl = document.getElementById("items-list");

const init = () => {
  getItems();
};

const getItems = () => {
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

  const renderItems = function (items) {
    console.log(items);

    items.forEach((item) => {
      itemsEl.innerHTML += ` 
      <li class="py-2">
      <div class="flex space-x-3">
        <div class="flex-1 space-y-1">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium">${item.name}</h3>
            <p class="text-sm text-gray-500">${formatPrice(item.price)}</p>
          </div>
          <p class="text-sm text-gray-500">${item.category_name}</p>
        </div>
      </div>
    </li>
        `;
    });
  };
};
init();

function formatPrice(price) {
  return `$${price}`;
}

// // Make a fetch request to get the data from our server
