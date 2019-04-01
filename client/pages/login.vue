<template>
  <div class="blok">
      <img src="//swaip.fr/wp-content/uploads/2018/01/cropped-swaip-150x150.png" class="brand-logo"/>
      <!--<md-button @click="$netlifyIdentity.open('login')">LOGIN</md-button>-->
      <md-button>LOGIN</md-button>
  </div>
</template>
<script>
export default{
  layout:'simple',
  mounted(){
    console.log(this)
    //this.$netlifyIdentity.open('login')
  }
}
</script>

<style scoped>
.blok{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
}
</style>
