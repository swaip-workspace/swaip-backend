<template>
  <div>
     THEBLABLAAAA
  </div>
</template>


<script>



export default{

  data(){
    return {
      message:'Rien'
    }
  },
  mounted(){

  },
  methods:{
    async createNewSpace(name){
      /*const spaceName = `swaip-space-${name}`;

      console.log(this.$netlifyApi)

      await this.$netlifyApi.deleteAllSpaces();

      const result = await this.$netlifyApi.createSite({
        body: {
          name: spaceName,
          repo:{
            provider:"github",
            repo_path:"swaip-workspace/swaip-backend",
            repo_branch:"master"
          }
        }
      })*/
      /*const deploy = await this.$netlifyApi.createSiteDeploy({
        title:'First Deploy',
        deploy:{
          files: {"/space.html": "907d14fb3af2b0d4f18c2d46abe8aedce17367bd"},
          draft: true,
          async: true,
          functions: {}
        },
        site_id:result.site_id
      })*/

    }
  }
}
</script>
