<template>
    <div class="editor-preview main-layout full" @mouseenter="onPreview" @mouseleave="onPreview">
        <div class="editor-preview__inner">

            <div class="editor-preview__inner__container">
                <section class="imgs-wrapper">
                    <img src="../../assets/img/prev1.png" class="img" :class="imgs[0].pos" />
                    <img src="../../assets/img/prev2.png" class="img" :class="imgs[1].pos" />
                    <img src="../../assets/img/prev3.png" class="img" :class="imgs[2].pos" />
                    <img src="../../assets/img/prev4.png" class="img" :class="imgs[3].pos" />
                </section>

                <section class="list-wrapper" @wheel.prevent="scrollToPos">
                    <ul class="clean-list">
                        <li @click="setImgPos(0)" :class="{ active: this.currImg === 0 }">Choose a template</li>
                        <li @click="setImgPos(1)" :class="{ active: this.currImg === 1 }">Costumize your site</li>
                        <li @click="setImgPos(2)" :class="{ active: this.currImg === 2 }">Check on all devices</li>
                        <li @click="setImgPos(3)" :class="{ active: this.currImg === 3 }">Publish your site</li>
                    </ul>
                </section>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            isOnPreview: false,
            currImg: 0,
            imgs: [
                {
                    name: 'img1',
                    pos: 'pos1'
                },
                {
                    name: 'img2',
                    pos: 'pos2'
                },
                {
                    name: 'img3',
                    pos: 'pos3'
                },
                {
                    name: 'img4',
                    pos: 'pos4'
                }
            ]
        }
    },
    methods: {
        onPreview() {
            this.isOnPreview = !this.isOnPreview
        },
        setImgPos(idx) {
            this.currImg = idx
            if (!this.isOnPreview) return
            const oldPos1 = this.imgs.find(img => img.pos === 'pos1')
            oldPos1.pos = this.imgs[idx].pos
            this.imgs[idx].pos = 'pos1'
        },
        scrollToPos(ev) {

            if (ev.deltaY > 0) {
                if (this.currImg === this.imgs.length - 1) return
                this.currImg++
            }
            else {
                if (this.currImg === 0) return
                this.currImg--
            }
            this.setImgPos(this.currImg)
        }
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