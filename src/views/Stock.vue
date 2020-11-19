<template>
  <v-container class="">
    <!-- Summary section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="TOTAL"
          subtitle="1,800"
          avatar_bg="#00a65a"
          avatar_icon="mdi-cart-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="SOLD-OUT"
          subtitle="12"
          avatar_bg="#f39c12"
          avatar_icon="mdi-flask-empty-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="RETURN"
          subtitle="2"
          avatar_bg="#dd4b39"
          avatar_icon="mdi-keyboard-return"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="TOTAL"
          subtitle="101"
          avatar_bg="#00c0ef"
          avatar_icon="mdi-gift-outline"
        />
      </v-col>
    </v-row>

    <!-- Table section -->
    <v-card>
      <v-data-table
        :headers="headers"
        :items="mDataArray"
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard";
import Axios from "axios";
export default {
  name: "Stock",
  data() {
    return {
      mDataArray: [],
      headers:[
        {
          text: 'Id',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        {text:'Image',value:'image'},
        {text:'Name',value:'name'},
        {text:'Price',value:'price'},
        {text:'Stock',value:'stock'},
        {text:'Action',value:'action'},
        
      ]
    };
  },
  components: {
    StockCard,
  },
  mounted() {
    console.log("Stock Components is run");
    //axios is base promise and asynchonous
    Axios.get("http://localhost:8081/api/v2/product").then((result) => {
      console.log(JSON.stringify(result.data));
      this.mDataArray = result.data;
    });
  },
};
</script>

<style></style>
