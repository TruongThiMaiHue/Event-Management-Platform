<template>
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
    methods: {
        all () {
            this.panel = [...Array(this.items).keys()].map((k, i) => i)
        },
        none () {
            this.panel = []
        },
        goToHome() {
            this.$router.push ({
            path:"/admin/dashboard",
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
.v-navigation-drawer {
    padding-left: 10px;
}
.sub-menu .v-list-item__title {
    padding-left: 30px !important;
    font-weight: normal;
}
</style>
<style>
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
