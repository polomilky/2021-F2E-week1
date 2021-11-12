<template>
    <div :class="setHeader__sty">
        <div class="header__bg">
        <div class="logo__sty">
            <h1 class="white--text">
            <a @click="toHome">
                <img class="logoImg__sty" src="../assets/logo.png" />
                <font class="ml-4 logoText__sty">TaiFun旅遊網</font>
            </a>
            </h1>
        </div>
        <div class="title__sty">
            <p class="mb-7">尋找{{title.locationName}}</p>
            <p>{{title.locationType}}</p>
            <div class="mb-8 keyword__sty">
            <v-text-field
                label="請輸入關鍵字"
                v-model="keywordText"
                outlined
                solo
                dense
                hide-details="auto"
                append-icon="mdi-magnify"
                class="pa-0 input__sty"
            ></v-text-field>
            <v-btn class="ml-2 pa-6 filterBtn__sty" depressed @click="show.dialog = true">
                <v-icon left color="white">
                mdi-filter
                </v-icon>
                篩選
            </v-btn>
            <!-- >425px dialog -->
            <v-dialog
                v-model="show.dialog"
                class="dialog__sty"
            >
                <v-card class="pa-5">
                <v-card-title class="pb-0">分類</v-card-title>
                <v-row>
                    <v-card-title>
                    <v-col col="6">
                        <v-select
                            :items="typeItems"
                            v-model="selectItem"
                            item-text="name"
                            item-value="value"
                            label="分類"
                            dense
                            outlined
                            hide-details="auto"

                            return-object
                            @change="getSelectType"
                        ></v-select>
                    </v-col>
                    </v-card-title>
                </v-row>
                <v-divider />
                <v-row class="mt-0">
                    <v-col col="6" class="pb-0">
                        <v-card-title class="pb-0">北部地區</v-card-title>
                        <v-card-title class="pb-0">
                            <v-select
                            :items="countryNorthItems"
                            v-model="selectCountey"
                            item-text="name"
                            item-value="value"
                            label="選擇縣市"
                            dense
                            outlined
                            hide-details="auto"
                            return-object
                            @change="getSelectCountry"
                            ></v-select>
                        </v-card-title>
                    </v-col>
                    <v-col col="6" class="pb-0">
                        <v-card-title class="pb-0">中部地區</v-card-title>
                        <v-card-title class="pb-0">
                            <v-select
                            :items="countryCenterItems"
                            v-model="selectCountey"
                            item-text="name"
                            item-value="value"
                            label="選擇縣市"
                            dense
                            outlined
                            hide-details="auto"
                            return-object
                            @change="getSelectCountry"
                            ></v-select>
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row class="mt-0">
                    <v-col col="6" class="pb-0">
                        <v-card-title class="pb-0">南部地區</v-card-title>
                        <v-card-title class="pb-0">
                            <v-select
                            :items="countrySouthItems"
                            v-model="selectCountey"
                            item-text="name"
                            item-value="value"
                            label="選擇縣市"
                            dense
                            outlined
                            hide-details="auto"
                            return-object
                            @change="getSelectCountry"
                            ></v-select>
                        </v-card-title>
                    </v-col>
                    <v-col col='6' class="pb-0">
                        <v-card-title class="pb-0">東部地區</v-card-title>
                        <v-card-title class="pb-0">
                            <v-select
                            :items="countryEastItems"
                            v-model="selectCountey"
                            item-text="name"
                            item-value="value"
                            label="選擇縣市"
                            dense
                            outlined
                            hide-details="auto"
                            return-object
                            @change="getSelectCountry"
                            ></v-select>
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row class="mt-0">
                    <v-col col='6'>
                        <v-card-title class="pb-0">離島地區</v-card-title>
                        <v-card-title>
                            <v-select
                            :items="countryIslandItems"
                            v-model="selectCountey"
                            item-text="name"
                            item-value="value"
                            label="選擇縣市"
                            dense
                            outlined
                            hide-details="auto"
                            return-object
                            @change="getSelectCountry"
                            ></v-select>
                        </v-card-title>
                    </v-col>
                    <v-col col='6'></v-col>
                </v-row>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="white--text searchFilterBtn__sty"
                        @click="search"
                    >
                        搜尋
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- <425px dialog -->
            <v-dialog
                v-model="show.Mdialog"
                fullscreen
                class="Mdialog__sty"
            >
                <v-card class="pa-5">
                <v-card-title class="pb-0">分類</v-card-title>
                <v-card-title>
                    <v-select
                    :items="typeItems"
                    v-model="selectItem"
                    item-text="name"
                    item-value="value"
                    label="分類"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectType"
                    ></v-select>
                </v-card-title>
                <v-card-title class="pb-0">北部地區</v-card-title>
                <v-card-title class="pb-0">
                    <v-select
                    :items="countryNorthItems"
                    v-model="selectCountey"
                    item-text="name"
                    item-value="value"
                    label="選擇縣市"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectCountry"
                    ></v-select>
                </v-card-title>
                <v-card-title class="pb-0">中部地區</v-card-title>
                <v-card-title class="pb-0">
                    <v-select
                    :items="countryCenterItems"
                    v-model="selectCountey"
                    item-text="name"
                    item-value="value"
                    label="選擇縣市"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectCountry"
                    ></v-select>
                </v-card-title>
                <v-card-title class="pb-0">南部地區</v-card-title>
                <v-card-title class="pb-0">
                    <v-select
                    :items="countrySouthItems"
                    v-model="selectCountey"
                    item-text="name"
                    item-value="value"
                    label="選擇縣市"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectCountry"
                    ></v-select>
                </v-card-title>
                <v-card-title class="pb-0">東部地區</v-card-title>
                <v-card-title class="pb-0">
                    <v-select
                    :items="countryEastItems"
                    v-model="selectCountey"
                    item-text="name"
                    item-value="value"
                    label="選擇縣市"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectCountry"
                    ></v-select>
                </v-card-title>
                <v-card-title class="pb-0">離島地區</v-card-title>
                <v-card-title>
                    <v-select
                    :items="countryIslandItems"
                    v-model="selectCountey"
                    item-text="name"
                    item-value="value"
                    label="選擇縣市"
                    dense
                    outlined
                    hide-details="auto"
                    return-object
                    @change="getSelectCountry"
                    ></v-select>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="white--text searchFilterBtn__sty"
                        @click="search"
                    >
                        搜尋
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
                </v-card>
            </v-dialog>
            <v-btn class="ml-2 pa-0 filterMBtn__sty" depressed @click="show.Mdialog = true">
                <v-icon color="white">mdi-filter</v-icon>
            </v-btn>
            </div>
            <p class="mt-n8 mb-0 pr-1 filterMText__sty">篩選</p>
            <v-btn
                depressed
                class="py-6 px-12 white--text searchBtn__sty"
                @click="searchKey"
            >
                搜尋
            </v-btn>
        </div>
        </div>
    </div>
