import { ITransformer } from "./hero-interface";

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
  id: number;
  name: string;
  photo?: string;
  wings: number;
  wheels: number;
  clan: string;

  constructor(
    id: number = 1,
    name: string = "someone",
    wingsNum: number = 2,
    wheelsNum: number = 4,
    clanName: string = "OptimusAverageAmerican"
  ) {
    this.id = id;
    this.name = name;
    this.wings = wingsNum;
    this.wheels = wheelsNum;
    this.clan = clanName;
  }
}
