<template>
    <nav class="editor-nav flex">
        <select class="page-nav">
            <option value="home">Page: Home</option>
        </select>
        <div class="view-port-mode flex">
            <button>Tablet</button>
            <button>Phone</button>
        </div>
        <div class="demo-site-domain">
            <div>
                <span>https://webix.com/my-site</span>
            </div>
        </div>
        <div>
            <button>Undo</button>
            <button>Redo</button>
        </div>
        <div>
            <button>Zoom</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'editor-nav',
}
</script>

<style>
</style>