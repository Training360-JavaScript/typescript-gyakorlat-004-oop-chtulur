// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  { id: 99, name: "Joe", sex: "male", age: 33, health: 500 },
  { id: 45, name: "Jess", sex: "Female", age: 35, health: 450 },
  { id: 563, name: "Torsha", sex: "Female", age: 55, health: 550 },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  { id: 99, name: "Joe", wings: 2, wheels: 4, clan: "asd" },
  { id: 100, name: "Joe", wings: 3, wheels: 5, clan: "sdf" },
  { id: 101, name: "Joe", wings: 4, wheels: 8, clan: "dfg" },
];
