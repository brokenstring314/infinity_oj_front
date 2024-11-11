<script lang="ts" setup>
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
</script>

<template>

    <n-tabs type="line" animated>
        <n-tab-pane name="登录">
            <h2>登录</h2>
            <Login></Login>
        </n-tab-pane>
        <n-tab-pane name="注册">
            <h2>注册</h2>
            <Register></Register>
        </n-tab-pane>
    </n-tabs>

</template>

<style scoped></style>