<template>
  <div id="netlify-modal">
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Login</md-dialog-title>
      <login />
    </md-dialog>
  </div>
</template>

<script>
export default{
  components:{
    'login': () => import('~/components/modals/identity/login.vue')
  },
  props:{
    title:{
      type:String,
      default:'Login'
    },
    dialog:{
      type:String,
      default:'login'
    }
  },
  data(){
    return {
      showDialog:false
    }
  }
}
</script>
