<template>
  <div>
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
    this.client = new NetlifyAPI('8ea2bf0e91983a012e2e306ac00180c1ecf9687108d7b9c877bc33cd68d1bb78')
    console.log(this.client)

  },

  methods:{
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
