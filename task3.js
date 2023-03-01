class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

function createProductfromString(arrOfStrings) {
  const result = [];
  for (str of arrOfStrings) {
    const arr = str.split("&");
    let name, price, quantity, description;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(/name-(contains|starts|ends)-(\w+)/g)) {
        name = arr[i].replace(/name-(contains|starts|ends)-(\w+)/g, "$2");
      }
      if (arr[i].match(/price-(<|=|>|<=|>=)(\d+)/g)) {
        price = arr[i].replace(/price-(<|=|>|<=|>=)(\d+)/g, "$2");
      }
      if (arr[i].match(/quantity-(<|=|>|<=|>=)(\d+)/g)) {
        quantity = arr[i].replace(/quantity-(<|=|>|<=|>=)(\d+)/g, "$2");
      }
      if (arr[i].match(/description-(contains|starts|ends)-(\w+)/g)) {
        description = arr[i].replace(
          /description-(contains|starts|ends)-(\w+)/g,
          "$2"
        );
      }
    }
    if (name && quantity) {
      result.push(new Product(name, price, quantity, description));
    }
  }
  return result;
}

console.log(
  createProductfromString([
    "name-contains-fd&price-=2&quantity->5&description-ends-abc",
    "name-starts-fd&quantity-=5",
  ])
);
