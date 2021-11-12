<template>
    <v-container class="my-8 section__sty">
        <h1 class="mb-2 title__sty">
            {{sectionType}}
            <v-icon class="icon__sty">
                mdi-fire
            </v-icon>
        </h1>
        <p class="font-weight-medium">沒有資料喔～</p>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeNoSection',
        props: ['sectionType'],
    }
</script>

<style scoped lang="sass">
    .title__sty
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
    @media (min-width: 321px) and (max-width: 425px)
        .title__sty, .section__sty p
            text-align: center
</style>