<template>
  <div class="keyboard">
    <div class="key1">
      <button class="btn" id="A" @click="tapLetter('A')">A</button>
      <button class="btn" id="Z" @click="tapLetter('Z')">Z</button>
      <button class="btn" id="E" @click="tapLetter('E')">E</button>
      <button class="btn" id="R" @click="tapLetter('R')">R</button>
      <button class="btn" id="T" @click="tapLetter('T')">T</button>
      <button class="btn" id="Y" @click="tapLetter('Y')">Y</button>
      <button class="btn" id="U" @click="tapLetter('U')">U</button>
      <button class="btn" id="I" @click="tapLetter('I')">I</button>
      <button class="btn" id="O" @click="tapLetter('O')">O</button>
      <button class="btn" id="P" @click="tapLetter('P')">P</button>
    </div>
    <div class="key2">
      <button class="btn" id="Q" @click="tapLetter('Q')">Q</button>
      <button class="btn" id="S" @click="tapLetter('S')">S</button>
      <button class="btn" id="D" @click="tapLetter('D')">D</button>
      <button class="btn" id="F" @click="tapLetter('F')">F</button>
      <button class="btn" id="G" @click="tapLetter('G')">G</button>
      <button class="btn" id="H" @click="tapLetter('H')">H</button>
      <button class="btn" id="J" @click="tapLetter('J')">J</button>
      <button class="btn" id="K" @click="tapLetter('K')">K</button>
      <button class="btn" id="L" @click="tapLetter('L')">L</button>
      <button class="btn" id="M" @click="tapLetter('M')">M</button>
    </div>
    <div class="key3">
      <button class="btn" id="W" @click="tapLetter('W')">W</button>
      <button class="btn" id="X" @click="tapLetter('X')">X</button>
      <button class="btn" id="C" @click="tapLetter('C')">C</button>
      <button class="btn" id="V" @click="tapLetter('V')">V</button>
      <button class="btn" id="B" @click="tapLetter('B')">B</button>
      <button class="btn" id="N" @click="tapLetter('N')">N</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  methods: {
    tapLetter(val){
      this.$emit("letter",val)
    }
  }
}
</script>

<style scoped>
.btn{
  border: 1px solid black;
  height:50px;
  width:50px;
}
</style>