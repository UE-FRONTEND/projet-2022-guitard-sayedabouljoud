<template>
  <div v-if="show1" class="modal+" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">ATTENTION!</h5>
        </div>
        <div class="modal-body">
          <p>Ètes vous sur de vouloir abandonner le jeu?
            <br/>Celui ci se considère une defaite.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Non</button>
          <button type="button" class="btn btn-primary" @click="$emit('forf')">Abandon</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Abandon",
  props: {
    show1: Boolean
  }
}
</script>

<style scoped>

</style>