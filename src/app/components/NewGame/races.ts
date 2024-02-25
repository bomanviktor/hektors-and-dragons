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
  defense?: string;
  magic?: string;
  focus?: string;
  strength?: string;
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
    name: "Defense",
    description: "Defensive stance that reduces incoming damage next turn.",
  },
];

const berserkerAbilities: Ability[] = [
  {
    name: "Mountain Technology",
    description: "Fire your pistol. Boom, headshot.",
    image: "/img/dwarf/berserker/gadgeteer.jpg",
  },
  {
    name: "Balls of Steel",
    description: "Leap forward and stun everyone in a small radius around you.",
    image: "/img/dwarf/berserker/balls-of-steel.png",
  },
  {
    name: "Berserker's Rage",
    description: "Multiply your damage for the rest of the turn.",
    image: "/img/dwarf/berserker/berserkers-rage.png",
  },
  {
    name: "Relentless Force",
    description:
      "Push an enemy backwards, dealing damage and stunning everyone in your path.",
    image: "/img/dwarf/berserker/relentless-force.png",
  },
];

const guardianAbilities: Ability[] = [
  {
    name: "Shield Wall",
    description: "Taunt enemies and take no damage from certain sources.",
    image: "/img/dwarf/guardian/shield-wall.png",
  },
  {
    name: "Stand United",
    description: "Increase your and an adjacent hero's defense.",
    image: "/img/dwarf/guardian/stand-united.png",
  },
  {
    name: "Rune Stone",
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

const dwarfDescription = `The Order's grasp, a vice upon his kin,
Their mines laid bare, their treasures worn thin.
With fiery spirit, he vows to fight,
And reclaim honor in the darkest night.
For justice calls, and honor demands,
A united front against tyrant's hands.`;

export const dwarf: Race = {
  id: "dwarf",
  label: "Dwarf",
  passive: dwarfPassive,
  stats: {
    HP: 21,
    damage: 7,
    defense: "1 to 6",
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
      description: dwarfDescription,
    },
    {
      id: "guardian",
      traits: {
        primary: "Tank",
        secondary: "CC",
      },
      abilities: guardianAbilities,
      image: "/img/dwarf/guardian/profile.png",
      description: dwarfDescription,
    },
  ],
};

const elfPassive: Ability[] = [
  {
    name: "Focus",
    description: "Increase your range for the rest of the turn.",
  },
];

const darkElfAbilities: Ability[] = [
  {
    name: "Parallel Realms",
    description:
      "Equip your daggers and enter the shadow realm. Replace all your spells with shadow versions.",
    image: "/img/elf/dark-elf/parallel-realms.jpg",
  },
  {
    name: "Back to Reality",
    description: "Equip your bow, enter the normal realm and heal yourself.",
    image: "/img/elf/dark-elf/back-to-reality.jpg",
  },
  {
    name: "Piercing Arrow",
    description: "Shoot an arrow that deals true damage.",
    image: "/img/elf/dark-elf/piercing-arrow.jpg",
  },
  {
    name: "Eternal Darkness",
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
    name: "Paralyzing Shot",
    description: "Deal damage to target and stun them.",
    image: "/img/elf/dark-elf/paralyzing-shot.jpg",
  },
  {
    name: "Shadow Blade",
    description:
      "Become invisible. The first attack breaks stealth and bonus damage.",
    image: "/img/elf/dark-elf/shadow-blade.jpg",
  },
  {
    name: "Elven Ghost ",
    description:
      "Enter an enhanced state in the shadow realm. Cast back to reality at the end of the turn.",
    image: "/img/elf/dark-elf/elven-ghost.jpg",
  },
];

const woodElfAbilities: Ability[] = [
  {
    name: "Elvish Medicine",
    description: "Heal yourself or adjacent companion.",
    image: "/img/elf/wood-elf/elvish-medicine.png",
  },
  {
    name: "Hail of Arrows",
    description: "Next ranged attack will hit multiple enemies.",
    image: "/img/elf/wood-elf/hail-of-arrows.webp",
  },
  {
    name: "Hawk-eye",
    description: "Fire arrow(s) with extra range and damage.",
    image: "/img/elf/wood-elf/hawk-eye.png",
  },
  {
    name: "One with Nature",
    description:
      "Become one with nature and fire extra lethal arrows towards the closest enemy.",
    image: "/img/elf/wood-elf/one-with-nature.jpg",
  },
];

const elfDescription = `In Sylvaneth's embrace, where whispers sigh,
She once danced 'neath the azure sky.
But the Order's greed, a relentless pyre,
Left her homeland scarred with fire.
With bow in hand, and eyes alight,
She seeks retribution in the cloak of night.`;

export const elf: Race = {
  id: "elf",
  label: "Elf",
  passive: elfPassive,
  stats: {
    HP: 13,
    damage: 7,
    focus: "1 to 6",
    range: "1 or 2",
    actions: 3,
  },
  classes: [
    {
      id: "Wood elf",
      traits: {
        primary: "Ranged DPS",
        secondary: "Healer",
      },
      abilities: woodElfAbilities,
      image: "/img/elf/wood-elf/profile.png",
      description: elfDescription,
    },
    // {
    //   id: "Dark elf",
    //   traits: {
    //     primary: "Assassin",
    //     secondary: "Ranged DPS",
    //   },
    //   abilities: darkElfAbilities,
    //   image: "/img/elf/dark-elf/profile.jpg",
    //   description: elfDescription,
    // },
  ],
};

const menPassive: Ability[] = [
  {
    name: "Strength",
    description: "Increase your damage for the rest of the turn.",
  },
];

const paladinAbilities: Ability[] = [
  {
    name: "Unholy Retribution",
    description: "Heal target. If the target is an enemy, deal damage instead.",
    image: "/img/men/paladin/unholy-retribution.jpg",
  },
  {
    name: "Divine Strike",
    description: "Deal damage to target. Heal for the same amount.",
    image: "/img/men/paladin/divine-strike.webp",
  },
  {
    name: "Stars Aligned",
    description:
      "Remove all de-buffs from all adjacent companions\n...and heal them\n...and give them an extra action.",
    image: "/img/men/paladin/stars-aligned.webp",
  },
  {
    name: "Solar Flare",
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
    name: "Elysian Toxin",
    description:
      "Poison your blade with Elysian poison. The next target you attack will take extra damage from all basic attacks.",
    image: "/img/men/commander/elysian-toxin.jpg",
  },
  {
    name: "Titanic Blow",
    description: "Deal damage to your target and stun them for 1 turn.",
    image: "/img/men/commander/titanic-blow.jpg",
  },
  {
    name: "Elysian Tactics",
    description:
      "Use your knowledge as a commander to inspire your companions, granting you all actions and bonus damage this turn.",
    image: "/img/men/commander/elysian-tactics.jpg",
  },
];

const rangerAbilities: Ability[] = [
  {
    name: "Steel Traps",
    description: "Set a steel trap that stuns and deals damage",
    image: "/img/men/ranger/steel-traps.jpg",
  },
  {
    name: "Focused Shot",
    description: "Gain extra range and damage this turn.",
    image: "/img/men/ranger/focused-shot.jpg",
  },
  {
    name: "Agile Archer",
    description: "Dash in any direction and fire your bow.",
    image: "/img/men/ranger/agile-archer.jpg",
  },
  {
    name: "Hunting Dogs",
    description: "Summon your hunting dogs.",
    image: "/img/men/ranger/hunting-dogs.jpg",
  },
];

const manDescription = `In the shadows he walks, a knight of old,
Haunted by memories, his heart grown cold.
Once loyal to Elysia's noble creed,
Betrayed by the Order, his wounds still bleed.
In the wilderness he roams, a lone crusade,
To confront his past, and the debt to be paid.`;

export const man: Race = {
  id: "man",
  label: "Human",
  passive: menPassive,
  stats: {
    HP: 21,
    damage: 7,
    strength: "1 to 6",
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
      description: manDescription,
    },
    {
      id: "ranger",
      traits: {
        primary: "Melee DPS",
        secondary: "Buffer",
      },
      abilities: rangerAbilities,
      image: "/img/men/ranger/profile.jpg",
      description: manDescription,
    },
    // {
    //   id: "commander",
    //   traits: {
    //     primary: "Melee DPS",
    //     secondary: "Buffer",
    //   },
    //   abilities: commanderAbilities,
    //   image: "/img/men/commander/profile.jpg",
    // },
  ],
};

