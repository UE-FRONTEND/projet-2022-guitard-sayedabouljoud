<template>
  <div id="home">
    <h2>Bienvenue sur Découvre le mot !</h2>
    <p>Développé par Alexandre Guitard & Adam Sayed Abouljoud</p>
    <br/>
    <router-link :to="{name:'Game'}">
      <input type="button" class="btn btn-primary mr-3" value="Nouvelle Partie"/>
    </router-link>
    <router-link :to="{name:'Stats'}">
      <input type="button" class="btn btn-primary" value="Anciennes Parties"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
#home{
  text-align: center;
}

</style>