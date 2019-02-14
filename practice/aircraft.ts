import { log } from "util";

abstract class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number;
  damage: number;
  priority: boolean;

  constructor(maxAmmoIN: number, baseDamageIN: number, currentAmmoIN: number = 0) {
    this.maxAmmo = maxAmmoIN;
    this.baseDamage = baseDamageIN;
    this.currentAmmo = currentAmmoIN;
    this.damage = baseDamageIN * currentAmmoIN;
  };


  fight(): number {
    return this.damage;
  };

  refill(ammoFilled: number): number {
    let ammoTemp: number = this.currentAmmo + ammoFilled;
    this.currentAmmo = ammoTemp;
    if (this.currentAmmo > this.maxAmmo) {
      this.currentAmmo = this.maxAmmo;
    };
    return ammoTemp - this.currentAmmo;
  };

  abstract getType(): string;

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.damage}`
  };

  abstract isPriority(): boolean;

};

class F16 extends Aircraft {

  constructor(maxAmmoIN: number = 8, baseDamageIN: number = 30, priorityIN: boolean = false) {
    super(maxAmmoIN, baseDamageIN);
    this.baseDamage = baseDamageIN;
    this.maxAmmo = maxAmmoIN;
    this.priority = priorityIN;
  };

  getType(): string {
    return 'F16';
  };
  isPriority(): boolean {
    return this.priority;
  };
};


class F35 extends Aircraft {

  constructor(maxAmmoIN: number, baseDamageIN: number, currentAmmoIN: number, priorityIN: boolean = true) {
    super(maxAmmoIN, baseDamageIN);
    this.baseDamage = 50;
    this.maxAmmo = 12;
    this.priority = priorityIN;
  };

  getType(): string {
    return 'F35';
  };

  isPriority(): boolean {
    return this.priority;
  };
};

class Carrier {

  listOfAircrafts: Aircraft[] = [];
  carrierAmmoStorage: number;
  healthPointCarrier: number;

  constructor(healthPointCarrierIN: number = 2000, carrierAmmoIN: number = 2000) {
    this.carrierAmmoStorage = carrierAmmoIN;
  };

  createAircraftF16() {
    let newAircraft = new F16();
  };

  private add(newAircraft: Aircraft): void {
    this.listOfAircrafts.push(newAircraft);
  };

  fill(someAircraft: Aircraft): void {
    if (this.carrierAmmoStorage < someAircraft.currentAmmo) {
      someAircraft.priority = true;
      someAircraft.refill(someAircraft.maxAmmo);
      this.carrierAmmoStorage -= someAircraft.maxAmmo;
    } else {
      console.log('This Carrier\'s ammo storage has run dry. RUN FOR YOUR LIVES!')
    };
  };

  basedmgTotalCounter() {
    return this.listOfAircrafts.reduce(function (gyűjtőKübli: number, oneAircraftOnTheCarrier: Aircraft) {
      return gyűjtőKübli + oneAircraftOnTheCarrier.baseDamage;
    }, 0);
  };

  fight(anotherCarrier: Carrier) {

    //total damage of a carrier
    /*
    how many f16s and f35-s are on the carrier
 
    reduce -> add total basedamage
 
    */
  };

  private planeTypeCounter() {

  };

  getStatus() {
    console.log()
  };

};

let myCarrier1 = new Carrier();

myCarrier1.createAircraftF16();
myCarrier1.createAircraftF16();
myCarrier1.createAircraftF16();

console.log(newAircraft);


myCarrier1.basedmgTotalCounter();


console.log(myCarrier1.basedmgTotalCounter());