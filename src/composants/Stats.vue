<template>
  <div id="statsId">
    <div class="head">
      <router-link :to="{name:'Home'}">
        <button class="btn btn-secondary btn-back">Retour</button>
      </router-link>
      <h1 id="title">Statistiques</h1>
    </div>
    <div>
      <ul class="list-group">
      <li class="list-group-item">Temps moyen de jeu : {{ this.tempsMoyenJeu }}</li>
      <li class="list-group-item">Nombre de tentatives moyennes : {{ this.tentativesMoyenne }}</li>
      <li class="list-group-item">Pourcentage de victoires : {{ this.pourcentageVictoires }}%</li>
      <li class="list-group-item">
        <table class="table table-stripped">
          <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Nombre De Tentatives</th>
            <th scope="col">Temps De Jeu</th>
            <th scope="col">Resultats</th>
            <th scope="col">Mot</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="ap in this.getAll" v-bind:key="ap">
            <td>{{ ap.date.toLocaleString() }}</td>
            <td>{{ ap.attempts }}</td>
            <td>{{ showTime(ap.time.min)+":"+showTime(ap.time.sec) }}</td>
            <td>{{ result(ap.result) }}</td>
            <td>{{ ap.word }}</td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "Stats",
  data: function (){
    return {
      init: 0,
      anciensParties: []
    }
  },
  methods:{
    showTime: function(val){
      if(val<10){
        return "0"+ val
      }
      return val
    },
    result: function(val){
      if(val){
        return "Victoire"
      }
      else{
        return "Defaite"
      }
    }
  },
  computed: {
    ...mapGetters(['getAll']),
    tempsMoyenJeu(){
      let tm = 0
      let ts = 0
      let tt = 0
      if(this.getAll.length === 0){
        return this.init
      }
      for(let i=0;i<this.getAll.length;i++){
        tm += (this.getAll.at(i).time.min)*60
        ts += this.getAll.at(i).time.sec
        if(ts>=60){
          tm += 1
          ts = ts-60
        }
      }
      tm = tm*60
      tt = tm + ts
      tt = tt/this.getAll.length
      tm = Math.floor(tt/60)
      ts = tt- tm
      return tm + " minute(s) "+ ts +" secondes"
    },
    tentativesMoyenne(){
      let tm = 0
      if(this.getAll.length === 0){
        return this.init
      }
      for(let i=0;i<this.getAll.length;i++){
        tm += this.getAll.at(i).attempts
      }
      tm = Math.round(tm / this.getAll.length)
      return tm
    },
    pourcentageVictoires(){
      let tm = 0
      let victory = 0
      if(this.getAll.length === 0){
        return this.init
      }
      for(let i=0;i<this.getAll.length;i++){
        if(this.getAll.at(i).result === true){
          victory ++
        }
      }
      tm = Math.round(((victory/this.getAll.length) * 100))
      return tm
    }
  }
}
</script>

<style>
#title{
  text-align: center;
}

.head{
  overflow: hidden;
  align-content: center;
}

.btn-back{
  float: left;
  margin-top: 5px;
  display: flex;
}

</style>