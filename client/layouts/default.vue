<template>
  <div class="page-container">
    <md-app>


      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="//swaip.fr/wp-content/uploads/2018/01/cropped-swaip-150x150.png" class="brand-logo"/>
        </md-toolbar>

        <md-list>
          <md-list-item to="customers">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Clients</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-content>

          <nuxt />
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    /*max-height: 400px;*/
    border: 1px solid rgba(#000, .12);
  }

  .md-toolbar > .brand-logo{
      margin:0 auto;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
