<template>
    <ul class="tool-bar-nav">
        <li>
            <a-tooltip placement="right">
                <template #title>
                    <span>Add Elements</span>
                </template>
                <PlusCircleOutlined class="icon" />
            </a-tooltip>
        </li>
        <li>
            <a-tooltip placement="right">
                <template #title>
                    <span>Add Section</span>
                </template>
                <PicCenterOutlined class="icon" />
            </a-tooltip>
        </li>
        <li>
            <a-tooltip placement="right">
                <template #title>
                    <span>Pages & Menue</span>
                </template>
                <FileTextOutlined class="icon" />
            </a-tooltip>
        </li>
        <li>
            <a-tooltip placement="right">
                <template #title>
                    <span>Edit</span>
                </template>
                <EditOutlined class="icon" />
            </a-tooltip>
        </li>
    </ul>
</template>

<script>
import {
    PlusCircleOutlined,
    PicCenterOutlined,
    FileTextOutlined,
    EditOutlined
} from '@ant-design/icons-vue'
export default {
    name: '',
    components: {
        PlusCircleOutlined,
        PicCenterOutlined,
        FileTextOutlined,
        EditOutlined
    },
}
</script>

<style>
</style> 