<template>
  <div id="clock">
    <span>{{showTime(this.min)}}</span>:<span>{{showTime(this.sec)}}</span>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props:{
    time: Boolean,
    stop: Boolean
  },
  data: function (){
    return{
      min:10,
      sec:0,
      idTimer: undefined
    }
  },
  methods: {
    decr: function () {
      if(this.min == 0 && this.sec == 0){
        clearInterval()
        return this.$emit('stop')
      }
      else if(this.sec == 0){
        this.min --
        this.sec = 59
      }
      else if(this.stop == true){
        clearInterval()
      }
      else{
        this.sec --
      }
      this.$emit('time', {min: this.min, sec:this.sec})
    },
    showTime: function(val){
      if(val<10){
        return "0"+ val
      }
      return val
    },
    bip: function(){
      setInterval(this.decr,1000)
    }
  },
  mounted(){
    this.bip()
  }
}
</script>

<style scoped>

</style>