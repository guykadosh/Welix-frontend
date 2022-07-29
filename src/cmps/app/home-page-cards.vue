<template>
    <section class="home-page-cards main-layout full">
        <div class="cards__inner">
            <div class="cards-heading">
                <h2 class="cards-heading__heading">Build Your Unique Online Presence</h2>
                <h3 class="cards-heading__subheading">To create your own website, follow these steps:</h3>
            </div>
            <div class="cards-wrapper">
                <div class="card" v-for="card in cards" :key="card.id">
                    <h2 class="card-head">{{ card.title }}</h2>
                    <p class="card-body">{{ card.body }}</p>
                </div>
            </div>
            <router-link class="hero-btn" to="/template">Get started</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            cards: [
                {
                    id: 'c01',
                    title: 'Costumie your site',
                    body: 'Pick a template and customize anything, or answer a few questions and get a free website designed just for you.'
                },
                {
                    id: 'c02',
                    title: 'Edit your mobile view',
                    body: 'Check out the mobile-optimized version of your site. Switch to the Mobile Editor to personalize it even more.'
                },
                {
                    id: 'c03',
                    title: 'Add advanced features',
                    body: 'Start your own blog, add an online store and accept bookings online. You can always add more features as you grow.'
                }
            ]
        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>

<style>
</style>