<template>
    <div class="editor-preview main-layout full" @mouseenter="onPreview" @mouseleave="onPreview">
        <div class="editor-preview__inner">

            <!-- <div class="imgs-wrapper">
                <img class="img" src="../../assets/img/picture12.png" alt="">
            </div>  -->
            <!-- <section class="cards-wrapper">
                <div class="center-line"></div>
                <div class="card">
                    <div class="horiz-line"></div>
                    <div class="circle"></div>
                    <div class="card-txt">
                        <h2>Vast template collection</h2>
                        <p>Pick a template that suits your needs</p>
                    </div>
                    <img src="../../assets/img/pic6.png" class="img" />
                </div>
                <div class="card">
                    <div class="horiz-line"></div>
                    <div class="circle"></div>
                    <div>
                        <h2>Most advance editor</h2>
                        <p>Costumize your site to your taste with the most equipet tool kit</p>
                    </div>
                    <img src="../../assets/img/pic2.png" class="img"/>
                </div>
                <div class="card">
                    <div class="horiz-line"></div>
                    <div class="circle"></div>
                    <div>
                        <h2>Edit your mobile view</h2>
                        <p>Check how your site looks on all devices</p>
                    </div>
                    <img src="../../assets/img/pic3.png" class="img"/>
                </div>
                <div class="card">
                    <div class="horiz-line"></div>
                    <div class="circle"></div>
                    <h2>Backoffice</h2>
                    <p>Get advanced tools to manage and analyze your backoffice</p>
                    <img src="../../assets/img/pic8.png" class="img" />
                </div>
            </section> -->

        
            <!-- <section class="imgs-wrapper">
                <img src="../../assets/img/pic2.png" class="img" :class="imgs[1].pos" />
                <img src="../../assets/img/pic3.png" class="img" :class="imgs[2].pos" />
                <img src="../../assets/img/pic8.png" class="img img4" :class="imgs[3].pos" />
            </section>  -->

            <!-- <ul class="list-wrapper clean-list">
                <li @click="setImgPos(0)" :class="{ active: this.currImg === 0 }">{{ imgs[0].title }}</li>
                <li @click="setImgPos(1)" :class="{ active: this.currImg === 1 }">{{ imgs[1].title }}</li>
                <li @click="setImgPos(2)" :class="{ active: this.currImg === 2 }">{{ imgs[2].title }}
                </li>
                <li @click="setImgPos(3)" :class="{ active: this.currImg === 3 }">{{ imgs[3].title }}</li>
            </ul> -->


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