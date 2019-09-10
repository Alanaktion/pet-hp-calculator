import Vue from 'vue';

// Types of animals with their multipliers
const types = {
    Dog: 2.4,
    Cat: 2,
    Fish: 3.1,
    Reptile: 2.8,
    Bird: 2.3,
    Equine: 2.4,
    'Small Mammal': 2.4,
    Bug: 2.3,
    Amphibian: 2.2,
    'Farm Animal': 2.2,
    Exotic: 2.8,
    Plant: 2.2,
};

// Classes with their type multipliers
const classes = {
    Rogue: {
        Dog: 35,
        Cat: 40,
        Fish: 20,
        Reptile: 30,
        Bird: 40,
        Equine: 45,
        'Small Mammal': 10,
        Bug: 1,
        Amphibian: 40,
        'Farm Animal': 50,
        Exotic: 35,
        Plant: 30,
    },
    Cleric: {
        Dog: 76,
        Cat: 75,
        Fish: 73,
        Reptile: 78,
        Bird: 79,
        Equine: 86,
        'Small Mammal': 51,
        Bug: 40,
        Amphibian: 77,
        'Farm Animal': 88,
        Exotic: 83,
        Plant: 68,
    },
    Paladin: {
        Dog: 116,
        Cat: 110,
        Fish: 126,
        Reptile: 126,
        Bird: 116,
        Equine: 126,
        'Small Mammal': 91,
        Bug: 77,
        Amphibian: 114,
        'Farm Animal': 126,
        Exotic: 130,
        Plant: 106,
    },
    Ranger: {
        Dog: 156,
        Cat: 144,
        Fish: 178,
        Reptile: 173,
        Bird: 154,
        Equine: 166,
        'Small Mammal': 131,
        Bug: 115,
        Amphibian: 150,
        'Farm Animal': 163,
        Exotic: 177,
        Plant: 143,
    },
    Barbarian: {
        Dog: 196,
        Cat: 179,
        Fish: 231,
        Reptile: 221,
        Bird: 191,
        Equine: 206,
        'Small Mammal': 171,
        Bug: 152,
        Amphibian: 187,
        'Farm Animal': 201,
        Exotic: 224,
        Plant: 181,
    },
};

// Add components dynamically
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

new Vue({
    el: '#app',
    data() {
        return {
            types,
            classes,
        }
    },
});
