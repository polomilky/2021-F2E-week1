<template>
    <div>
        <ContextDetailHeader />
        <ContextDetailInfoSection
            :getData="this.detailData"
            v-if="this.detailData.length !== 0"
        />
        <ContextDetailIntroSection
            :getData="this.detailData[0].Description"
            v-if="this.show.descriptionArea"
        />
        <ContextDetailMapSection
            :getData="this.detailData"
            v-if="this.detailData.length !== 0"
        />
    </div>
</template>

<script>
    import jsSHA from "jssha"
    import ContextDetailHeader from '../components/ContextDetailHeader'
    import ContextDetailInfoSection from '../components/ContextDetailInfoSection'
    import ContextDetailIntroSection from '../components/ContextDetailIntroSection'
    import ContextDetailMapSection from '../components/ContextDetailMapSection'

    export default {
        name: 'ContextDetail',

        components: {
            ContextDetailHeader,
            ContextDetailInfoSection,
            ContextDetailIntroSection,
            ContextDetailMapSection
        },
        data: () => ({
            locationID: null,
            detailData: [],
            show: {
                descriptionArea: false
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
            getID() {
                this.locationID = this.$route.query.location;
                const type = this.locationID.split('_');
                let location_type = '';
                switch (type[0]) {
                    case 'C1':
                        location_type = 'ScenicSpot'
                        break;
                    case 'C2':
                        location_type = 'Activity'
                        break;
                    case 'C3':
                        location_type = 'Restaurant'
                        break;
                    default:
                        alert('無此類別');
                        this.$router.push('/');
                }
                this.axios.get(
                    `https://ptx.transportdata.tw/MOTC/v2/Tourism/${location_type}?$filter=ID%20eq%20'${this.locationID}'&$top=30&$format=JSON`,
                    {
                        headers: this.getAuthorizationHeader()
                    }
                )
                    .then((response) => {
                        this.detailData = response.data;
                        if (this.detailData[0].Description === '') {
                            this.show.descriptionArea = false;
                        } else {
                            this.show.descriptionArea = true;
                        }
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
            }
        },
        mounted() {
            this.getID();
        }
    }
</script>
