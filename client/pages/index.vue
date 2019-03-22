<template>
  <div>
    <button v-on:click="login">Login</button>
    <button v-on:click="getSites">Sites</button>
    <button v-on:click="createNewSpace">Create New Space</button>
    <span v-html="message"></span>
  </div>
</template>
<script>
import NetlifyAPI from 'netlify';

export default{

  data(){
    return {
      message:'Rien',
      authenticator:null,
      client:null
    }
  },
  mounted(){
    this.client = new NetlifyAPI('f429bcf5209bde2a6f404474f3fe446992814b70fc222a3579a7682ddfb97710')
    console.log(this.client)

  },

  methods:{
    login(){
      this.authenticator = new this.$netlify.default ({site_id:"59b49caf-02d0-4028-bdb2-28df5be8def9"})
      ///this.$netlify.configure({site_id:"59b49caf-02d0-4028-bdb2-28df5be8def9"})
      this.authenticator.authenticate({provider:"github", scope: "user"}, async (err, data) => {
        console.log(err, data);
        if (err) {
          this.message = "Error Authenticating with GitHub: " + err
          return;
        }
        this.message = "Authenticated with GitHub. Access Token: " + data.token
      });
    },
    async getSites(){
      const sites = await this.client.listSites()
      console.log(sites);
    },
    async createNewSpace(name){
    //  console.log(this.client.createSite)
      const result = await this.client.createSite({
        body: {
          name: 'swaip2'
        }
      })
      console.log("result", result)
    }
  }
}
</script>
