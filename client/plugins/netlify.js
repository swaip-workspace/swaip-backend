import Vue from 'vue'
import NetlifyAPI from 'netlify';
const _ = require('lodash');

let api = new NetlifyAPI('8ea2bf0e91983a012e2e306ac00180c1ecf9687108d7b9c877bc33cd68d1bb78')
api.getSiteByName = async (name) => {
  const sites = await api.listSites();
  const site = _.filter(sites, (site) => {
    return site.name == name;
  })
  return site.length > 0 ? site[0] : false;
}
api.deleteAllSpaces = async () => {
  const sites = await api.listSites();
  const spaces = _.filter(sites, (site) => {
    return site.name.indexOf('swaip-space') > -1;
  })
  for(const index in spaces){
    const space = spaces[index];
    await api.deleteSite({ site_id:space.site_id });
  }
  return spaces
}
Vue.prototype.$netlifyApi = api
