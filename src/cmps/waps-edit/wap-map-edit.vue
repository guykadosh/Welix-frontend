<template>
    <div class="map-container" @click.stop="setEditable('map', 0)">
        <GMapMap class="map small" :center="cmp.info.center" :style="mapSize" :zoom="15" map-type-id="terrain"
            @mousedown.stop>
            <GMapCluster @mousedown.stop>
                <GMapMarker :key="index" v-for="(m, index) in cmp.info.markers" :position="m.position"
                    :clickable="false" :draggable="false" @click="center = m.position" @mousedown.stop />
            </GMapCluster>
        </GMapMap>
    </div>
</template>

<script>
export default {
    name: 'cmp-map',
    props: { cmp: Object },
    computed: {
        mapSize() {
            return { width: 500 + 'px', height: 350 + 'px' }
        }
    },
    created() {
        console.log('im map')
    },
    methods: {
        async setEditable(type, key, idx = null) {
            
            const el = { type, key, idx }
            const cmp = JSON.parse(JSON.stringify(this.cmp))

            this.$emit('picked', { cmp, el })

            // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
        },
    }
}
</script>

