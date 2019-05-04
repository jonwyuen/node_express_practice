class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Item.id;

    Item.list.push(this);
    Item.id++;
  }

  static find(id) {
    return Item.list.find(item => (item.id = id));
  }

  static update(id, data) {
    let foundItem = Item.find(id);
    foundItem.name = data.name;
    foundItem.price = data.price;
    return foundItem;
  }

  static remove(id) {
    let foundIndex = Item.list.findIndex(item => item.id === id);
    return Item.list.splice(foundIndex, 1);
  }
}

Item.id = 1;
Item.list = [];

module.exports = Item;
