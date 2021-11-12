<template>
    <div class="ContextDetailMapSection">
        <v-container>
            <h1 class="mt-9 mb-3">景點地圖</h1>
            <p class="btnTitle__style">點擊以下按鈕搜尋</p>
            <div>
                <v-btn class="mr-2 mb-2 white--text btnIcon__sty" @click="searchRestaurant"><v-icon>mdi-silverware-fork-knife</v-icon>搜尋附近餐廳</v-btn>
                <v-btn class="mr-2 mb-2 white--text btnIcon__sty" @click="searchHotal"><v-icon>mdi-bed</v-icon>搜尋附近住宿</v-btn>
                <v-btn class="mr-2 mb-2 white--text btnIcon__sty" @click="searchActivity"><v-icon>mdi-ticket</v-icon>搜尋附近活動</v-btn>
            </div>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <gmap-map
                        :center="center"
                        :zoom="18"
                        style="width:100%; height: 487px;"
                    >
                        <gmap-marker
                            v-for="(item, idx) in locations"
                            :position="item"
                            :key="idx"
                        />
                    </gmap-map>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-card class="card__sty">
                        <v-img
                            class="img__sty"
                            lazy-src="https://picsum.photos/id/11/10/6"
                            :src="getData[0].Picture.PictureUrl1"
                            v-if="Object.keys(getData[0].Picture).length !== 0"
                        ></v-img>
                        <v-img
                            class="img__sty"
                            src="https://picsum.photos/id/11/10/6"
                            gradient="to top right, rgba(280,280,280,.1), rgba(201, 201, 201,.2)"
                            v-else
                        ></v-img>
                        <v-card-title class="cardTitle__sty">
                            <v-icon left class="cardIcon__sty">mdi-map-marker</v-icon>
                            {{getData[0].City}}
                        </v-card-title>
                        <v-card-text class="cardSubTitle__sty">
                            <p>{{getData[0].Name}}</p>
                            <p>電話:<br />{{phone}}</p>
                            <p>地址:<br />{{address}}</p>
                            <p>開放時間<br />{{openTime}}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import jsSHA from "jssha"

    export default {
        name: 'ContextDetailMapSection',
        props: ['getData'],

        data: function () {
            return {
                center: { 
                    lat: this.getData[0].Position.PositionLat,
                    lng: this.getData[0].Position.PositionLon
                },
                locations: [
                    {
                        lat: this.getData[0].Position.PositionLat,
                        lng: this.getData[0].Position.PositionLon,
                    },
                ],
                distance: 100,
                // 卡片資訊
                phone: '未提供電話',
                address: '未提供地址',
                openTime: '未提供開放時間',
            }
        },
        computed: {
        },
        methods: {
            init() {
                if (this.getData[0].Phone !== undefined) {
                    const str = this.getData[0].Phone;
                    this.phone = str.replace(/886-/i, 0);
                }
                if (this.getData[0].Address !== undefined) {
                    this.address = this.getData[0].Address;
                }
                if (this.getData[0].OpenTime !== undefined) {
                    this.openTime = this.getData[0].OpenTime;
                }
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
            searchRestaurant() {
                this.axios.get(
                    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$spatialFilter=nearby(${this.getData[0].Position.PositionLat}%2C${this.getData[0].Position.PositionLon}%2C${this.distance})&$format=JSON`,
                    {
                        headers: this.getAuthorizationHeader()
                    }
                )
                    .then((response) => {
                        this.locations = [];
                        response.data.forEach(
                            element => this.locations.push({
                                lat: element.Position.PositionLat,
                                lng: element.Position.PositionLon,
                            })
                        )
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
            },
            searchHotal() {
                this.axios.get(
                    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$spatialFilter=nearby(${this.getData[0].Position.PositionLat}%2C${this.getData[0].Position.PositionLon}%2C${this.distance})&$format=JSON`,
                    {
                        headers: this.getAuthorizationHeader()
                    }
                )
                    .then((response) => {
                        this.locations = [];
                        response.data.forEach(
                            element => this.locations.push({
                                lat: element.Position.PositionLat,
                                lng: element.Position.PositionLon,
                            })
                        )
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
            },
            searchActivity() {
                this.axios.get(
                    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$spatialFilter=nearby(${this.getData[0].Position.PositionLat}%2C${this.getData[0].Position.PositionLon}%2C${this.distance})&$format=JSON`,
                    {
                        headers: this.getAuthorizationHeader()
                    }
                )
                    .then((response) => {
                        this.locations = [];
                        response.data.forEach(
                            element => this.locations.push({
                                lat: element.Position.PositionLat,
                                lng: element.Position.PositionLon,
                            })
                        )
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped lang="sass">
    .ContextDetailMapSection
        background: #F5FDFF
    .btnTitle__style
        font-weight: 600
        font-size: 20px
        line-height: 24px
        color: #888888
    .google-map
        width: 100%
        height: 400px
    .title__sty, .cardTitle__sty, .cardSubTitle__sty p
        text-align: left
    .v-sheet.v-card.card__sty
        border-radius: 15px
        width: 366px
    .cardTitle__sty, .cardSubTitle__sty p:nth-child(1)
        font-weight: 600
        font-size: 18px
        line-height: 21px
        color: #333333
    .cardSubTitle__sty p:nth-child(2)
        font-weight: 500
    .cardIcon__sty
        color: #CB4539
    .img__sty
        height: 251px
    .theme--light.v-btn.v-btn--has-bg.btnIcon__sty
        background: #4572E3
        font-weight: 600
        font-size: 20px
        line-height: 24px
    @media (min-width: 321px) and (max-width: 425px)
        .v-sheet.v-card.card__sty
            width: 226px
        .cardTitle__sty, .cardSubTitle__sty p:nth-child(1)
            font-size: 12px
            line-height: 14px
        .cardTitle__sty
            padding: 5px 8px
        .cardSubTitle__sty
            padding-bottom: 0
        .cardSubTitle__sty p:nth-child(2)
            font-size: 10px
            line-height: 12px
    // @media (min-width: 426px)
    @media (max-width: 425px)
        .img__sty
            height: 148px
        .v-sheet.v-card.card__sty    
            left: 50%
            transform: translateX(-50%)
        .theme--light.v-btn.v-btn--has-bg.btnIcon__sty
            font-size: 14px
            line-height: 17px
    @media (max-width: 320px)
        .v-sheet.v-card.card__sty
            width: 280px
</style>
