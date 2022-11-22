<template>
  <div id="statsId">
    <h1 id="title">Game Stats</h1>
    <div>
      <ul class="list-group">
      <li class="list-group-item">Temps moyen de jeu: {{ tempsMoyen }} minutes</li>
      <li class="list-group-item">nombre de tentatives moyennes: {{ nbTentativesMoyen }}</li>
      <li class="list-group-item">% de victoire: {{ pourcentageDeVictoires }}%</li>
      <li class="list-group-item">
        <table class="table table-stripped">
          <thead>
          <tr>
            <th scope="col">date</th>
            <th scope="col">nombre de tentatives</th>
            <th scope="col">temps de jeu</th>
            <th scope="col">resultat</th>
            <th scope="col">mot</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="ap in anciensParties">
            <td>{{ ap.date }}</td>
            <td>{{ ap.nbTentatives }}</td>
            <td>{{ ap.tempsDeJeu }}</td>
            <td>{{ ap.result }}</td>
            <td>{{ ap.mot }}</td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  data: function (){
    return {
      tempsMoyen: 0,
      nbTentativesMoyen: 0,
      pourcentageDeVictoires: 0,
      anciensParties: []
    }
  },
  computed: {

  }
}
</script>

<style scoped>
#title{
  text-align: center;
}


</style>