const wizardPassive: Ability[] = [
  {
    name: "Magic",
    description: "Heal an ally or deal damage to a foe.",
  },
];

const elementalistAbilities: Ability[] = [
  {
    name: "Zephyr",
    description: "Deal damage to and stun all enemies in a small area.",
    image: "/img/wizard/elementalist/zephyrus.jpg",
  },
  {
    name: "Seismic Force",
    description: "Elevate the ground at target location.",
    image: "/img/wizard/elementalist/seismic-force.jpg",
  },
  {
    name: "Frostbite",
    description: "Deal damage to and stun the target. Has extra range.",
    image: "/img/wizard/elementalist/frostbite.jpg",
  },
  {
    name: "Unstoppable Inferno",
    description:
      "Deal damage to all adjacent at the start and at the end of your turn for multiple turns.",
    image: "/img/wizard/elementalist/unstoppable-inferno.png",
  },
];

const voidMageAbilities: Ability[] = [
  {
    name: "Enter the Void",
    description: "Send an enemy into the void. Gain no loot from this enemy.",
    image: "/img/wizard/void-mage/into-the-void.jpg",
  },
  {
    name: "A Forgotten Force",
    description:
      "Deal damage to and reduce their damage dealt until the end of the battle.",
    image: "/img/wizard/void-mage/a-forgotten-force.jpg",
  },
  {
    name: "Ancient Scrolls",
    description:
      "Summon a demon from the void that will perish after this battle.",
    image: "/img/wizard/void-mage/ancient-scrolls.png",
  },
  {
    name: "Illusive Reality ",
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

const wizardDescription = `In the tower tall, where secrets lie,
Lives the mage, with a gleam in his eye.
With ancient scrolls and whispered spells,
He wields his power where darkness dwells.
In shadows deep, his knowledge unfurls,
The mage commands the arcane worlds.`;

export const wizard: Race = {
  id: "wizard",
  label: "Wizard",
  passive: wizardPassive,
  stats: {
    HP: 13,
    damage: 7,
    magic: "1 to 6",
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
      description: wizardDescription,
    },
    {
      id: "void mage",
      traits: {
        primary: "Nuking",
        secondary: "Summoning",
      },
      abilities: voidMageAbilities,
      image: "/img/wizard/void-mage/profile.jpg",
      description: wizardDescription,
    },
    // {
    //   id: "shape shifter",
    //   traits: {
    //     primary: "Nuking",
    //     secondary: "Summoning",
    //   },
    //   abilities: shapeShifterAbilities,
    //   image: "/img/wizard/shape-shifter/profile.jpg",
    // },
  ],
};
