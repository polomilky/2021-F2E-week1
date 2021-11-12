<template>
  <div>
    <Header @listenToChildEvent="getDatafromChild" @listenToChildKeywordEvent="getKeywordDatafromChild" />
    <HomeSection :sectionType="ViewPlaceText" :getData="ViewPlaceData" :getCount="count" @listenToMoreChildEvent="getMoreDatafromChild" v-if="ViewPlaceData.length !== 0" />
    <HomeSection :sectionType="FoodText" :getData="FoodData" :getCount="count" @listenToMoreChildEvent="getMoreDatafromChild" v-if="FoodData.length !== 0" />
    <HomeSection :sectionType="ActivityText" :getData="ActivityData" :getCount="count" @listenToMoreChildEvent="getMoreDatafromChild" v-if="ActivityData.length !== 0" />
  </div>
</template>

<script>
  import jsSHA from "jssha"
  import Header from '../components/Header'
  import HomeSection from '../components/HomeSection'
  // import HomeNoSection from '../components/HomeNoSection'

  export default {
    name: 'Home',

    components: {
      Header,
      HomeSection,
      // HomeNoSection
    },
    data: () => ({
      ViewPlaceText: '熱門景點',
      FoodText: '熱門美食',
      ActivityText: '近期活動',
      ViewPlaceData: [],
      FoodData: [],
      ActivityData: [],
      // 關鍵字
      getKeyword: null,
      // api參數(一般搜尋/關鍵字搜尋)
      apiPath: '?',
      apiAreaPath: '',
      // 資料筆數
      count: 0,
    }),
    methods: {
      init() {
        // 沒有選擇縣市區域, 查看更多：無跳頁, 每次多秀三個
        // store vuex
        this.$store.commit({
          type: 'setIsSearchTaiwanData',
          isSearchTaiwanData: true,
        });
      },
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
      getViewPlaceData() {
        this.axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot${this.apiPath}$top=6&$format=JSON`,
          {
            headers: this.getAuthorizationHeader()
          }
        )
          .then((response) => {
              this.ViewPlaceData = response.data;
          })
          .catch((error) => {
              alert(error.response.data.message);
          });
      },
      getFoodData() {
        this.axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant${this.apiPath}$top=6&$format=JSON`,
          {
            headers: this.getAuthorizationHeader()
          }
        )
          .then((response) => {
              this.FoodData = response.data;
          })
          .catch((error) => {
              alert(error.response.data.message);
          });
      },
      getActivityData() {
        this.axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity${this.apiPath}$top=6&$format=JSON`,
          {
            headers: this.getAuthorizationHeader()
          }
        )
          .then((response) => {
              this.ActivityData = response.data;
          })
          .catch((error) => {
              alert(error.response.data.message);
          });
      },
      getData() {
        if (!this.getKeyword) {
          this.getKeyword = '';
        }
        this.getViewPlaceData();
        this.getFoodData();
        this.getActivityData();
      },
      getDatafromChild(item, name) {
        switch (name) {
          case 'ScenicSpot':
            this.ViewPlaceData = item;
            this.FoodData = [];
            this.ActivityData = [];
            break;
          case 'Activity':
            this.ViewPlaceData = [];
            this.FoodData = [];
            this.ActivityData = item;
            break;
          case 'Restaurant':
            this.ViewPlaceData = [];
            this.FoodData = item;
            this.ActivityData = [];
            break;
          default:
            alert('無此類別');
            return false;
        }
      },
      // 關鍵字
      getKeywordDatafromChild(keyword, name) {
        this.getKeyword = keyword;
        this.apiAreaPath = name;
        console.log(this.apiAreaPath);
        if (this.getKeyword !== '') {
          if (this.apiAreaPath !== '') {
            this.apiPath = `/${this.apiAreaPath}/$filter=contains(Name%2C'${this.getKeyword}')&`;
          } else {
            this.apiPath = `?$filter=contains(Name%2C'${this.getKeyword}')&`;
          }
        } else {
          this.apiPath = ``;
        }
        this.getData();
      },
      // 資料是台灣 查看更多 每次顯示三筆
      getMoreDatafromChild(name, num) {
        this.count = num;
        this.axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/${name}?${this.apiPath}$skip=${3+this.count}&$top=3&$format=JSON`,
          {
            headers: this.getAuthorizationHeader()
          }
        )
          .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                if (name === 'ScenicSpot') {
                  this.ViewPlaceData.push(response.data[i]);
                } else if (name === 'Restaurant') {
                  this.FoodData.push(response.data[i]);
                } else {
                  this.ActivityData.push(response.data[i]);
                }
              }
          })
          .catch((error) => {
              alert(error.response.data.message);
          });
      }
    },
    mounted() {
      this.init();
      this.getData();
    }
  }
</script>
