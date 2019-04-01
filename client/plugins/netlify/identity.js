import netlifyIdentity from 'netlify-identity-widget'
import Vue from 'vue'
if(process.client){
  netlifyIdentity.init({
    container: '#netlify-modal'
  });
}
Vue.prototype.$netlifyIdentity = netlifyIdentity
export default netlifyIdentity
