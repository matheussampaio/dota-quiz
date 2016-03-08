(function() {

  const items = [
    {
      "name": "Abyssal Blade",
      "requirements": [
        "Sacred Relic",
        "Skull Basher"
      ]
    },
    {
      "name": "Aether Lens",
      "requirements": [
        "Recipe",
        "Energy Booster",
        "Ring of Health"
      ]
    },
    {
      "name": "Aghanim's Scepter",
      "requirements": [
        "Point Booster",
        "Ogre Club",
        "Blade of Alacrity",
        "Staff of Wizardry"
      ]
    },
    {
      "name": "Arcane Boots",
      "requirements": [
        "Boots of Speed",
        "Energy Booster"
      ]
    },
    {
      "name": "Armlet of Mordiggian",
      "requirements": [
        "Helm of Iron Will",
        "Gloves of Haste",
        "Blades of Attack",
        "Recipe"
      ]
    },
    {
      "name": "Assault Cuirass",
      "requirements": [
        "Platemail",
        "Hyperstone",
        "Chainmail",
        "Recipe"
      ]
    },
    {
      "name": "Band of Elvenskin"
    },
    {
      "name": "Battle Fury",
      "requirements": [
        "Claymore",
        "Broadsword",
        "Perseverance",
        "Quelling Blade"
      ]
    },
    {
      "name": "Belt of Strength"
    },
    {
      "name": "Black King Bar",
      "requirements": [
        "Mithril Hammer",
        "Ogre Club",
        "Recipe"
      ]
    },
    {
      "name": "Blade Mail",
      "requirements": [
        "Broadsword",
        "Chainmail",
        "Robe of the Magi"
      ]
    },
    {
      "name": "Blade of Alacrity"
    },
    {
      "name": "Blades of Attack"
    },
    {
      "name": "Blink Dagger"
    },
    {
      "name": "Bloodstone",
      "requirements": [
        "Soul Booster",
        "Soul Ring",
        "Recipe"
      ]
    },
    {
      "name": "Boots of Speed"
    },
    {
      "name": "Boots of Travel",
      "requirements": [
        "Boots of Speed",
        "Recipe"
      ]
    },
    {
      "name": "Bracer",
      "requirements": [
        "Circlet",
        "Gauntlets of Strength",
        "Recipe"
      ]
    },
    {
      "name": "Broadsword"
    },
    {
      "name": "Buckler",
      "requirements": [
        "Chainmail",
        "Iron Branch",
        "Recipe"
      ]
    },
    {
      "name": "Butterfly",
      "requirements": [
        "Eaglesong",
        "Talisman of Evasion",
        "Quarterstaff"
      ]
    },
    {
      "name": "Chainmail"
    },
    {
      "name": "Circlet"
    },
    {
      "name": "Claymore"
    },
    {
      "name": "Cloak"
    },
    {
      "name": "Crimson Guard",
      "requirements": [
        "Vanguard",
        "Buckler",
        "Recipe"
      ]
    },
    {
      "name": "Crystalys",
      "requirements": [
        "Broadsword",
        "Blades of Attack",
        "Recipe"
      ]
    },
    {
      "name": "Daedalus",
      "requirements": [
        "Crystalys",
        "Demon Edge",
        "Recipe"
      ]
    },
    {
      "name": "Dagon",
      "requirements": [
        "Staff of Wizardry",
        "Null Talisman",
        "Recipe"
      ]
    },
    {
      "name": "Demon Edge"
    },
    {
      "name": "Desolator",
      "requirements": [
        "Mithril Hammer",
        "Mithril Hammer",
        "Recipe"
      ]
    },
    {
      "name": "Diffusal Blade",
      "requirements": [
        "Blade of Alacrity",
        "Blade of Alacrity",
        "Robe of the Magi",
        "Recipe"
      ]
    },
    {
      "name": "Divine Rapier",
      "requirements": [
        "Sacred Relic",
        "Demon Edge"
      ]
    },
    {
      "name": "Dragon Lance",
      "requirements": [
        "Ogre Club",
        "Quarterstaff"
      ]
    },
    {
      "name": "Drum of Endurance",
      "requirements": [
        "Bracer",
        "Robe of the Magi",
        "Recipe"
      ]
    },
    {
      "name": "Eaglesong"
    },
    {
      "name": "Energy Booster"
    },
    {
      "name": "Ethereal Blade",
      "requirements": [
        "Eaglesong",
        "Ghost Scepter"
      ]
    },
    {
      "name": "Eul's Scepter of Divinity",
      "requirements": [
        "Staff of Wizardry",
        "Sage's Mask",
        "Void Stone",
        "Recipe"
      ]
    },
    {
      "name": "Eye of Skadi",
      "requirements": [
        "Ultimate Orb",
        "Ultimate Orb",
        "Point Booster",
        "Orb of Venom"
      ]
    },
    {
      "name": "Force Staff",
      "requirements": [
        "Staff of Wizardry",
        "Ring of Regen",
        "Recipe"
      ]
    },
    {
      "name": "Gauntlets of Strength"
    },
    {
      "name": "Ghost Scepter"
    },
    {
      "name": "Glimmer Cape",
      "requirements": [
        "Shadow Amulet",
        "Cloak"
      ]
    },
    {
      "name": "Gloves of Haste"
    },
    {
      "name": "Guardian Greaves",
      "requirements": [
        "Mekansm",
        "Arcane Boots",
        "Recipe"
      ]
    },
    {
      "name": "Hand of Midas",
      "requirements": [
        "Gloves of Haste",
        "Recipe"
      ]
    },
    {
      "name": "Headdress",
      "requirements": [
        "Ring of Regen",
        "Iron Branch",
        "Recipe"
      ]
    },
    {
      "name": "Heart of Tarrasque",
      "requirements": [
        "Reaver",
        "Vitality Booster",
        "Recipe"
      ]
    },
    {
      "name": "Heaven's Halberd",
      "requirements": [
        "Sange",
        "Talisman of Evasion"
      ]
    },
    {
      "name": "Helm of Iron Will"
    },
    {
      "name": "Helm of The Dominator",
      "requirements": [
        "Helm of Iron Will",
        "Morbid Mask"
      ]
    },
    {
      "name": "Hood of Defiance",
      "requirements": [
        "Ring of Health",
        "Cloak",
        "Ring of Regen",
        "Ring of Regen"
      ]
    },
    {
      "name": "Hyperstone"
    },
    {
      "name": "Iron Branch"
    },
    {
      "name": "Iron Talon",
      "requirements": [
        "Quelling Blade",
        "Ring of Protection",
        "Recipe"
      ]
    },
    {
      "name": "Javelin"
    },
    {
      "name": "Linken's Sphere",
      "requirements": [
        "Perseverance",
        "Ultimate Orb",
        "Recipe"
      ]
    },
    {
      "name": "Lotus Orb",
      "requirements": [
        "Perseverance",
        "Platemail",
        "Recipe"
      ]
    },
    {
      "name": "Maelstrom",
      "requirements": [
        "Mithril Hammer",
        "Gloves of Haste",
        "Recipe"
      ]
    },
    {
      "name": "Magic Stick"
    },
    {
      "name": "Magic Wand",
      "requirements": [
        "Magic Stick",
        "Iron Branch",
        "Iron Branch",
        "Circlet"
      ]
    },
    {
      "name": "Manta Style",
      "requirements": [
        "Ultimate Orb",
        "Yasha",
        "Recipe"
      ]
    },
    {
      "name": "Mantle of Intelligence"
    },
    {
      "name": "Mask of Madness",
      "requirements": [
        "Morbid Mask",
        "Recipe"
      ]
    },
    {
      "name": "Medallion of Courage",
      "requirements": [
        "Chainmail",
        "Sage's Mask",
        "Recipe"
      ]
    },
    {
      "name": "Mekansm",
      "requirements": [
        "Buckler",
        "Headdress",
        "Recipe"
      ]
    },
    {
      "name": "Mithril Hammer"
    },
    {
      "name": "Mjollnir",
      "requirements": [
        "Hyperstone",
        "Maelstrom",
        "Recipe"
      ]
    },
    {
      "name": "Monkey King Bar",
      "requirements": [
        "Javelin",
        "Javelin",
        "Demon Edge"
      ]
    },
    {
      "name": "Moon Shard",
      "requirements": [
        "Hyperstone",
        "Hyperstone"
      ]
    },
    {
      "name": "Morbid Mask"
    },
    {
      "name": "Mystic Staff"
    },
    {
      "name": "Necronomicon",
      "requirements": [
        "Staff of Wizardry",
        "Belt of Strength",
        "Recipe"
      ]
    },
    {
      "name": "Null Talisman",
      "requirements": [
        "Circlet",
        "Mantle of Intelligence",
        "Recipe"
      ]
    },
    {
      "name": "Oblivion Staff",
      "requirements": [
        "Quarterstaff",
        "Robe of the Magi",
        "Sage's Mask"
      ]
    },
    {
      "name": "Octarine Core",
      "requirements": [
        "Mystic Staff",
        "Soul Booster"
      ]
    },
    {
      "name": "Ogre Club"
    },
    {
      "name": "Orb of Venom"
    },
    {
      "name": "Orchid Malevolence",
      "requirements": [
        "Oblivion Staff",
        "Oblivion Staff",
        "Recipe"
      ]
    },
    {
      "name": "Perseverance",
      "requirements": [
        "Ring of Health",
        "Void Stone"
      ]
    },
    {
      "name": "Phase Boots",
      "requirements": [
        "Boots of Speed",
        "Blades of Attack",
        "Blades of Attack"
      ]
    },
    {
      "name": "Pipe of Insight",
      "requirements": [
        "Hood of Defiance",
        "Headdress",
        "Recipe"
      ]
    },
    {
      "name": "Platemail"
    },
    {
      "name": "Point Booster"
    },
    {
      "name": "Poor Man's Shield",
      "requirements": [
        "Stout Shield",
        "Slippers of Agility",
        "Slippers of Agility"
      ]
    },
    {
      "name": "Power Treads Agi",
      "requirements": [
        "Boots of Speed",
        "Gloves of Haste",
        "Band of Elvenskin"
      ]
    },
    {
      "name": "Power Treads Str",
      "requirements": [
        "Boots of Speed",
        "Gloves of Haste",
        "Belt of Strength"
      ]
    },
    {
      "name": "Power Treads Int",
      "requirements": [
        "Boots of Speed",
        "Gloves of Haste",
        "Robe of the Magi"
      ]
    },
    {
      "name": "Quarterstaff"
    },
    {
      "name": "Quelling Blade"
    },
    {
      "name": "Radiance",
      "requirements": [
        "Sacred Relic",
        "Recipe"
      ]
    },
    {
      "name": "Reaver"
    },
    {
      "name": "Recipe"
    },
    {
      "name": "Refresher Orb",
      "requirements": [
        "Perseverance",
        "Perseverance",
        "Recipe"
      ]
    },
    {
      "name": "Ring of Aquila",
      "requirements": [
        "Wraith Band",
        "Ring of Basilius"
      ]
    },
    {
      "name": "Ring of Basilius",
      "requirements": [
        "Sage's Mask",
        "Ring of Protection"
      ]
    },
    {
      "name": "Ring of Health"
    },
    {
      "name": "Ring of Protection"
    },
    {
      "name": "Ring of Regen"
    },
    {
      "name": "Robe of The Magi"
    },
    {
      "name": "Rod of Atos",
      "requirements": [
        "Staff of Wizardry",
        "Staff of Wizardry",
        "Vitality Booster"
      ]
    },
    {
      "name": "Sacred Relic"
    },
    {
      "name": "Sage's Mask"
    },
    {
      "name": "Sange",
      "requirements": [
        "Ogre Club",
        "Belt of Strength",
        "Recipe"
      ]
    },
    {
      "name": "Sange And Yasha",
      "requirements": [
        "Sange",
        "Yasha"
      ]
    },
    {
      "name": "Satanic",
      "requirements": [
        "Reaver",
        "Helm of the Dominator",
        "Recipe"
      ]
    },
    {
      "name": "Scythe of Vyse",
      "requirements": [
        "Mystic Staff",
        "Ultimate Orb",
        "Void Stone"
      ]
    },
    {
      "name": "Shadow Amulet"
    },
    {
      "name": "Shadow Blade",
      "requirements": [
        "Claymore",
        "Shadow Amulet"
      ]
    },
    {
      "name": "Shiva's Guard",
      "requirements": [
        "Mystic Staff",
        "Platemail",
        "Recipe"
      ]
    },
    {
      "name": "Silver Edge",
      "requirements": [
        "Shadow Blade",
        "Sange",
        "Recipe"
      ]
    },
    {
      "name": "Skull Basher",
      "requirements": [
        "Javelin",
        "Belt of Strength",
        "Recipe"
      ]
    },
    {
      "name": "Slippers of Agility"
    },
    {
      "name": "Solar Crest",
      "requirements": [
        "Medallion of Courage",
        "Talisman of Evasion"
      ]
    },
    {
      "name": "Soul Booster",
      "requirements": [
        "Point Booster",
        "Vitality Booster",
        "Energy Booster"
      ]
    },
    {
      "name": "Soul Ring",
      "requirements": [
        "Ring of Regen",
        "Sage's Mask",
        "Recipe"
      ]
    },
    {
      "name": "Staff of Wizardry"
    },
    {
      "name": "Stout Shield"
    },
    {
      "name": "Talisman of Evasion"
    },
    {
      "name": "Tranquil Boots",
      "requirements": [
        "Boots of Speed",
        "Ring of Protection",
        "Ring of Regen"
      ]
    },
    {
      "name": "Ultimate Orb"
    },
    {
      "name": "Urn of Shadows",
      "requirements": [
        "Sage's Mask",
        "Gauntlets of Strength",
        "Gauntlets of Strength",
        "Recipe"
      ]
    },
    {
      "name": "Vanguard",
      "requirements": [
        "Ring of Health",
        "Vitality Booster",
        "Stout Shield"
      ]
    },
    {
      "name": "Veil of Discord",
      "requirements": [
        "Helm of Iron Will",
        "Null Talisman",
        "Robe of the Magi",
        "Robe of the Magi"
      ]
    },
    {
      "name": "Vitality Booster"
    },
    {
      "name": "Vladmir's Offering",
      "requirements": [
        "Morbid Mask",
        "Ring of Basilius",
        "Headdress",
        "Recipe"
      ]
    },
    {
      "name": "Void Stone"
    },
    {
      "name": "Wraith Band",
      "requirements": [
        "Circlet",
        "Slippers of Agility",
        "Recipe"
      ]
    },
    {
      "name": "Yasha",
      "requirements": [
        "Blade of Alacrity",
        "Band of Elvenskin",
        "Recipe"
      ]
    }
  ];

  class DataService {
    constructor(_, API) {
      this._ = _;
      this.API = API;
      this.items = items;
      this.itemsWithRequirements = this.items.filter(i => i.requirements && i.requirements.length > 0);

      this.USER_API = false;
    }

    getRandomQuiz() {
      if (this.USER_API) {
        console.log('getting random quiz from api...');
        return this.API.Quiz.query().$promise.then(data => data[0]);
      } else {
        console.log('getting random quiz from local...');
        return new Promise(resolve => {
          const item = _.cloneDeep(this._.sample(this.itemsWithRequirements));

          const wrong = _.cloneDeep(this._.sampleSize(this._.reject(this.items, i => i.name === item.name), 9 - item.requirements.length));

          const quiz = {
            target: item,
            wrong: wrong
          }

          quiz.target.requirements.forEach((e, i) => {
            quiz.target.requirements[i] = this.getItem(e);
          });

          resolve(quiz);
        });
      }
    }

    getItem(name) {
      const item = _.cloneDeep(this._.find(this.items, i => i.name.toLowerCase() === name.toLowerCase()));

      if (!item) {
        throw new Error(`Item not found: ${name}`);
      }

      return item;
    }
  }

  angular
    .module('dotaQuiz')
    .service('DataService', DataService);

})();
