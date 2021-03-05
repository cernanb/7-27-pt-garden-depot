const BASE_URL = "http://locahost:3000";
const itemsEl = document.getElementById("items-list");
const itemForm = document.getElementById("new-item");

const init = () => {
  getItems();
  bindItemFormEventListener();
};

const getItems = () => {
  fetch("http://localhost:3000/items")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((itemObject) => {
        const newItem = new Item(itemObject);
        itemsEl.innerHTML += newItem.renderIndexItem();
      });
      renderItems(data);
    });
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(handleResponse);

  // function handleResponse(res) {
  //   return res.json();
  // }

  // const renderItems = function (items) {
  //   items.forEach((item) => {
  //     itemsEl.innerHTML += `
  //     <li class="py-2">
  //     <div class="flex space-x-3">
  //       <div class="flex-1 space-y-1">
  //         <div class="flex items-center justify-between">
  //           <h3 class="text-sm font-medium">${item.name}</h3>
  //           <p class="text-sm text-gray-500">${formatPrice(item.price)}</p>
  //         </div>
  //         <p class="text-sm text-gray-500">${item.category_name}</p>
  //       </div>
  //     </div>
  //   </li>
  //       `;
  //   });
  // };
};
init();

function submitItem(data) {
  fetch(`http://localhost:3000/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item: data }),
  })
    .then((res) => res.json())
    .then((item) => {
      const newItem = new Item(item);
      itemsEl.innerHTML += newItem.renderIndexItem();
    });
}

function bindItemFormEventListener() {
  itemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("item-name").value;
    const description = document.getElementById("item-description").value;
    const price = document.getElementById("item-price").value;
    const data = {
      name,
      description,
      price,
    };
    submitItem(data);
  });
}

// // Make a fetch request to get the data from our server
