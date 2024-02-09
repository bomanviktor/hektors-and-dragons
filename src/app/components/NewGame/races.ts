export interface Race {
  id: string;
  label: string;
  passive: Ability[];
  stats: Stats;
  classes: Class[];
}

export interface Stats {
  HP: number;
  damage: number;
  startingMana: number;
  defense?: number;
  magic?: number;
  focus?: number;
  range: string;
  actions: number;
}

export interface Traits {
  primary: string;
  secondary: string;
}

interface Class {
  id: string;
  traits: Traits;
  abilities: Ability[];
  image?: string;
  description?: string;
}

export interface Ability {
  name: string;
  description: string;
  image?: string;
}

const dwarfPassive: Ability[] = [
  {
    name: "Sturdy",
    description: "Gain extra defense by rolling for special.",
  },
  {
    name: "Short",
    description: "Can't roll for attack after moving.",
  },
];

const berserkerAbilities: Ability[] = [
  {
    name: "Gadgeteer",
    description: "Fire your pistol. Boom, headshot.",
    image: "/img/dwarf/berserker/gadgeteer.jpg",
  },
  {
    name: "Balls of steel",
    description: "Leap forward and stun everyone in a small radius around you.",
    image: "/img/dwarf/berserker/balls-of-steel.png",
  },
  {
    name: "Berserker's rage",
    description: "Multiply your damage for the rest of the turn.",
    image: "/img/dwarf/berserker/berserkers-rage.png",
  },
  {
    name: "Relentless force",
    description:
      "Push an enemy backwards, dealing damage and stunning everyone in your path.",
    image: "/img/dwarf/berserker/relentless-force.png",
  },
];

const guardianAbilities: Ability[] = [
  {
    name: "Shield wall",
    description: "Taunt enemies and take no damage from certain sources.",
    image: "/img/dwarf/guardian/shield-wall.png",
  },
  {
    name: "Stand united",
    description: "Increase your and an adjacent hero's defense.",
    image: "/img/dwarf/guardian/stand-united.png",
  },
  {
    name: "Rune stone",
    description:
      "Use your rune stone to shield an ally and teleport them to you.",
    image: "/img/dwarf/guardian/runestone.png",
  },
  {
    name: "Cataclysm",
    description:
      "Bring forth an earthquake which stuns enemies for the rest of battle.",
    image: "/img/dwarf/guardian/cataclysm.png",
  },
];

export const dwarf: Race = {
  id: "dwarf",
  label: "Dwarf",
  passive: dwarfPassive,
  stats: {
    HP: 20,
    damage: 2,
    startingMana: 2,
    defense: 1,
    range: "1",
    actions: 3,
  },
  classes: [
    {
      id: "berserker",
      traits: {
        primary: "CC",
        secondary: "Melee DPS",
      },
      abilities: berserkerAbilities,
      image: "/img/dwarf/berserker/profile.png",
    },
    {
      id: "guardian",
      traits: {
        primary: "Tank",
        secondary: "CC",
      },
      abilities: guardianAbilities,
      image: "/img/dwarf/guardian/profile.png",
      description: `XX, a stout and sturdy dwarf hailing from the depths of the Ironpeak Mountains, possesses a fierce determination and an unwavering loyalty to his kin. 

      Deeply distrustful of the Order's motives, he witnessed firsthand their exploitation of his people's ancestral mines for their own gain. Seeking to reclaim XX people's lost heritage and stand against the oppressive Order, XX  embarks on a solitary quest for justice. XX unparalleled skill with an axe and his unwavering loyalty make him a formidable ally to any who oppose the Order's reign.`,
    },
  ],
};

const elfPassive: Ability[] = [
  {
    name: "Focus",
    description: "Bonus stat that grants extra damage.",
  },
  {
    name: "Fragile",
    description: "Can't enter defensive stance.",
  },
];

const darkElfAbilities: Ability[] = [
  {
    name: "Parallel realms",
    description:
      "Equip your daggers and enter the shadow realm. Replace all your spells with shadow versions.",
    image: "/img/elf/dark-elf/parallel-realms.jpg",
  },
  {
    name: "Back to reality",
    description: "Equip your bow, enter the normal realm and heal yourself.",
    image: "/img/elf/dark-elf/back-to-reality.jpg",
  },
  {
    name: "Piercing arrow",
    description: "Shoot an arrow that deals true damage.",
    image: "/img/elf/dark-elf/piercing-arrow.jpg",
  },
  {
    name: "Eternal darkness",
    description:
      "Drag a target into the shadow realm where you deal bonus damage towards them.",
    image: "/img/elf/dark-elf/eternal-darkness.jpg",
  },
  {
    name: "Hawk-eye",
    description: "Fire arrow(s) with extra range and damage.",
    image: "/img/elf/wood-elf/hawk-eye.png",
  },
  {
    name: "Demon-eye",
    description: "Throw a dagger with infinite range.",
    image: "/img/elf/dark-elf/demon-eye.jpg",
  },
  {
    name: "Paralyzing shot",
    description: "Deal damage to target and stun them.",
    image: "/img/elf/dark-elf/paralyzing-shot.jpg",
  },
  {
    name: "Shadow blade",
    description:
      "Become invisible. The first attack breaks stealth and bonus damage.",
    image: "/img/elf/dark-elf/shadow-blade.jpg",
  },
  {
    name: "Elven ghost ",
    description:
      "Enter an enhanced state in the shadow realm. Cast back to reality at the end of the turn.",
    image: "/img/elf/dark-elf/elven-ghost.jpg",
  },
];

