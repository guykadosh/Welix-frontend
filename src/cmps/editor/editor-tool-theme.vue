<template>
  <section class="tool-bar-theme">
    <div
      v-for="theme in themes"
      class="theme-preview"
      :style="{ backgroundColor: theme.mainBgc }"
      @click="setTheme(theme)"
    >
      <div class="theme-preview-info">
        <p
          class="theme-preview-info-header"
          :style="{ color: isDarkColor(theme.mainBgc) ? '#ffffff' : '#343a40' }"
        >
          {{ theme.title }}
        </p>
        <p
          class="theme-preview-info-desc"
          :style="{ color: isDarkColor(theme.mainBgc) ? '#e9ecef' : '#495057' }"
        >
          {{ theme.desc }}
        </p>
      </div>
      <div class="theme-preview-colors">
        <!-- <div :style="{ backgroundColor: theme.mainBgc }"></div> -->
        <div :style="{ backgroundColor: theme.color }"></div>
        <div :style="{ backgroundColor: theme.cmpBgc }"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      themes: [
        {
          title: 'Defualt',
          desc: 'Template default colors',
          mainBgc: '#ffffff',
          cmpBgc: '',
          color: '',
        },
        {
          title: 'Calming',
          desc: 'Calm & easy-going',
          mainBgc: '#827397',
          cmpBgc: '#C9BBCF',
          color: '#635666',
        },
        {
          title: 'Warm',
          desc: 'Modern & pleasant',
          mainBgc: ' rgb(198, 204, 202)',
          cmpBgc: ' rgb(248, 244, 241)',
          color: '#85603F',
        },
        {
          title: 'Vivid',
          desc: 'Bright & Expressive',
          mainBgc: '#dd857e',
          cmpBgc: '#dea4a0',
          color: '#f1d6d4',
        },
        {
          title: 'Business',
          desc: 'Nifty & sophisticated',
          mainBgc: '#0c8599',
          cmpBgc: 'rgb(255, 255, 255)',
          color: '#45504e',
        },
        {
          title: 'Retro Vibrant',
          desc: 'Hip, mod & stylish',
          mainBgc: 'rgba(11, 122, 157, 0.63)',
          cmpBgc: 'rgb(248, 244, 241)',
          color: 'rgba(235, 224, 121, 0.74)',
        },
        {
          title: 'Earthy',
          desc: 'Subtle & Natural',
          mainBgc: '#f4edd2',
          cmpBgc: '#d4b8ac',
          color: '#a27f88',
        },
      ],
    }
  },
  methods: {
    async setTheme(theme) {
      try {
        await this.$store.dispatch({ type: 'setTheme', theme })
      } catch (err) {
        console.log(err)
      }
    },
    isDarkColor(c) {
      c = c.substring(1) // strip #
      const rgb = parseInt(c, 16) // convert rrggbb to decimal
      const r = (rgb >> 16) & 0xff // extract red
      const g = (rgb >> 8) & 0xff // extract green
      const b = (rgb >> 0) & 0xff // extract blue
      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

      return luma < 110
    },
  },
}
</script>
<style lang=""></style>
