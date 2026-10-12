// Game Info
setGameInfo({
    name: "Villagecraft",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/blank.png",                    // Link or path to an icon image for your game!
    ID: "GCRedux",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    log: {
        image: "images/oakLog.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    house: {
        image: "images/house.png",
    },
    villager: {
        image: "images/villager.png",
    },
    stick: {
        image: "images/stick.png",
    },
    axe: {
        image: "wip",
    },
    woodcutter: {
        image: "wip",
    },
    stone: {
        image: "wip",
    }
});

// Areas

addArea("o",                                            // Function for adding areas to your game
{
    name: "City State",
    image: "images/areas/cityState.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "Surface",
            unlocked: true,
            auto: ["woodcutter"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            resources: [
                {
                    id: "log",
                    time: [["", 0.5],["woodcutter", 0.45]],
                    probability: 50,
                },
                {
                    id: "dirt",
                    time: [["", 0.6],["woodcutter", 0.45]],
                    probability: 50,
                }
            ]
        },
    ],


    crafts: [
        {
            name: "log",
            desc: "Used to craft planks",
            type: "display",
            cost: [["log", 0]],
        },
        {
            name: "dirt",
            desc: "Used to build a dirt hut",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "stone",
            desc: "Used to craft houses and tools",
            type: "display",
            cost: [["stone", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            amount: 4,
            cost: [["log", 1]],
        },
        {
            name: "stick",
            desc: "Used to craft tools for villagers",
            type: "craft",
            amount: 4,
            cost: [["planks", 2]],
        },
        {
            name: "axe",
            desc: "Used to make villagers gather materials from the surface",
            type: "craft",
            cost: [["planks", 3], ["stick", 2]],
        },
        {
            name: "crafting table",
            desc: "Required to build a dirt hut",
            type: "craft",
            cost: [["planks", 4]],
        },
        {
            name: "door",
            desc: "Required to build a dirt hut",
            type: "craft",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "house",
            desc: "required to get villagers",
            type: "craft",
            cost: [["log", 20], ["door", 1]],
        },
        {
            name: "villager",
            desc: "working class person",
            type: "craft",
            cost: [["house", 1], ["crafting table", 1]],
        },
        {
            name: "woodcutter",
            desc: "gathers materials from the surface",
            type: "craft",
            cost: [["villager", 1], ["axe", 1]],
        }
            
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}