const woodElfAbilities: Ability[] = [
  {
    name: "Elvish medicine",
    description: "Heal yourself or adjacent companion.",
    image: "/img/elf/wood-elf/elvish-medicine.png",
  },
  {
    name: "Hail of arrows",
    description: "Next ranged attack will hit multiple enemies.",
    image: "/img/elf/wood-elf/hail-of-arrows.webp",
  },
  {
    name: "Hawk-eye",
    description: "Fire arrow(s) with extra range and damage.",
    image: "/img/elf/wood-elf/hawk-eye.png",
  },
  {
    name: "One with nature",
    description:
      "Become one with nature and fire extra lethal arrows towards the closest enemy.",
    image: "/img/elf/wood-elf/one-with-nature.jpg",
  },
];

export const elf: Race = {
  id: "elf",
  label: "Elf",
  passive: elfPassive,
  stats: {
    HP: 10,
    damage: 2,
    startingMana: 3,
    focus: 1,
    range: "1 or 3",
    actions: 3,
  },
  classes: [
    {
      id: "Dark elf",
      traits: {
        primary: "Assassin",
        secondary: "Ranged DPS",
      },
      abilities: darkElfAbilities,
      image: "/img/elf/dark-elf/profile.jpg",
    },
    {
      id: "Wood elf",
      traits: {
        primary: "Ranged DPS",
        secondary: "Healer",
      },
      abilities: woodElfAbilities,
      image: "/img/elf/wood-elf/profile.png",
      description: `
      XX, a skilled archer with a heart burdened by loss, hails from the mystical Elven realm of Sylvaneth. 

      Guided by a deep connection with nature and driven by a desire to restore balance, XX now roams the woods surrounding Elysia, in search for new companions who will join XX cause.`,
    },
  ],
};

const menPassive: Ability[] = [
  {
    name: "Duelist",
    description: "Gain special from damage dealt by basic attacks.",
  },
  {
    name: "Overly aggressive",
    description: "Can't enter a defensive stance after moving.",
  },
];

const paladinAbilities: Ability[] = [
  {
    name: "Unholy retribution",
    description: "Heal target. If the target is an enemy, deal damage instead.",
    image: "/img/men/paladin/unholy-retribution.jpg",
  },
  {
    name: "Divine strike",
    description: "Deal damage to target. Heal for the same amount.",
    image: "/img/men/paladin/divine-strike.webp",
  },
  {
    name: "Stars aligned",
    description:
      "Remove all de-buffs from all adjacent companions\n...and heal them\n...and give them an extra action.",
    image: "/img/men/paladin/stars-aligned.webp",
  },
  {
    name: "Solar flare",
    description:
      "Cast a solar flare from your shield and deal massive damage in a straight line.",
    image: "/img/men/paladin/solar-flare.webp",
  },
];

const commanderAbilities: Ability[] = [
  {
    name: "Riposte",
    description:
      "Block all melee damage and taunt adjacent enemies.\n...And reflect all damage blocked.\n...And heal for damage blocked.",
    image: "/img/men/commander/riposte.jpg",
  },
  {
    name: "Elysian toxin",
    description:
      "Poison your blade with Elysian poison. The next target you attack will take extra damage from all basic attacks.",
    image: "/img/men/commander/elysian-toxin.jpg",
  },
  {
    name: "Titanic blow",
    description: "Deal damage to your target and stun them for 1 turn.",
    image: "/img/men/commander/titanic-blow.jpg",
  },
  {
    name: "Elysian tactics",
    description:
      "Use your knowledge as a commander to inspire your companions, granting you all actions and bonus damage this turn.",
    image: "/img/men/commander/elysian-tactics.jpg",
  },
];

