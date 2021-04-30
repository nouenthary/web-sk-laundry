<template>
    <a-layout id="components-layout-demo-fixed">
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo" />
            <a-menu
                theme="dark"
                mode="horizontal"
                :default-selected-keys="['2']"
            >

                <a-menu-item key="1">
                    <router-link to="/service">
                        Service
                    </router-link>
                </a-menu-item>



                <a-menu-item key="2">
                    <router-link to="/customer">
                        customer
                    </router-link>
                </a-menu-item>

                <a-menu-item key="3">
                    <router-link to="/product">
                        Product
                    </router-link>
                </a-menu-item>

            </a-menu>
        </a-layout-header>
        <a-layout-content :style="{ marginTop: '50px' }">
            <div :style="{ height: '100vh', background: '#fff', padding: '5px' }">
                <router-view></router-view>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
    export default {
        name: "MainLayout"
    }
</script>

<style scoped>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
