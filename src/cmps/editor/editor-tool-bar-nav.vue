<template>
  <div class="tool-bar-nav flex flex-column justify-between">
    <div class="top">
      <ul>
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
    </div>
    <div class="bottom">
      <ul>
        <li @click="saveWap">
          <a-tooltip placement="right">
            <template #title>
              <span>Save</span>
            </template>
            <save-outlined class="icon" />
          </a-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  PlusCircleOutlined,
  PicCenterOutlined,
  FileTextOutlined,
  EditOutlined,
  HighlightOutlined,
  BgColorsOutlined,
  SaveOutlined,
} from '@ant-design/icons-vue'
export default {
  name: '',
  emits: ['saved'],
  components: {
    PlusCircleOutlined,
    PicCenterOutlined,
    FileTextOutlined,
    EditOutlined,
    HighlightOutlined,
    BgColorsOutlined,
    SaveOutlined,
  },
  methods: {
    setTool(type) {
      this.$emit('setTool', type)
    },
    saveWap() {
      this.$emit('saved')
    },
  },
  emits: ['setTool'],
}
</script>

<style></style>
