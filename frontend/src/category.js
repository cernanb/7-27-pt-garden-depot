class Category {
  constructor(dataObject) {
    this.id = dataObject.id;
    this.name = dataObject.name;
    this.items = dataObject.items;
  }

  // renderShowItem() {
  //   return `
  //   <h2 class="text-lg leading-6 font-medium text-gray-900">
  //   ${this.name}
  // </h2>
  // <p class="mt-1 max-w-2xl text-sm text-gray-500">
  //   ${this.category_name}
  // </p>
  // <p>${this.description}</p>
  // <p>${this.formatPrice()}
  //   `;
  // }

  renderIndexCategory() {
    return `
        <li class="py-2">
             <div class="flex space-x-3">
               <div class="flex-1 space-y-1">
                 <div class="flex items-center justify-between">
                   <h3 class="text-sm font-medium hover:text-gray-400 item-link">${this.name}</h3>
                 </div>
                 <p class="text-sm text-gray-500">${this.items.length} items</p>
                </svg>
               </div>
             </div>
           </li>
        `;
  }
}
