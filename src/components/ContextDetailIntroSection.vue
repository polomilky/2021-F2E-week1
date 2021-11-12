<template>
    <div class="ContextDetailIntroSection">
        <v-container>
            <h1 class="mt-3 mb-8">介紹</h1>
            <span>{{getData}}</span>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ContextDetailIntroSection',
        props: ['getData'],

        data: () => ({
        }),
        computed: {
        },
        methods: {
        }
    }
</script>

<style scoped lang="sass">
    .ContextDetailIntroSection
        background: #F5FDFF
    .ContextDetailIntroSection span
        font-weight: 500
        font-size: 14px
        line-height: 17px
        color: #000000
    // @media (min-width: 426px)
    // @media (max-width: 425px)
</style>
