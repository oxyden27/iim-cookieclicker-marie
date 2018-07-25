<template>
    <div class="shop">
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "Shop",
        data () {
            return{}
        },
        props: ['products'],
        computed: {
            ...mapGetters({
                count: 'countData'
            }),
        },
        methods : {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
