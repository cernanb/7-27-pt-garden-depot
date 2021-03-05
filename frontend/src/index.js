const BASE_URL = "http://locahost:3000";
const mainListEl = document.getElementById("main-list");
const mainListTitleEl = document.getElementById("main-list-title");
const itemsEl = document.getElementById("items-list");
const itemForm = document.getElementById("new-item");
const itemsNavEl = document.getElementById("items-nav");
const categoriesNavEl = document.getElementById("categories-nav");
const itemDetailEl = document.getElementById("item-detail");

const init = () => {
  getItems();
  bindNavItemListeners();
  bindItemFormEventListener();
};

const getItems = () => {
  mainListEl.innerHTML = "<h1>Loading...</h1>";
  fetch("http://localhost:3000/items")
    .then((res) => res.json())
    .then((data) => {
      mainListEl.innerHTML = "";
      mainListTitleEl.innerText = "Items";
      data.forEach((itemObject) => {
        const newItem = new Item(itemObject);
        mainListEl.innerHTML += newItem.renderIndexItem();
      });

      document
        .querySelectorAll(".item-link")
        .forEach((link) => link.addEventListener("click", showItemDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteItem));
    });
};

function showItemDetails(e) {
  console.log(e.target);
  const { id } = e.target.dataset;
  console.log(`Item ${id} was clicked`);
  fetch(`http://localhost:3000/items/${id}`)
    .then((res) => res.json())
    .then((item) => {
      const newItem = new Item(item);
      itemDetailEl.innerHTML = newItem.renderShowItem();
    });
}

function deleteItem(e) {
  const { id } = e.target.dataset;
  fetch(`http://localhost:3000/items/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      e.target.parentElement.parentElement.parentElement.remove();
    });
}

const getCategories = () => {
  mainListTitleEl.innerText = "Categories";
  mainListEl.innerHTML = "<h1>Loading...</h1>";
  // Here is where I would fetch categories and update the main list div

  fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((data) => {
      mainListEl.innerHTML = "";
      data.forEach((catObject) => {
        const newCat = new Category(catObject);
        mainListEl.innerHTML += newCat.renderIndexCategory();
      });

      document
        .querySelectorAll(".item-link")
        .forEach((link) => link.addEventListener("click", showItemDetails));
      document
        .querySelectorAll(".delete-btn")
        .forEach((btn) => btn.addEventListener("click", deleteItem));
    });
};

init();

function submitItem(data) {
  fetch(`http://localhost:3000/items`, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((item) => {
      const newItem = new Item(item);
      mainListEl.innerHTML += newItem.renderIndexItem();
    });
}

function bindItemFormEventListener() {
  itemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.values());
    // const name = document.getElementById("item-name").value;
    // const description = document.getElementById("item-description").value;
    // const price = document.getElementById("item-price").value;
    // const data = {
    //   name,
    //   description,
    //   price,
    // };
    submitItem(formData);
  });
}

function bindNavItemListeners() {
  itemsNavEl.addEventListener("click", getItems);
  categoriesNavEl.addEventListener("click", getCategories);
}

// // Make a fetch request to get the data from our server
