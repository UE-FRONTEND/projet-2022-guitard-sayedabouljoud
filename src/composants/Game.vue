<template>
  <abandon :show1="showModal" @close="showModal = false"/>
  <div class="game_container">
    <h1 style="text-align: center">Découvre le mot !</h1>
    <hr/>
    <abandon :show1="showModal1" @close="showModal1 = false" @forf="showModal1 = false; showModal2 = true"/>
    <forfait :show2="showModal2" @home="showModal2 = false" :mot="this.wordToFind"/>
    <div class="game">
      <div class="play">
        <input id="text" type="text" v-model="txt" maxlength="5" @keyup.enter="addWord"/>
        <input id="btn" type="button" class="btn btn-primary" :disabled="txt.length !=5" value="Valider" @click="addWord"/>
        <input id="btn" type="button" class="btn btn-danger" value="Abandoner" @click="showModal = true"/>
        <div class="result">
          <timer class="timer"/>
          <a class="tentatives">Tentatives restantes : {{count}}</a>
        </div>
        <keyboard class="keyboard"/>
        <a class="test">{{this.wordToFind}}</a>
      </div>
      <div class="view">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th colspan="5" style="color:black;text-transform: none">Tentatives</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="i in words" :key="i">
            <td v-for="j in 5" :key="j" v-bind:id="i + j" v-bind:style="colourize(i)">
              {{i.charAt(j-1)}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Timer from "@/composants/Timer";
import Keyboard from "@/composants/Keyboard";
import Abandon from "@/composants/Abandon";
import Forfait from "@/composants/Forfait";

export default {
  name: "Game",
  components: {
    Timer,
    Keyboard,
    Abandon,
    Forfait,
  },
  data: function(){
    return{
      txt:"",
      isWord: false,
      wordToFind: "",
      showModal: false,
      showModal1: false,
      showModal2: false,
      words: [],
      colors:[]
    }
  },
  methods:{
    addWord: async function(){
      await axios
          .post("https://vue-project-backend-eta.vercel.app/api/check-word",{
            word: this.txt
          })
          .then(response => this.isWord = response.data.isWord)
          .catch(e => {console.error(e)})
      if(!this.isWord){
        alert("Le mot n'est pas dans la liste")
      }
      else{
        this.words.push(this.txt)
        this.testPosition(this.txt)
        if(this.txt === this.wordToFind){
          alert("Vous avez gagné !")
        }
        console.log(this.colors[0][3])
      }
      this.txt = ""
    },
    testPosition: function(val){
      let color = []
      for(let i=0;i<5;i++){
        let lettre = val.charAt(i)
        if(lettre === this.wordToFind.charAt(i)){
          color.push(2)
        }
        else{
          for(let j=0;j<5;j++){
            if(lettre === this.wordToFind.charAt(j)){
              color.push(1)
            }
          }
          if(color.length == i) {
            color.push(0)
          }
        }
      }
      this.colors.push(color)
    },
    colourize: function(val){
      for(let i=0;i<5;i++){
        if(this.colors[val].at(i) === 0){
          let dnl = document.getElementById(this.words[val]+i)
          dnl.style.backgroundColor = "#D3D3D3"
        }
        else if(this.colors[val].at(i) === 1){
          let dnl = document.getElementById(this.words[val]+i)
          dnl.style.backgroundColor = "#FF8C00"
        }
        else if(this.colors[val].at(i) === 2){
          let dnl = document.getElementById(this.words[val]+i)
          dnl.style.backgroundColor = "#008000"
        }
      }
    }
  },
  mounted(){
      axios
          .get(" https://vue-project-backend-eta.vercel.app/api/new-game", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            }
          })
          .then(response => this.wordToFind = response.data.word)
  },
  computed:{
    count(){
      return 6 - this.words.length
    }
  }
}
</script>

<style scoped>
#text{
  width: 450px;
  height: 40px;
  justify-self: center;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  grid-column: 1/2;
  margin-top: 20px;
}
#btn{
  width: 450px;
  justify-self: center;
  grid-column: 1/2;
}
.keyboard{
  grid-column: 1/2;
  margin-top: 40px;
}

.result{
  grid-column: 1/2;
  display: grid;
  grid-template-columns: repeat(2,auto);
  margin-top: 40px;
}

.timer{
  grid-column: 1/2;
}

.tentatives{
  grid-column: 2/2;
}

.play{
  display: grid;
  grid-template-columns: repeat(1,550px);
  grid-gap: 20px;
  grid-column: 1/2;
}

.game{
  display: grid;
  grid-template-columns: repeat(2,auto);
}
.view{
  display: grid;
  grid-column: 2/2;
  margin-top: 20px;
}

.test{
  grid-column: 1/2;
}

.table, td{
  text-transform: uppercase;
  text-align: center;
  vertical-align: center;
  color: black;
}
</style>