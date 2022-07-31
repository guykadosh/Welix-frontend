<template>
    <div class="editor-preview main-layout full" @mouseenter="onPreview" @mouseleave="onPreview">
        <div class="editor-preview__inner main-layout full">
            <section class="section-left">

            </section>
            <section class="section-right">

            </section>
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
                    pos: 'pos1',
                    title: 'Vast template collection'
                },
                {
                    name: 'img2',
                    pos: 'pos2',
                    title: 'Most advance editor'
                },
                {
                    name: 'img3',
                    pos: 'pos3',
                    title: 'Compatible across all devices'
                },
                {
                    name: 'img4',
                    pos: 'pos4',
                    title: 'Backoffice for site managment'
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
}
</script>

<style>
</style>