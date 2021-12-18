<template>
    <v-row>
        <v-col
            v-for="place in places"
            :key="place.title"
            :cols="place.flex"
            >
            <v-card
                class="mx-auto my-12"
                max-width="400"
            >
                <v-img
                    height="100"
                    :src="place.src"
                ></v-img>

                <v-card-title 
                    v-text="place.title"></v-card-title>

                <v-card-text class="card-body">
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-icon small>mdi-star</v-icon>
                        <div class="my-1 ml-1 text-subtitle-4 des">0 (reviews)</div>
                    </v-row>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-icon small>mdi-map-marker</v-icon>
                        <div class="my-1 ml-1 text-subtitle-4 des" v-text="place.address"></div>
                    </v-row>
                </v-card-text>
                <v-card-actions class="action">
                     <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-icon small>mdi-map-marker</v-icon>
                        <div class="ml-1">Compare</div>
                    </v-row>
                    <v-btn
                        class="action-btn"
                        outlined
                        text
                        small
                    >
                        Quotation
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>   
    </v-row>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
        places: [
            { 
                title: 'Hotel Bourbon Belo Horizonte Savas', 
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
                flex: 4, 
                value: 4.5, 
                address:'Serra, Belo Horizonte, MG' },
            { 
                title: 'Hotel Samba Betim', 
                src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
                flex: 4, 
                value:4.5, 
                address:'Centro, Betim, Minas Gerais' },
        ],
    }),
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600;700&family=Roboto:wght@100&display=swap');
.v-card__title {
    font-size: 1rem !important;
    padding: 10px 16px !important;
}
.v-icon {
    color: #78909c;
}
/* .v-card-title {
    margin: -10px 0 !important
} */
.row {
    margin: -5px !important;
    color: #78909c;
    font-family: 'Roboto', sans-serif;
}

/* .card-body {
    padding-top: 0px !important;
} */
/* .title {
    padding: 5px 16px !important;
} */
.mdi:before, .mdi-set {
    color: #78909c;
}
.action {
    display: flex;
    justify-content: space-between;
    font-size: 16px !important;
}
.action-btn {
    text-transform: none;
    color: #8197a1 !important;
    letter-spacing: 2px;
    font-size: 16px !important;
}
.v-card__actions{
    padding: 0 16px 16px 16px !important;
}
</style>