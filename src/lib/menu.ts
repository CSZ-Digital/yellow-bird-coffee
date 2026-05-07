export type DrinkSize = "S" | "M";

export interface Drink {
  id: string;
  name: string;
  description: string;
  prices: Record<DrinkSize, number>;
  emoji: string;
  accent: string;
}

export const drinks: Drink[] = [
  {
    id: "yellow-bird-latte",
    name: "Yellow Bird Latte",
    description: "Espresso, house vanilla, agave nectar, topped with our signature yellow cold foam",
    prices: { S: 5.70, M: 6.25 },
    emoji: "🐦",
    accent: "#F5C518",
  },
  {
    id: "ceremonial-matcha",
    name: "Ceremonial Matcha",
    description: "Ceremonial Grade Samidori Matcha - Uji, Japan",
    prices: { S: 5.50, M: 6.50 },
    emoji: "🍵",
    accent: "#7CB342",
  },
  {
    id: "that-mocha-tweet",
    name: "That Mocha Tweet",
    description: "Espresso, mocha, and velvety milk, finished with cocoa powder",
    prices: { S: 5.45, M: 5.95 },
    emoji: "🍫",
    accent: "#795548",
  },
  {
    id: "morning-chirp",
    name: "Morning Chirp",
    description: "Hazelnut shaken espresso with oat milk",
    prices: { S: 5.45, M: 6.00 },
    emoji: "🌅",
    accent: "#FF8F00",
  },
  {
    id: "pistachio-cream-coco-peep",
    name: 'Pistachio Cream "Coco" Peep',
    description: "Pistachio and Coconut Syrup with cold foam",
    prices: { S: 5.95, M: 6.50 },
    emoji: "🥥",
    accent: "#81C784",
  },
  {
    id: "early-bird-cold-brew",
    name: "Early Bird Cold Brew",
    description: "Smooth, bold cold brew steeped for 18 hours",
    prices: { S: 4.50, M: 5.25 },
    emoji: "🧊",
    accent: "#5D4037",
  },
];
