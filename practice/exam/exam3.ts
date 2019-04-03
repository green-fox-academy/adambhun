'use strict';
export { };

class Dish {
  private name: string;
  private ingredients = {
    ingredient1: 0,
    ingredient2: 0
};

  public getIngridients() {
    return this.ingredients;
  }

  constructor(dish: string, {ingredient1, ingredient2}){
    this.name = dish;
    this.ingredients = {ingredient1, ingredient2};
  }
}

abstract class Order {
  private id: number;
  private status: string;
  private dishes: Dish[];

  public delay() {
    this.status = 'waiting';
  }
  public deliver() {
    this.status = 'delivered';
  }
  public reject() {
    this.status = 'rejected';
  }
  public getDishes() {
    return this.dishes;
  }

  constructor(dishes: Dish[]) {
    this.id = Math.floor(Math.random()*9999)+1000;
    this.status = 'default';
    this.dishes = dishes;
  }
}

class OnlineOrder extends Order {
  address: string;

  constructor(address: string, dishes: Dish[]) {
    super(dishes);
    this.address = address;
  }
}

class OfflineOrder extends Order {
  table: number;

  constructor(table: number, dishes: Dish[]) {
    super(dishes);
    this.table = table;
  }
}

class Restaurant {
  private inventory: {
    ingridient1: number;
    ingridient2: number;
  };

  public receiveOrder(order: Order) {
    if (this.inventory: {
      
    }
  }

  constructor(inventory: object[]) {
    this.inventory = inventory;
  }
}