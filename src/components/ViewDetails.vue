<template>
    <v-container class="my-8 section__sty">
        <h1 class="title__sty">
            {{gettitle}}
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
                v-for="(item) in visiblePages"
                :key="item.ID"
                align="center"
                justify="center"
                class="col__sty"
            >
                <v-card class="pb-5 card__sty">
                    <v-img
                        class="img__sty"
                        lazy-src="https://picsum.photos/id/11/10/6"
                        :src="item.Picture.PictureUrl1"
                    ></v-img>
                    <v-card-title class="cardTitle__sty">
                        <v-icon left class="cardIcon__sty">mdi-map-marker</v-icon>
                        {{item.City}}
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
        <v-pagination
            v-model="page"
            :length="perPage"
            :total-visible="10"
        ></v-pagination>
    </v-container>
</template>

<script>
    export default {
        name: 'ViewPointSection',
        props: ['gettitle', 'getData'],

        data: function () {
            return {
                page: 1,
                perPage: Math.ceil(this.getData.length / 9),
            }
        },
        computed: {
            visiblePages() {
                const detailDatas = this.getData;
                return detailDatas.slice((this.page - 1) * 9, this.page * 9);
            },
        },
        methods: {
            goContextDetail(id) {
                this.$router.push(`/contextdetail?location=${id}`);
            }
        },
        mounted() {
        },
        watch: {
            getData(val) {
                this.perPage = Math.ceil(val.length / 9);
            }
        },
    }
</script>

<style scoped lang="sass">
    .title__sty, .cardTitle__sty, .cardSubTitle__sty p
        text-align: left
        font-family: SF Pro Text
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
    .img__sty
        height: 251px
    @media (max-width: 780px)
        .theme--light.v-btn.v-btn--has-bg.cardBtn__sty
            width: 170px
            height: 51px
            font-size: 16px
            line-height: 19px
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
</style>
