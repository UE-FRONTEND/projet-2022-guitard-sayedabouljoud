<template>
  <div v-if="show1" class="modal+" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <h5 class="modal-title">ATTENTION !</h5>
        </div>
        <div class="modal-body">
          <p>Êtes vous sur de vouloir abandonner le jeu ?
            <br/>Cela sera considéré comme une defaite.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button id="close" type="button" class="btn btn-secondary" @click="$emit('close')">Non</button>
          <button id="abandon" type="button" class="btn btn-primary" @click="$emit('forf')">Oui</button>
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