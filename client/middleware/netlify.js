import netlifyIdentity from '~/plugins/netlify/identity'
//import Vue from 'vue';
export default async function({ redirect }){
  if (process.client && window.location.hash && window.location.hash.indexOf('#invite_token=') === 0) {
    const token = window.location.hash.replace('#invite_token=', '')
  //  await netlifyIdentity.user.acceptInvite(token, `/M3}A7e@'"(.%K_a`, true)
  }

  if(netlifyIdentity.currentUser() == null){
    //console.log('netlifyIdentity', netlifyIdentity.currentUser())
    //console.log(netlifyIdentity)
    //redirect(301, '/login')
  }
  if(process.client){
    console.log('client')
  }
}
