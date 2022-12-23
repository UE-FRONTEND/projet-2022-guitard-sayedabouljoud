<template>
  <abandon :show1="showModal1" @close="showModal1 = false" @forf="showModal1 = false; showModal2 = true"/>
  <forfait :show2="showModal2" @home="showModal2 = false" :mot="this.word"/>
  <div class="game container">
    <h1 style="text-align: center">Découvre le mot !</h1>
    <hr/>
    <div class="row">
      <div class="col">
        <input id="text" type="text" v-model="txt"/>
        <input id="btn" type="button" class="btn btn-primary" value="Valider"/>
        <input id="btn" type="button" class="btn btn-primary" value="Abandoner" @click="showModal1 = true"/>
        <br/>
        <timer/>
      </div>

      <div class="col">
        <keyboard class="keyboard"/>
        <a>{{this.word}}</a>
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
      word: "",
      showModal1: false,
      showModal2: false
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
          .then(response => this.word = response.data.word)
  }
}
</script>

<style scoped>
#text{
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}
#btn{
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}
.keyboard{

}
</style>