</template>

<script>
    import jsSHA from "jssha"

    export default {
        name: 'ViewDetailsHeader',
        props: ['gettitle', 'getHomeSelect'],

        data: function () {
            return {
                typeItems: [
                    { name: '熱門景點', value: 'ScenicSpot' },
                    { name: '熱門美食', value: 'Restaurant' },
                    { name: '近期活動', value: 'Activity' },
                ],
                countryNorthItems: [
                    { name: '基隆市', value: 'Keelung' },
                    { name: '臺北市', value: 'Taipei' },
                    { name: '新北市', value: 'NewTaipei' },
                    { name: '桃園市', value: 'Taoyuan' },
                    { name: '新竹縣', value: 'HsinchuCounty' },
                    { name: '新竹市', value: 'Hsinchu' },
                ],
                countryCenterItems: [
                    { name: '苗栗縣', value: 'MiaoliCounty' },
                    { name: '台中市', value: 'Taichung' },
                    { name: '彰化縣', value: 'ChanghuaCounty' },
                    { name: '南投縣', value: 'NantouCounty' },
                    { name: '雲林縣', value: 'YunlinCounty' }
                ],
                countrySouthItems: [
                    { name: '嘉義縣', value: 'ChiayiCounty' },
                    { name: '嘉義市', value: 'Chiayi' },
                    { name: '臺南市', value: 'Tainan' },
                    { name: '高雄市', value: 'Kaohsiung' },
                    { name: '屏東縣', value: 'PingtungCounty' }
                ],
                countryEastItems: [
                    { name: '宜蘭縣', value: 'YilanCounty' },
                    { name: '花蓮縣', value: 'HualienCounty' },
                    { name: '臺東縣', value: 'TaitungCounty' }
                ],
                countryIslandItems: [
                    { name: '連江縣', value: 'LienchiangCounty' },
                    { name: '金門縣', value: 'KinmenCounty' },
                    { name: '澎湖縣', value: 'PenghuCounty' }
                ],
                show: {
                    dialog: false,
                    Mdialog: false
                },
                selectItem: this.getHomeSelect.locationType,
                selectCountey: this.getHomeSelect.location,
                getSearchData: [],
                // 關鍵字
                keywordText: null,
                // 標題
                title: {
                    locationName: '臺灣',
                    locationType: this.gettitle
                }
            }
        },
        computed: {
            setHeader__sty() {
                if (this.title.locationType === '熱門景點') {
                    return `header__sty header__view__sty`;
                } else if (this.title.locationType === '熱門美食') {
                    return `header__sty header__restaurant__sty`;
                } else if (this.title.locationType === '近期活動') {
                    return `header__sty header__activity__sty`;
                } else {
                    return `header__sty`;
                }
            }
        },
        methods: {
            // 取得上一頁縣市 
            init() {
                this.title.locationName = sessionStorage.getItem('locationName');
            },
            // 取得選擇縣市
            getSelectCountry(e) {
                this.selectCountey = e.value;
                this.title.locationName = e.name.substr(0, 2);
            },
            // 取得類型
            getSelectType(e) {
                this.selectItem = e.value;
                this.title.locationType = e.name;
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
            // 搜尋api
            getData() {
                this.axios.get(
                    `https://ptx.transportdata.tw/MOTC/v2/Tourism/${this.selectItem}/${this.selectCountey}?${this.apiPath}&$format=JSON`,
                    {
                        headers: this.getAuthorizationHeader()
                    }
                )
                    .then((response) => {
                        this.getSearchData = response.data;
                        this.$emit('listenToChildEvent', this.getSearchData, this.title.locationType);
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
            },
            // 下拉選單搜尋
            search() {
                this.apiPath = '';
                this.getData();
                this.show.dialog = false;
                this.show.Mdialog = false;
            },
            // 關鍵字搜尋
            searchKey() {
                if (this.keywordText !== null) {
                    const keyword = this.keywordText.trim();
                    if (!keyword) {
                        this.apiPath = '';
                        return false;
                    } else {
                        this.apiPath = `$filter=contains(Name%2C'${keyword}')&`;
                        this.getData();
                    }
                    this.keywordText = null;
                } else {
                    return false;
                }
            },
            toHome() {
                this.$router.push('/');
            },
        },
        mounted() {
            this.init();
        }
    }
</script>

<style lang="sass">
    .v-dialog--fullscreen
        height: 90% !important
        top: 10% !important
</style>
<style scoped lang="sass">
    .header__sty
        background-image: url('../assets/banner.png')
        width: 100%
        // height: 580px
        background-size: auto 100%
        background-repeat: no-repeat
        background-position: center bottom
        background-color: #d2e9f9
    .header__view__sty
        background-image: url('../assets/placeBanner.png')
    .header__restaurant__sty
        background-image: url('../assets/foodBanner.png')
    .header__activity__sty
        background-image: url('../assets/activityBanner.png')
    .header__bg
        overflow: hidden
        position: relative
        background-color: rgba(53, 53, 53, 0.4)
        // width: 100%
        height: 580px
    .logo__sty
        margin-left: 40px
        margin-top: 32px
    .logoImg__sty
        vertical-align: middle
    .logoText__sty
        font-family: Viga
        font-weight: normal
        font-size: 22px
        line-height: 30px
        color: #FFFFFF
        text-shadow: 0 0 3px #2F798C, 0 0 5px #2F798C
        -webkit-text-shadow: 0 0 3px #2F798C, 0 0 5px #2F798C
    .title__sty
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        text-align: center
    .title__sty p
        font-weight: bold
        color: #FEFEFE
    .title__sty p:nth-child(1)
        font-size: 42px
        line-height: 50px
    .title__sty p:nth-child(2)
        font-size: 32px
        line-height: 38px
    .keyword__sty
        display: flex
    .keyword__sty .input__sty
        background: #FEFEFE
        border-radius: 20px
        width: 677px
        margin: auto
    .theme--light.v-btn.v-btn--has-bg.filterBtn__sty
        background: #2F798C
        border-radius: 20px
        color: #fff
        font-weight: 600
        font-size: 22px
        line-height: 26px
    .theme--light.v-btn.v-btn--has-bg.searchBtn__sty
        background: #2F798C
        border-radius: 100px
        font-weight: 600
        font-size: 22px
        line-height: 26px
    .theme--light.v-btn.v-btn--has-bg.searchFilterBtn__sty
        background: #2F798C
        border-radius: 100px
        font-weight: 600
        font-size: 14px
        line-height: 17px
    @media (max-width: 780px)
        .header__bg
            height: 400px
        .keyword__sty .input__sty
            width: 467.5px
    @media (min-width: 426px)
        .v-btn:not(.v-btn--round).v-size--default.filterMBtn__sty
            display: none
        .filterMText__sty
            display: none
    @media (max-width: 425px)
        .header__sty
            background-size: auto 95%
        .header__bg
            height: 311px
        .logo__sty
            margin-left: 12px
            margin-top: 8px
        .logoImg__sty
            width: 42px
            height: 43px
        .logoText__sty
            font-size: 16px
            line-height: 22px
        .title__sty p:nth-child(1)
            font-size: 24px
            line-height: 29px
        .title__sty p:nth-child(2)
            font-size: 18px
            line-height: 21px
        .keyword__sty .input__sty
            width: 258px
        .v-btn:not(.v-btn--round).v-size--default.filterMBtn__sty
            border-radius: 8px
            min-width: 42px
            background: #2F798C
        .filterMText__sty
            text-align: right
        .theme--light.v-btn.v-btn--has-bg.filterBtn__sty, .theme--light.v-btn.v-btn--has-bg.searchBtn__sty
            display: none
    @media (min-width: 1441px)
        .header__sty
            background-size: auto 150%
    @media (min-width: 2200px)
        .header__sty
            background-size: auto 180%
</style>
