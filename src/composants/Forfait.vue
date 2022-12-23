<template>
  <div v-if="show2" class="modal+" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">DOMMAGE!</h5>
        </div>
        <div class="modal-body">
          <p>Le mot etait "{{ mot }}".
            <br/>Bonne chance pour la prochaine fois.</p>
        </div>
        <div class="modal-footer">
          <router-link :to="{name:'Home'}">
            <button type="button" class="btn btn-primary" @click="$emit('home')">Acceuil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forfait",
  props: {
    show2: Boolean,
    mot: String,
  }
}
</script>

<style scoped>

</style>