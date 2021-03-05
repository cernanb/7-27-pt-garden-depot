class Item {
  constructor(dataObject) {
    this.name = dataObject.name;
    this.description = dataObject.description;
    this.price = dataObject.price;
    this.category_name = dataObject.category_name;
  }

  formatPrice() {
    return `$${this.price}`;
  }

  renderIndexItem() {
    return `
      <li class="py-2">
           <div class="flex space-x-3">
             <div class="flex-1 space-y-1">
               <div class="flex items-center justify-between">
                 <h3 class="text-sm font-medium">${this.name}</h3>
                 <p class="text-sm text-gray-500">${this.formatPrice()}</p>
               </div>
               <p class="text-sm text-gray-500">${this.category_name}</p>
             </div>
           </div>
         </li>
      `;
  }
}
