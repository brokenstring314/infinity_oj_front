<script lang="ts" setup>
import { Ref, ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import type { LoginInfoState } from '../../../types/OutTypes'
import { userLoginService } from '../../api/user'

const formRef: Ref<FormInst | null> = ref(null)

const message = useMessage()

const model: Ref<LoginInfoState> = ref({
    username: null,
    password: null,
})

const rules: FormRules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: ['input', 'blur']
        }
    ],
    password: [
        {
            required: true,
            message: "请输入密码",
            trigger: ['input', 'blur']
        }
    ]
}

const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            await userLoginService(model.value)
        } else {
            message.error('验证失败')
        }
    })
}
</script>

<template>


    <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="username" label="用户名">
            <n-input v-model:value="model.username" @keydown.enter.prevent placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item path="password" label="密码">
            <n-input v-model:value="model.password" type="password" @keydown.enter.prevent placeholder="请输入密码" />
        </n-form-item>
        <n-row :gutter="[0, 24]">
            <n-col :span="24">
                <div style="display: flex; justify-content: space-between">
                    <n-checkbox>
                        记住我
                    </n-checkbox>
                    <span>还没有账号?前往注册</span>
                </div>
            </n-col>
            <n-col :span="24">
                <div style="display: flex; justify-content: center">
                    <n-button :disabled="model.username === null" round type="primary"
                        @click="handleValidateButtonClick">
                        登录
                    </n-button>
                </div>
            </n-col>

        </n-row>
    </n-form>

</template>

<style scoped></style>