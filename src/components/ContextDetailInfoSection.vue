<template>
    <div class="ContextDetailInfoSection">
        <v-divider></v-divider>
        <v-container>
            <h1 class="my-6 title__sty">{{getData[0].Name}}</h1>
            <v-chip label class="white--text chip__sty" v-show="getData[0].Class1">{{getData[0].Class1}}</v-chip>
            <v-row class="my-3">
                <v-col
                    cols="12"
                    md="6"
                    v-show="picData.length !== 0"
                >
                    <v-carousel>
                        <v-carousel-item
                            v-for="(item, id) in picData"
                            :key="id"
                            lazy-src="https://picsum.photos/id/11/10/6"
                            :src="item.PictureUrl1"
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col
                    class="info__sty"
                    cols="12"
                    md="6"
                >
                    <h1 class="mb-8 subtitle__sty">資訊</h1>
                    <p>電話：</p>
                    <div class="my-3">
                        <span>{{phone}}</span>
                        <input
                            readonly
                            type="hidden"
                            class="form-control copyLinkInput"
                            :value="phone"
                            ref="copy_input"
                        >
                        <v-btn
                            depressed
                            class="ml-4 white--text iconBtn__sty"
                            @click="copyPhone"
                            v-show="phone !== '未提供電話'"
                        >
                            <v-icon>mdi-image-filter-none</v-icon>
                        </v-btn>
                    </div>
                    <p>地址：</p>
                    <div class="my-3">
                        <span>{{address}}</span>
                        <v-btn
                            depressed
                            class="ml-4 white--text iconBtn__sty"
                            @click="goGoogleMap"
                            v-show="address !== '未提供地址'"
                        >
                            <v-icon>mdi-map-search-outline</v-icon>
                        </v-btn>
                    </div>
                    <p>開放時間：</p>
                    <span>{{openTime}}</span>
                </v-col>
            </v-row>
            <v-snackbar
                v-model="showcopysnackbar"
                :multi-line="copymultiLine"
                :timeout="copysnackbartime"
            >
                <span v-html="copy_state"></span>
                <v-btn
                    color="blue"
                    text
                    @click="showcopysnackbar = false"
                >
                    關閉
                </v-btn>
            </v-snackbar>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ContextDetailInfoSection',
        props: ['getData'],

        data: function () {
            return {
                picData: [],
                // 資訊
                phone: '未提供電話',
                address: '未提供地址',
                openTime: '未提供開放時間',
                // copy
                copy_state: '',
                showcopysnackbar: false,
                copymultiLine: true,
                copysnackbartime: 1000,
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
                this.pushImg();
            },
            pushImg() {
                this.getData.forEach(element => {
                    if (element.Picture.PictureUrl1 !== undefined) {
                        this.picData.push(element.Picture)
                    }
                });
                return this.picData;
            },
            goGoogleMap() {
                window.open(`https://www.google.com/maps/search/?api=1&query=${this.getData[0].Position.PositionLat},${this.getData[0].Position.PositionLon}`, '_blank');
            },
            copyPhone() {
                const selectEl = document.getElementsByClassName("copyLinkInput")[0];
                if (selectEl.value === '') {
                    this.copy_state = '複製失敗：無電話';
                    this.showcopysnackbar = true;
                    return false;
                } else {
                    selectEl.setAttribute('type', 'text');
                    selectEl.select();
                    try {
                        const copysuccessful = document.execCommand('copy');
                        this.copy_state = copysuccessful ? '已複製電話' : '複製失敗';
                        this.showcopysnackbar = true;
                    } catch (err) {
                        this.copy_state = `複製失敗 ${err}`;
                        this.showcopysnackbar = true;
                    }
                    // cancel select
                    selectEl.setAttribute('type', 'hidden')
                    window.getSelection().removeAllRanges()
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped lang="sass">
    .title__sty
        font-weight: bold
        font-size: 34px
        line-height: 41px
        color: #333333
    .subtitle__sty
        font-weight: 600
        font-size: 28px
        line-height: 33px
        color: #000000
    .info__sty p
        font-weight: 600
        font-size: 20px
        line-height: 24px
        color: #000000
    .info__sty span    
        font-weight: 500
        font-size: 20px
        line-height: 24px
        color: #333333
    .theme--light.v-btn.v-btn--has-bg.iconBtn__sty
        background: #2F798C
        border-radius: 5px
        min-width: unset
        width: 40px
        height: 40px
    .theme--light.v-chip:not(.v-chip--active).chip__sty
        background: #30638E
        font-weight: 600
        font-size: 18px
        line-height: 21px
    // @media (min-width: 426px)
    // @media (max-width: 425px)
</style>
