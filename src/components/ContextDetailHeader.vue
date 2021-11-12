<template>
    <div class="mb-3 logo__sty">
        <h1 class="white--text">
            <a @click="toHome">
                <img class="logoImg__sty" src="../assets/logo.png" />
                <font class="ml-4 logoText__sty">TaiFun旅遊網</font>
            </a>
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'ContextDetailHeader',

        data: () => ({
        }),
        computed: {
        },
        methods: {
            toHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang="sass">
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
    // @media (min-width: 426px)
    @media (max-width: 425px)
        .logo__sty
            margin-left: 12px
            margin-top: 8px
        .logoImg__sty
            width: 42px
            height: 43px
        .logoText__sty
            font-size: 16px
            line-height: 22px
</style>
