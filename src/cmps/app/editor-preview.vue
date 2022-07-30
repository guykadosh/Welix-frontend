<template>
    <div class="editor-preview main-layout full" @mouseenter="onPreview" @mouseleave="onPreview">
        <div class="editor-preview__inner">

            <div class="heading">
                <h2 class="intro">Introducing Welix</h2>
                <h3 class="subheading">{{imgs[currImg].title}}</h3>
            </div>

            <section class="list-wrapper" @wheel.prevent="scrollToPos">
                <ul class="clean-list">
                    <li @click="setImgPos(0)" :class="{ active: this.currImg === 0 }">{{imgs[0].title}}</li>
                    <li @click="setImgPos(1)" :class="{ active: this.currImg === 1 }">{{imgs[1].title}}</li>
                    <li @click="setImgPos(2)" :class="{ active: this.currImg === 2 }">{{imgs[2].title}}
                    </li>
                    <li @click="setImgPos(3)" :class="{ active: this.currImg === 3 }">{{imgs[3].title}}</li>
                </ul>
            </section>
            
            <section class="list-wrapper list2" @wheel.prevent="scrollToPos">
                <ul class="clean-list">
                    <li @click="setImgPos(0)" :class="{ active: this.currImg === 0 }"><span></span></li>
                    <li @click="setImgPos(1)" :class="{ active: this.currImg === 1 }"><span></span></li>
                    <li @click="setImgPos(2)" :class="{ active: this.currImg === 2 }"><span></span>
                    </li>
                    <li @click="setImgPos(3)" :class="{ active: this.currImg === 3 }"><span></span></li>
                </ul>
            </section>

            <div class="img-container">
                <section class="imgs-wrapper">
                    <img src="../../assets/img/pic6.png" class="img" :class="imgs[0].pos" />
                    <img src="../../assets/img/pic2.png" class="img" :class="imgs[1].pos" />
                    <img src="../../assets/img/pic3.png" class="img" :class="imgs[2].pos" />
                    <img src="../../assets/img/pic8.png" class="img img4" :class="imgs[3].pos" />
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