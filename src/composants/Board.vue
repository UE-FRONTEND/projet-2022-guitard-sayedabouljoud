<template>
  <div id="letter-container" :class="{
    correct: color === 'correct',
    partiel: color === 'partiel',
    incorrect: color === 'incorrect',
  }">
    <p class="letter">
      {{letter}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Attempt",
  props:{
    letter: String,
    color: String
  }
}
</script>

<style scoped>

#letter-container {
  border: 2px solid black;
  border-radius: 2px;
  width: 50px;
  height: 50px;
}

.correct{
  background-color: green;
  border-color: green;
  color: white;
}

.partiel{
  background-color: orange;
  border-color: orange;
  color: white;
}

.incorrect{
  background-color: darkgray;
  border-color: darkgray;
  color: white;
}

.letter {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>