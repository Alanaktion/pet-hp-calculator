<template>
    <div class="w-full bg-white max-w-lg p-4 rounded overflow-hidden shadow-lg">
        <p class="text-gray-700 mb-4">
            Calculate your pet's HP using <a class="text-red-700 underline" href="https://www.youtube.com/watch?v=9Jcxc-ddWKI" target="_blank">Polygon's incredible formula</a>!
        </p>
        <div class="sm:flex items-center mb-4">
            <div for="type" class="text-gray-700 text-sm font-bold mr-auto">
                Animal Type:
            </div>
            <select id="type" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="animalType">
                <option v-for="t in typeNames" :key="t" :value="t">
                    {{ t }}
                </option>
            </select>
        </div>
        <div class="sm:flex items-center mb-4">
            <div for="class" class="text-gray-700 text-sm font-bold mr-auto">
                Animal Class:
            </div>
            <select id="class" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="animalClass">
                <option v-for="c in classNames" :key="c" :value="c">
                    {{ c }}
                </option>
            </select>
        </div>

        <hr>

        <p class="text-gray-700 my-4">Observe your animal for a while (at least a few hours!)</p>
        <div class="sm:flex items-center mb-4">
            <div for="hours" class="text-gray-700 text-sm font-bold mr-auto">
                How long did you observe your animal (in hours)?
            </div>
            <input id="hours" type="number" step="any" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="hours" required>
        </div>

        <hr>

        <p class="text-gray-700 my-4">How many times did you observe these behaviors?</p>

        <h2 class="text-xl text-gray-800 my-4">Feeding</h2>
        <div class="sm:flex items-center mb-4">
            <label for="eating" class="text-gray-700 text-sm font-bold mr-auto">
                Eating normal food
            </label>
            <input id="eating" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="eating">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="hunting" class="text-gray-700 text-sm font-bold mr-auto">
                Hunting
            </label>
            <input id="hunting" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="hunting">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="scavenging" class="text-gray-700 text-sm font-bold mr-auto">
                Scavenging
            </label>
            <input id="scavenging" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="scavenging">
        </div>

        <h2 class="text-xl text-gray-800 my-4">Vocalizations</h2>
        <div class="sm:flex items-center mb-4">
            <label for="song" class="text-gray-700 text-sm font-bold mr-auto">
                Song
            </label>
            <input id="song" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="song">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="alarm" class="text-gray-700 text-sm font-bold mr-auto">
                Alarm call
            </label>
            <input id="alarm" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="alarm">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="funny" class="text-gray-700 text-sm font-bold mr-auto">
                Funny vocalization
            </label>
            <input id="funny" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="funny">
        </div>

        <h2 class="text-xl text-gray-800 my-4">Grooming</h2>
        <div class="sm:flex items-center mb-4">
            <label for="preening" class="text-gray-700 text-sm font-bold mr-auto">
                Preening
            </label>
            <input id="preening" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="preening">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="bathing" class="text-gray-700 text-sm font-bold mr-auto">
                Bathing
            </label>
            <input id="bathing" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="bathing">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="social" class="text-gray-700 text-sm font-bold mr-auto">
                Social Grooming
            </label>
            <input id="social" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="social">
        </div>

        <h2 class="text-xl text-gray-800 my-4">{{ animalClass }}</h2>
        <div class="sm:flex items-center mb-4">
            <label for="class1" class="text-gray-700 text-sm font-bold mr-auto">
                <template v-if="animalClass == 'Rogue'">
                    Mischieveous action
                </template>
                <template v-if="animalClass == 'Cleric'">
                    Soothing action
                </template>
                <template v-if="animalClass == 'Paladin'">
                    Loyal action
                </template>
                <template v-if="animalClass == 'Ranger'">
                    Clever action
                </template>
                <template v-if="animalClass == 'Barbarian'">
                    Impolite action
                </template>
            </label>
            <input id="class1" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="class1">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="class2" class="text-gray-700 text-sm font-bold mr-auto">
                <template v-if="animalClass == 'Rogue'">
                    Stealing something
                </template>
                <template v-if="animalClass == 'Cleric'">
                    Gentle touch
                </template>
                <template v-if="animalClass == 'Paladin'">
                    Doing good deeds
                </template>
                <template v-if="animalClass == 'Ranger'">
                    Gazing contemplatively
                </template>
                <template v-if="animalClass == 'Barbarian'">
                    Courageous feat
                </template>
            </label>
            <input id="class2" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="class2">
        </div>
        <div class="sm:flex items-center mb-4">
            <label for="class3" class="text-gray-700 text-sm font-bold mr-auto">
                <template v-if="animalClass == 'Rogue'">
                    Surprising the shit out of you
                </template>
                <template v-if="animalClass == 'Cleric'">
                    Appearing in your hour of need
                </template>
                <template v-if="animalClass == 'Paladin'">
                    Bringing something you didn't ask for
                </template>
                <template v-if="animalClass == 'Ranger'">
                    Ignoring you completely
                </template>
                <template v-if="animalClass == 'Barbarian'">
                    Not giving a shit about smart stuff
                </template>
            </label>
            <input id="class3" type="number" step="1" class="block bg-white border border-gray-400 px-3 py-2 rounded shadow leading-tight" v-model="class3">
        </div>

        <hr>

        <div class="my-4">
            <p class="text-xl text-center text-gray-800">Your pet's HP:</p>
            <p class="text-3xl text-red-700 text-center" v-if="hp">
                {{ hp }}
            </p>
            <p class="text-3xl text-gray-700 text-center" v-else>
                Incomplete
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animalType: 'Cat',
            animalClass: 'Rogue',

            hours: null,

            // Feeding
            eating: null,
            hunting: null,
            scavenging: null,

            // Vocalizations
            song: null,
            alarm: null,
            funny: null,

            // Grooming
            preening: null,
            bathing: null,
            social: null,

            // Class-specific
            class1: null,
            class2: null,
            class3: null,
        };
    },
    computed: {
        typeNames() {
            return Object.keys(this.$parent.types);
        },
        classNames() {
            return Object.keys(this.$parent.classes);
        },
        b() {
            return this.$parent.classes[this.animalClass][this.animalType];
        },
        u() {
            if (!this.hours) {
                return 0;
            }

            let u = 0;
            if (this.eating) {
                u += parseInt(this.eating);
            }
            if (this.hunting) {
                u += parseInt(this.hunting) * 2;
            }
            if (this.scavenging) {
                u += parseInt(this.scavenging) * 3;
            }
            if (this.song) {
                u += parseInt(this.song);
            }
            if (this.alarm) {
                u += parseInt(this.alarm);
            }
            if (this.funny) {
                u += parseInt(this.funny) * 2;
            }
            if (this.preening) {
                u += parseInt(this.preening);
            }
            if (this.bathing) {
                u += parseInt(this.bathing);
            }
            if (this.social) {
                u += parseInt(this.social) * 2;
            }
            if (this.class1) {
                u += parseInt(this.class1) * 3;
            }
            if (this.class2) {
                u += parseInt(this.class2) * 4;
            }
            if (this.class3) {
                u += parseInt(this.class3) * 5;
            }
            return u / this.hours;
        },
        m() {
            return this.$parent.types[this.animalType];
        },
        hp() {
            return Math.round(this.b + (this.u * this.m));
        },
    },
    mounted() {
        //
    },
}
</script>
