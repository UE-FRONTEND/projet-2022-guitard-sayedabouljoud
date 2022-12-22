<template>
  <abandon :show1="showModal" @close="showModal = false"/>
  <div class="game container">
    <h1 style="text-align: center">Découvre le mot !</h1>
    <hr/>
    <div class="row">
      <div class="col">
        <input id="text" type="text" v-model="txt"/>
        <input id="btn" type="button" class="btn btn-primary" value="Valider"/>
        <input id="btn" type="button" class="btn btn-primary" value="Abandoner" @click="showModal = true"/>
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

export default {
  name: "Game",
  components: {
    Timer,
    Keyboard,
    Abandon
  },
  data: function(){
    return{
      word: "",
      showModal: false
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