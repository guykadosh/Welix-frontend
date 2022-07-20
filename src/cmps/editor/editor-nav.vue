<template>
    <nav class="editor-nav flex">
        <div class="select-container">
            <a-select ref="select" class="page-nav" value="1">
                <a-select-option value="1">Page: How it works</a-select-option>
                <a-select-option value="2">Page: Meals</a-select-option>
                <a-select-option value="3">Page: Reviews</a-select-option>
                <a-select-option value="4">Page :Pricing</a-select-option>
            </a-select>
        </div>
        <div class="view-port-mode flex items-center">
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Switch to desktop</span>
                </template>
                <desktop-outlined class="icon" />
            </a-tooltip>
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Switch to tablet</span>
                </template>
                <tablet-outlined class="icon" />
            </a-tooltip>
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Switch to mobile</span>
                </template>
                <mobile-outlined class="icon" />
            </a-tooltip>
        </div>
        <div class="demo-site-domain flex flex-column justify-center">
            <div>
                <lock-outlined class="icon" />
                <span class="http">https:</span><span>//welix.com/my-site</span>
            </div>
        </div>
        <div class="actions flex items-center">
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Undo</span>
                </template>
                <undo-outlined class="icon" />
            </a-tooltip>
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Redo</span>
                </template>
                <redo-outlined class="icon" />
            </a-tooltip>
            <a-tooltip placement="bottom">
                <template #title>
                    <span>Zoom in</span>
                </template>
                <zoom-in-outlined class="icon" />
            </a-tooltip>
        </div>
    </nav>
</template>

<script>
import {
    UndoOutlined, RedoOutlined, ZoomInOutlined,
    DesktopOutlined, TabletOutlined, MobileOutlined, LockOutlined
} from '@ant-design/icons-vue'
export default {
    name: 'editor-nav',
    components: {
        UndoOutlined,
        RedoOutlined,
        ZoomInOutlined,
        DesktopOutlined,
        TabletOutlined,
        MobileOutlined,
        LockOutlined
    }
}
</script>

<style>
</style>