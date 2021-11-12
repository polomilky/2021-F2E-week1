<template>
  <div>
    <ViewDetailsHeader @listenToChildEvent="getDatafromChild" :gettitle="this.locationTypeName" :getHomeSelect="homeselect" v-if="this.homeselect.location !== null" />
    <ViewDetails :gettitle="this.locationTypeName" :getData="this.detailDatas" v-if="this.detailDatas.length !== 0" />
  </div>
</template>

<script>
  import jsSHA from "jssha"
  import ViewDetailsHeader from '../components/ViewDetailsHeader'
  import ViewDetails from '../components/ViewDetails'

  export default {
    name: 'ViewDetail',

    components: {
      ViewDetailsHeader,
      ViewDetails,
    },
    data: () => ({
      locationTypeName: null,
      detailDatas: [],
      // 首頁選擇的選項
      homeselect: {
        locationType: null,
        location: null
      }
    }),
    methods: {
      getAuthorizationHeader() {
        //  填入自己 ID、KEY 開始
        let AppID = process.env.VUE_APP_API_ID;
        let AppKey = process.env.VUE_APP_API_KEY;
        //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = `hmac username="${AppID}",algorithm="hmac-sha1",headers="x-date",signature="${HMAC}"`
        return { 'Authorization': Authorization, 'X-Date': GMTString };
      },
      getData() {
        this.homeselect.locationType = this.$route.query.type;
        this.homeselect.location = this.$route.query.country;
        switch (this.homeselect.locationType) {
          case 'ScenicSpot':
            this.locationTypeName = "熱門景點";
            break;
          case 'Restaurant':
            this.locationTypeName = "熱門美食";
            break;
          case 'Activity':
            this.locationTypeName = "近期活動";
            break;
          default:
            alert('無此類別');
            this.$router.push('/');
        }
        this.axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.homeselect.locationType}/${this.homeselect.location}?$format=JSON`,
          {
            headers: this.getAuthorizationHeader()
          }
        )
          .then((response) => {
              this.detailDatas = response.data;
          })
          .catch((error) => {
              alert(error.response.data.message);
          });
      },
      getDatafromChild(item, name) {
        this.detailDatas = item;
        this.locationTypeName = name;
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>