const rangerAbilities: Ability[] = [
  {
    name: "Steel traps",
    description: "Set a steel trap that stuns and deals damage",
    image: "/img/men/ranger/steel-traps.jpg",
  },
  {
    name: "Focused shot",
    description: "Gain extra range and damage this turn.",
    image: "/img/men/ranger/focused-shot.jpg",
  },
  {
    name: "Agile archer",
    description: "Dash in any direction and fire your bow.",
    image: "/img/men/ranger/agile-archer.jpg",
  },
  {
    name: "Hunting dogs",
    description: "Summon your hunting dogs.",
    image: "/img/men/ranger/hunting-dogs.jpg",
  },
];

export const man: Race = {
  id: "man",
  label: "Human",
  passive: menPassive,
  stats: {
    HP: 15,
    damage: 2,
    startingMana: 1,
    defense: 1,
    range: "1 or 2",
    actions: 3,
  },
  classes: [
    {
      id: "paladin",
      traits: {
        primary: "Bruiser",
        secondary: "Healer",
      },
      abilities: paladinAbilities,
      image: "/img/men/paladin/profile.webp",
    },
    {
      id: "commander",
      traits: {
        primary: "Melee DPS",
        secondary: "Buffer",
      },
      abilities: commanderAbilities,
      image: "/img/men/commander/profile.jpg",
    },
    {
      id: "ranger",
      traits: {
        primary: "Melee DPS",
        secondary: "Buffer",
      },
      abilities: rangerAbilities,
      image: "/img/men/ranger/profile.jpg",
    },
  ],
};

const wizardPassive: Ability[] = [
  {
    name: "Magician",
    description: "Bonus stat that can either heal or deal damage.",
  },
  {
    name: "Old",
    description: "Can't enter a defensive stance.",
  },
];

const elementalistAbilities: Ability[] = [
  {
    name: "Zephyrus",
    description: "Deal damage to and stun all enemies in a small area.",
    image: "/img/wizard/elementalist/zephyrus.jpg",
  },
  {
    name: "Seismic force",
    description: "Elevate the ground at target location.",
    image: "/img/wizard/elementalist/seismic-force.jpg",
  },
  {
    name: "Frostbite",
    description: "Deal damage to and stun the target. Has extra range.",
    image: "/img/wizard/elementalist/frostbite.jpg",
  },
  {
    name: "Unstoppable inferno",
    description:
      "Deal damage to all adjacent at the start and at the end of your turn for multiple turns.",
    image: "/img/wizard/elementalist/unstoppable-inferno.png",
  },
];

const voidMageAbilities: Ability[] = [
  {
    name: "Enter the void",
    description: "Send an enemy into the void. Gain no loot from this enemy.",
    image: "/img/wizard/void-mage/into-the-void.jpg",
  },
  {
    name: "A forgotten force",
    description:
      "Deal damage to and reduce their damage dealt until the end of the battle.",
    image: "/img/wizard/void-mage/a-forgotten-force.jpg",
  },
  {
    name: "Ancient scrolls",
    description:
      "Summon a demon from the void that will perish after this battle.",
    image: "/img/wizard/void-mage/ancient-scrolls.png",
  },
  {
    name: "Illusive reality ",
    description:
      "Pull out enemies previously sent into the void and hurl them towards the enemy.",
    image: "/img/wizard/void-mage/illusive-reality.jpg",
  },
];

const shapeShifterAbilities: Ability[] = [
  {
    name: "Bear",
    description: "Turn into a bear.",
    image: "/img/wizard/shape-shifter/bear.jpg",
  },
  {
    name: "Lion",
    description: "Turn into a lion.",
    image: "/img/wizard/shape-shifter/lion.jpg",
  },
  {
    name: "Wolf",
    description: "Turn into a wolf.",
    image: "/img/wizard/shape-shifter/wolf.jpg",
  },
  {
    name: "Dragon",
    description: "Turn into a dragon.",
    image: "/img/wizard/shape-shifter/dragon.jpg",
  },
];

export const wizard: Race = {
  id: "wizard",
  label: "Wizard",
  passive: wizardPassive,
  stats: {
    HP: 15,
    damage: 2,
    startingMana: 5,
    magic: 1,
    range: "2",
    actions: 3,
  },
  classes: [
    {
      id: "elementalist",
      traits: {
        primary: "CC",
        secondary: "Ranged DPS",
      },
      abilities: elementalistAbilities,
      image: "/img/wizard/elementalist/profile.jpg",
    },
    {
      id: "void mage",
      traits: {
        primary: "Nuking",
        secondary: "Summoning",
      },
      abilities: voidMageAbilities,
      image: "/img/wizard/void-mage/profile.jpg",
    },
    {
      id: "shape shifter",
      traits: {
        primary: "Nuking",
        secondary: "Summoning",
      },
      abilities: shapeShifterAbilities,
      image: "/img/wizard/shape-shifter/profile.jpg",
    },
  ],
};
