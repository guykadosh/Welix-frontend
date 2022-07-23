<template>
  <ul class="tool-bar-nav">
    <!-- <li @click="setTool('element')">
            <a-tooltip placement="right">
                <template #title>
                    <span>Add Elements</span>
                </template>
                <PlusCircleOutlined class="icon" />
            </a-tooltip>
        </li> -->

    <li @click="setTool('edit')">
      <a-tooltip placement="right">
        <template #title>
          <span>Edit</span>
        </template>
        <EditOutlined class="icon" />
      </a-tooltip>
    </li>
    <li @click="setTool('section')">
      <a-tooltip placement="right">
        <template #title>
          <span>Add Section</span>
        </template>
        <PlusCircleOutlined class="icon" />
        <!-- <PicCenterOutlined class="icon" /> -->
      </a-tooltip>
    </li>
    <!-- <li @click="setTool('pages')">
      <a-tooltip placement="right">
        <template #title>
          <span>Pages & Menue</span>
        </template>
        <FileTextOutlined class="icon" />
      </a-tooltip>
    </li> -->

    <li @click="setTool('theme')">
      <a-tooltip placement="right">
        <template #title>
          <span>Themes</span>
        </template>
        <BgColorsOutlined class="icon" />
      </a-tooltip>
    </li>
  </ul>
</template>

<script>
import {
  PlusCircleOutlined,
  PicCenterOutlined,
  FileTextOutlined,
  EditOutlined,
  HighlightOutlined,
  BgColorsOutlined,
} from '@ant-design/icons-vue'
export default {
  name: '',
  components: {
    PlusCircleOutlined,
    PicCenterOutlined,
    FileTextOutlined,
    EditOutlined,
    HighlightOutlined,
    BgColorsOutlined,
  },
  methods: {
    setTool(type) {
      this.$emit('setTool', type)
    },
  },
  emits: ['setTool'],
}
</script>

<style></style>
