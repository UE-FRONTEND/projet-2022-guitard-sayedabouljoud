<template>
  <div class="keyboard">
    <div class="key1">
      <button class="btn" id="A" @click="tapLetter('a')">A</button>
      <button class="btn" id="Z" @click="tapLetter('z')">Z</button>
      <button class="btn" id="E" @click="tapLetter('e')">E</button>
      <button class="btn" id="R" @click="tapLetter('r')">R</button>
      <button class="btn" id="T" @click="tapLetter('t')">T</button>
      <button class="btn" id="Y" @click="tapLetter('y')">Y</button>
      <button class="btn" id="U" @click="tapLetter('u')">U</button>
      <button class="btn" id="I" @click="tapLetter('i')">I</button>
      <button class="btn" id="O" @click="tapLetter('o')">O</button>
      <button class="btn" id="P" @click="tapLetter('p')">P</button>
    </div>
    <div class="key2">
      <button class="btn" id="Q" @click="tapLetter('q')">Q</button>
      <button class="btn" id="S" @click="tapLetter('s')">S</button>
      <button class="btn" id="D" @click="tapLetter('d')">D</button>
      <button class="btn" id="F" @click="tapLetter('f')">F</button>
      <button class="btn" id="G" @click="tapLetter('g')">G</button>
      <button class="btn" id="H" @click="tapLetter('h')">H</button>
      <button class="btn" id="J" @click="tapLetter('j')">J</button>
      <button class="btn" id="K" @click="tapLetter('k')">K</button>
      <button class="btn" id="L" @click="tapLetter('l')">L</button>
      <button class="btn" id="M" @click="tapLetter('m')">M</button>
    </div>
    <div class="key3">
      <button class="btn" id="W" @click="tapLetter('w')">W</button>
      <button class="btn" id="X" @click="tapLetter('x')">X</button>
      <button class="btn" id="C" @click="tapLetter('c')">C</button>
      <button class="btn" id="V" @click="tapLetter('v')">V</button>
      <button class="btn" id="B" @click="tapLetter('b')">B</button>
      <button class="btn" id="N" @click="tapLetter('n')">N</button>
      <button class="btn btn-suppr" id="Suppr" @click="tapSuppr">Supp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  methods: {
    tapLetter(val){
      this.$emit("letter",val)
    },
    tapSuppr(){
      this.$emit("suppr")
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
.btn-suppr{
  border: 1px solid black;
  height:50px;
  width:70px;
}

</style>