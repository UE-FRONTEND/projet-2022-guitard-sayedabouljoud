<template>
  <div v-if="showVictory" class="modal+" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Victoire !</h5>
        </div>
        <div class="modal-body">
          <p>Vous avez trouvé le mot "{{ mot }}".
            <br/>Merci de votre participation.</p>
        </div>
        <div class="modal-footer">
          <router-link :to="{name:'Home'}">
            <button type="button" class="btn btn-primary" @click="$emit('home')">Accueil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Victory",
  props:{
    showVictory: Boolean,
    mot: String
  }
}
</script>

<style scoped>

</style>