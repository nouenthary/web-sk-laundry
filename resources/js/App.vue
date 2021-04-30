<template>
    <router-view></router-view>
</template>

<style lang="scss">
    .ant-table-tbody {
        background: #fff;
    }

    .ant-btn,
    .ant-input,
    .ant-select-selection,
    .ant-pagination-item,
    .ant-pagination-item-link,
    .ant-modal-content,
    .ant-table-small {
        border-radius: 2px !important;
    }

    .ant-layout-header {
        height: 50px !important;
        line-height: 50px !important;
    }

    .ant-menu-horizontal {
        line-height: 50px !important;
    }

    .ant-table-body {
        margin: 0 !important;
    }

</style>

<script>
    export default {
        name: "LastRowFixed",
        data: () => ({
            menuVisible: false,
            collapsed: false
        })
    };
</script>
