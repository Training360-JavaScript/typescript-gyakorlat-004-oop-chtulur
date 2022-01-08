import { IHuman } from "./hero-interface";

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero implements IHuman {
  id: number;
  name: string;
  photo?: string;
  sex: string;
  age: number;
  health: number;

  constructor(
    id: number,
    name: string,
    biologicalSex: string,
    currentAge: number,
    currentHealth: number
  ) {
    this.id = id;
    this.name = name;
    this.sex = biologicalSex;
    this.age = currentAge;
    this.health = currentHealth;
  }
}
