<template>
  <v-app>
    <v-system-bar class="header" app
      height="72"
    >
      <v-img
        id="logo"
        alt="Logo"
        class="shrink mr-2"
        contain
        src="../assets/Group 11.png" 
        transition="scale-transition"
        width="100"
      />
  
      <v-spacer></v-spacer>

      <v-app-bar-title color="black">{{fullName}}</v-app-bar-title>

      <img 
        id="avatar"
        src="../assets/image 2.png"
      />
      <img 
        class="ml-2 mt-1"
        src="../assets/arrow.png"
      />
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      width="250"
      :mini-variant.sync="mini"
      app
    >
      <v-list-item id="menu">
        <v-list-item-title>Menu</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
   
      <v-list-item-group
        color="primary"
      >
        <v-list-item class="no-sub" @click="goToHome()">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Admin Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="no-sub" @click="goToEvent()">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Event</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.action"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item class="sub-menu"
            v-for="child in item.items"
            :key="child.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       panel: [],
        drawer: null,
        mini: false,
        name: '',  
       items: [
        {
          action: 'mdi-silverware-fork-knife',
          items: [
            { title: 'Purposes' },
            { title: 'Activities' },
            { title: 'Placements' },
          ],
          title: 'Vanue Setting',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Administration',
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Comnunication',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Advertisement',
        },
      ],
    }),
    props: {
    fullName: { type: String }
  },
     methods: {
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },

      none () {
        this.panel = []
      },

      goToHome() {
        this.$router.push ({
          name:"dashboard",
        })
      },

      goToEvent() {
        this.$router.push ({
            name: 'event',
        })
      },
    },
  }
</script>

<style scoped>
.v-main {
  background: #F5F6F8;

}
.header {
  background-color: white !important;
   box-shadow: 0 1px 2px rgb(0, 0, 0, 0.2);
    z-index: 30
}

  .right-icon-out {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 4
  }

  #avatar {
    display: absolute;
    border-radius: 25px;
    margin-left:20px;
    right: 0
  }

  .v-app-bar-title {
    font-size: 14px
  }
   .v-navigation-drawer {
    padding-left: 10px;
  }
  
  .sub-menu .v-list-item__title {
    padding-left: 30px !important;
    font-weight: normal;
  }
  #logo {
    margin-left:10px ;
    margin-top:5px ;
  }
</style>

<style>
::-webkit-scrollbar {
    width: 0px
}
  #menu {
    margin-top: 30px;
    margin-bottom: 15px;
    min-height: 0px;
    padding: 0 12px !important
  }

  #menu .v-list-item__title {
    font-size: 20px !important;
    color: #546E7A;
    font-family: 'Quicksand', sans-serif;
    line-height: 25px !important;
    font-weight: bold;
  }
  
  .no-sub {
    padding: 0 12px !important
  }

  .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px !important;
    color: #546E7A;
  }

  .v-list-item__icon i {
    font-size: 22px !important
  }

  .theme--light.v-icon {
    color: #546E7A !important;
  }

  .v-list-group__header {
    padding: 0 12px !important;
  }

  .v-list-item__title {
    color: #546E7A;
    font-weight: 500;
    font-size: 14px !important
  }

  .v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item {
    padding-left: 16px !important
  }
</style>
