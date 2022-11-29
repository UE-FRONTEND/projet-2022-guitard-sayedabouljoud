<template>
  <div>
    <h1 style="text-align: center">Découvre le mot !</h1>
    <hr/>
    <input id="text" type="text" v-model="txt"/>
    <input id="btn" type="button" class="btn btn-primary" value="Valider"/>
    <input id="btn" type="button" class="btn btn-primary" value="Abandoner"/>
    <br/>
    <timer/>
  </div>
</template>

<script>
import axios from "axios";
import Timer from "@/composants/Timer";

export default {
  name: "Game",
  components: {
    Timer
  },
  data: function(){
    return{
      word: ""
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
</style>