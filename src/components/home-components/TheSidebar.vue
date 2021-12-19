<template>
    <div>
        <v-navigation-drawer
            width="300"
            class="px-5 py-3"
        >
            <v-list-item class="px-0 list-search">
                <v-list-item-title class="title-search-sidebar">Filter</v-list-item-title>

                <div class="btnsidebar"
                    @click="offSidebar()"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </div>
            </v-list-item>

            <v-select
                :items="items"
                outlined
                label="Event purpose"
                prepend-inner-icon="small mdi-triangle-outline"
            >
            </v-select>

            <v-text-field
                outlined
                color="#546E7A"
                label="Number of attendees"
                prepend-inner-icon="mdi-account-multiple"
            >
            </v-text-field>

            <v-text-field
                label="City"
                outlined
                color="#546E7A"
                prepend-inner-icon="mdi-map-search"
            >
            </v-text-field>

            <v-slider
                color="orange"
                label="DISTANCE:"
                min="1"
                max="100"
                value="20"
                thumb-label
                >
            </v-slider>
            <v-text-field
                outlined
                color="#546E7A"
                label="Venue name"
                prepend-inner-icon="mdi-account-search"
            >
            </v-text-field>

            <v-list-item class="px-0 list-search">
                <v-list-item-title class="sub title-search-sidebar">Dates</v-list-item-title>
            </v-list-item>

            <v-text-field
                outlined
                color="#546E7A"
                label="Date and time"
                prepend-inner-icon="mdi-calendar-range"
            >
            </v-text-field>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'TheSidebar',
    data () {
        return {
            items: ['Brainstorm sesions', 'Congress', 'Drink', 'Forum', 'Gala', 'Hackathon'],
        }
    },
    methods: {
        offSidebar() {
            this.$emit('off', false);
        },
    }
}
</script>

<style scoped>
.v-navigation-drawer {
    border: 1px solid rgb(235, 233, 233)
}
.btnsidebar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #F5F6F8;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
}
.footer {
    width: 300px;
    height: 100px;
    position: sticky;
    bottom: 0;
}
.v-navigation-drawer {
    transform: none !important
}
.title-search-sidebar {
    font-family: 'Quicksand', 'sans-serif';
    font-size: 28px !important;
    font-weight: 600;
    color: #3c4d57;
}
.sub {
    font-size: 22px !important;
}
.list-search {
    margin: 15px 0;
}

.off-sidebar {
    height: 30px !important;
    min-width: 3px !important;
}
</style>