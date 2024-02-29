<template>
  <v-card-white>
    <v-card-item>
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
      </template>
      <v-data-table
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :style="{'height: 200px' : sticky}"
        sort-icon="mdi-menu-up"
        :headers="headers"
        :items="fooBar"
        :search="search"
        item-value="name"
        :select-strategy="selectStrategy"
        :show-select="showSelect"
        :class="{'v-table--fixed-column' : sticky}"
      >
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </v-card-item>
  </v-card-white>
</template>

<script>

import { computed } from 'vue'

export default {
  name: 'dataTable',

  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
    showSelect: {
      type: Boolean,
      default: false,
    },
    selectStrategy: {
      type: String,
      default: 'single',
    }
  },

  data () {
    return {
      search: '',
      page: 1,
      itemsPerPage: 9,
      headers: [
        {
          align: 'start',
          key: 'id',
          sortable: false,
          title: 'Row Number',
        },
        { key: 'first_name', title: 'First Name' },
        { key: 'last_name', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'gender', title: 'Gender' },
        { key: 'ip_address', title: 'IP Address' },
      ],
      fooBar: [{"id":1,"first_name":"Hilary","last_name":"Birchill","email":"hbirchill0@wikispaces.com","gender":"Male","ip_address":"120.133.232.196"},
{"id":2,"first_name":"Augustus","last_name":"Carlile","email":"acarlile1@clickbank.net","gender":"Male","ip_address":"5.111.178.81"},
{"id":3,"first_name":"Gualterio","last_name":"Littlejohns","email":"glittlejohns2@discuz.net","gender":"Male","ip_address":"10.231.123.77"},
{"id":4,"first_name":"Colette","last_name":"Toll","email":"ctoll3@samsung.com","gender":"Female","ip_address":"86.253.239.185"},
{"id":5,"first_name":"Hyacinthia","last_name":"Porteous","email":"hporteous4@ebay.com","gender":"Female","ip_address":"69.181.231.170"},
{"id":6,"first_name":"Johna","last_name":"Datte","email":"jdatte5@china.com.cn","gender":"Female","ip_address":"250.116.169.116"},
{"id":7,"first_name":"Mariejeanne","last_name":"Bertrand","email":"mbertrand6@oakley.com","gender":"Female","ip_address":"255.17.7.46"},
{"id":8,"first_name":"Arlena","last_name":"Aimson","email":"aaimson7@indiegogo.com","gender":"Female","ip_address":"179.48.67.98"},
{"id":9,"first_name":"Liane","last_name":"Leebeter","email":"lleebeter8@thetimes.co.uk","gender":"Female","ip_address":"111.81.41.239"},
{"id":10,"first_name":"Derry","last_name":"Patnelli","email":"dpatnelli9@fastcompany.com","gender":"Male","ip_address":"211.198.69.88"},
{"id":11,"first_name":"Gus","last_name":"Kleinschmidt","email":"gkleinschmidta@toplist.cz","gender":"Female","ip_address":"124.92.139.56"},
{"id":12,"first_name":"Laurianne","last_name":"Tosney","email":"ltosneyb@so-net.ne.jp","gender":"Female","ip_address":"211.21.93.90"},
{"id":13,"first_name":"Lalo","last_name":"Durber","email":"ldurberc@psu.edu","gender":"Male","ip_address":"172.26.51.251"},
{"id":14,"first_name":"Heinrik","last_name":"Spore","email":"hspored@fc2.com","gender":"Male","ip_address":"60.7.99.31"},
{"id":15,"first_name":"Linnea","last_name":"Lidgerton","email":"llidgertone@msn.com","gender":"Female","ip_address":"22.56.47.84"},
{"id":16,"first_name":"Emilie","last_name":"Flett","email":"eflettf@nps.gov","gender":"Female","ip_address":"126.99.71.232"},
{"id":17,"first_name":"Hashim","last_name":"Keneforde","email":"hkenefordeg@posterous.com","gender":"Male","ip_address":"244.57.128.104"},
{"id":18,"first_name":"Erik","last_name":"Rainforth","email":"erainforthh@constantcontact.com","gender":"Male","ip_address":"207.41.181.230"},
{"id":19,"first_name":"Deni","last_name":"Canton","email":"dcantoni@cafepress.com","gender":"Female","ip_address":"187.205.123.214"},
{"id":20,"first_name":"Ilene","last_name":"Ruston","email":"irustonj@mail.ru","gender":"Female","ip_address":"16.31.112.114"},
{"id":21,"first_name":"Lindsay","last_name":"Shervil","email":"lshervilk@dailymotion.com","gender":"Male","ip_address":"60.49.216.177"},
{"id":22,"first_name":"Tammie","last_name":"Deniscke","email":"tdenisckel@ovh.net","gender":"Non-binary","ip_address":"206.187.40.67"},
{"id":23,"first_name":"Alvin","last_name":"Spencelayh","email":"aspencelayhm@discovery.com","gender":"Male","ip_address":"144.107.238.236"},
{"id":24,"first_name":"Astrid","last_name":"Poulden","email":"apouldenn@purevolume.com","gender":"Female","ip_address":"217.19.101.193"},
{"id":25,"first_name":"Lian","last_name":"Sowten","email":"lsowteno@cnet.com","gender":"Female","ip_address":"177.91.221.175"},
{"id":26,"first_name":"Kerianne","last_name":"Yearnsley","email":"kyearnsleyp@princeton.edu","gender":"Female","ip_address":"79.108.71.217"},
{"id":27,"first_name":"Joshua","last_name":"Poad","email":"jpoadq@uiuc.edu","gender":"Male","ip_address":"49.71.55.218"},
{"id":28,"first_name":"Kelley","last_name":"Gounel","email":"kgounelr@soundcloud.com","gender":"Genderfluid","ip_address":"79.43.163.130"},
{"id":29,"first_name":"Svend","last_name":"Gunton","email":"sguntons@quantcast.com","gender":"Male","ip_address":"170.232.97.160"},
{"id":30,"first_name":"Hervey","last_name":"Knok","email":"hknokt@ifeng.com","gender":"Male","ip_address":"87.154.120.36"}],
    }
  },

  setup() {
    const pageCount = computed(() => {
      return Math.ceil(30 / 9)
    })
    return {
      pageCount
    };
  },
};
</script>
