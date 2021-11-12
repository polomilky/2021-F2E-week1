<template>
    <v-container class="my-8 section__sty">
        <h1 class="title__sty">
            {{sectionType}}
            <v-icon class="icon__sty">
                mdi-fire
            </v-icon>
        </h1>
        <v-row class="mt-12 mb-10">
            <v-col
                xl="3"
                lg="4"
                md="4"
                sm="6"
                xs="6"
                v-for="(item) in getData"
                :key="item.ID"
                align="center"
                justify="center"
                class="col__sty"
            >
                <v-card
                    class="pb-5 card__sty"
                >
                    <v-img
                        class="img__sty"
                        lazy-src="https://picsum.photos/id/11/10/6"
                        :src="item.Picture.PictureUrl1"
                    ></v-img>
                    <v-card-title class="cardTitle__sty">
                        <v-icon left class="cardIcon__sty">mdi-map-marker</v-icon>
                        {{item.Address}}
                    </v-card-title>
                    <v-card-text class="cardSubTitle__sty">
                        <p>{{item.Name}}</p>
                        <p>開放時間<br />{{item.OpenTime}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="white--text cardBtn__sty"
                            @click="goContextDetail(item.ID)"
                        >
                            查看詳情
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div align="center">
            <v-btn
                outlined
                class="py-5 px-12 btn__sty"
                @click="goViewDetail(sectionType)"
                v-show="!this.$store.state.isSearchTaiwan.isSearchTaiwanData"
            >
                看更多{{sectionType}}
            </v-btn>
            <v-btn
                outlined
                class="py-5 px-12 btn__sty"
                @click="moreCard(sectionType)"
                v-show="this.$store.state.isSearchTaiwan.isSearchTaiwanData"
            >
                看更多{{sectionType}}
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeSection',
        props: ['sectionType', 'getData', 'getCount'],

        data: function () {
            return {
                count: this.getCount,
                show: {
                    isSearchTaiwan: true
                }
            }
        },
        methods: {
            goContextDetail(id) {
                this.$router.push(`/contextdetail?location=${id}`);
            },
            // 有縣市->會導到有頁碼分頁
            goViewDetail(type) {
                const getCountry = this.$store.state.searchCountry.searchCountryData;
                switch (type) {
                    case '熱門景點':
                        this.$router.push(`/viewdetail?type=ScenicSpot&country=${getCountry}`);
                        break;
                    case '熱門美食':
                        this.$router.push(`/viewdetail?type=Restaurant&country=${getCountry}`);
                        break;
                    case '近期活動':
                        this.$router.push(`/viewdetail?type=Activity&country=${getCountry}`);
                        break;
                    default:
                        alert('無此類別');
                        return false;
                }
            },
            // 台灣->每次按會多三個
            moreCard(type) {
                this.count += 3;
                let name = '';
                switch (type) {
                    case '熱門景點':
                        name = 'ScenicSpot';
                        break;
                    case '熱門美食':
                        name = 'Restaurant';
                        break;
                    case '近期活動':
                        name = 'Activity';
                        break;
                    default:
                        alert('無此類別');
                        return false;
                }
                this.$emit('listenToMoreChildEvent', name, this.count);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="sass">
    .title__sty, .cardTitle__sty, .cardSubTitle__sty p
        text-align: left
    .title__sty
        font-weight: bold
        font-size: 32px
        line-height: 38px
        color: #2F798C
    .icon__sty
        font-size: 35px
        color: #2F798C
        vertical-align: unset
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
    .theme--light.v-btn.v-btn--has-bg.cardBtn__sty
        background: #2F798C
        border-radius: 20px
        width: 219px
        height: 68px
        font-weight: 600
        font-size: 20px
        line-height: 24px
    .cardIcon__sty
        color: #CB4539
    .v-btn:not(.v-btn--round).v-size--default.btn__sty
        border-radius: 20px
        border: 3px solid #2F798C
        width: 765px
        height: 68px
        color: #2F798C
        font-weight: 600
        font-size: 24px
        line-height: 29px
    .img__sty
        height: 251px
    @media (max-width: 780px)
        .theme--light.v-btn.v-btn--has-bg.cardBtn__sty
            width: 170px
            height: 51px
            font-size: 16px
            line-height: 19px
        .v-btn:not(.v-btn--round).v-size--default.btn__sty
            width: 416.5px
            height: 55px
            font-size: 19px
            line-height: 23px
    @media (min-width: 321px) and (max-width: 425px)
        .title__sty
            text-align: center
        .v-sheet.v-card.card__sty
            width: 149px
        .theme--light.v-btn.v-btn--has-bg.cardBtn__sty
            width: 126.24px
            height: 34px
            font-size: 12px
            line-height: 14px
        .v-btn:not(.v-btn--round).v-size--default.btn__sty
            width: 156px
            height: 42px
            font-size: 14px
            line-height: 17px
        .img__sty
            height: 104px
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
        .col__sty:nth-child(odd)
            padding-right: 0
        .col__sty:nth-child(even)
            padding-left: 0
    @media (max-width: 320px)
        .v-sheet.v-card.card__sty
            width: 300px
        .col__sty:nth-child(odd)
            padding-right: 12px
        .col__sty:nth-child(even)
            padding-left: 12px
        .v-btn:not(.v-btn--round).v-size--default.btn__sty
            width: 156px
            height: 42px
            font-size: 14px
            line-height: 17px
</style>
