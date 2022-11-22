<template>
  <div>
    <h1 id="statTitle">Game Stats</h1>
    <div><ul class="list-group">
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
          <tr>
            <td>{{ anciensParties.date }}</td>
            <td>{{ anciensParties.nbTentatives }}</td>
            <td>{{ anciensParties.tempsDeJeu }}</td>
            <td>{{ anciensParties.result }}</td>
            <td>{{ anciensParties.mot }}</td>
          </tr>
          </tbody>
        </table>
      </li>
    </ul></div>
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
      anciensParties: [
        {
          date: 22/11/2022,
          nbTentatives: 5,
          tempsDeJeu: 10,
          result: true,
          mot: 'hello'
        }
      ]
    }
  }
}
</script>

<style scoped>
.statTitle{
  text-align: center;
}

</style>