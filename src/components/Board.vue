<template>
  <section id="board">
    <div id="controls">
      <div class="flex">
        <board />
      </div>
      <div class="flex">
        <div class="flex-1">
          <h1>Player 1</h1>
          <button
            v-on:click="game.playerWhite.dice.roll()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Roll
          </button>
          <div class="flex">
            <div
              v-for="(die, index) in game.playerWhite.dice.result"
              :key="index"
              class="flex-1"
            >
              {{ die }}
            </div>
          </div>
        </div>
        <div class="flex-1">
          <h1>Player 2</h1>
          <button
            v-on:click="game.playerBlack.dice.roll()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Roll
          </button>
          <div class="flex">
            <div
              v-for="(die, index) in game.playerBlack.dice.result"
              :key="index"
              class="flex-1"
            >
              {{ die }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Game from "@/game";

@Component
export default class Board extends Vue {
  game = new Game();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
