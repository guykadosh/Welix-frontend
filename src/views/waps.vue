<template>
    <section class="waps-container main-layout">
        <app-header></app-header>
        <div class="img-container">
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <router-link to="/wap/editor/5e28393890dd7201a06d4e44">Template 1</router-link>
                <p>Healthy food</p>
            </div>
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <p>Healthy food</p>
            </div>
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <p>Healthy food</p>
            </div>
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <p>Healthy food</p>
            </div>
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <p>Healthy food</p>
            </div>
            <div>
                <img src="@/assets/img/ominfood.png" alt="" />
                <p>Healthy food</p>
            </div>
        </div>
    </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
export default {
    name: 'waps',
    components: {
        appHeader
    }
}
</script>

