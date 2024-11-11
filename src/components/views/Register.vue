<script lang="ts" setup>
import { Ref, ref } from 'vue'
import type { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import type { RegisterInfoState } from '../../../types/RegisterInfoState.ts'
import { userRegisterService } from '../../api/user.ts'
const formRef: Ref<FormInst | null> = ref(null)

const message = useMessage()

const model: Ref<RegisterInfoState> = ref({
    username: null,
    password: null,
    reenteredPassword: null
})

const rules: FormRules = {
    username: [
        {
            required: true,
            validator(rule: FormItemRule, value: string) {
                if (!value)
                    return new Error('需要用户名')
                else if (value.length < 3 || value.length > 16)
                    return new Error('用户名长度应在3到16')
                return true
            },
            trigger: ['input', 'blur']
        }
    ],
    password: [
        {
            required: true,
            validator(rule: FormItemRule, value: string) {
                if (!value)
                    return new Error('需要密码')
                else if (!/^(?![a-zA-Z]+$)(?!\d+$)(?![^\da-zA-Z\s]+$).{6,18}$/.test(value))
                    return new Error('密码长度应在6到18且至少包含数字,字母,特殊字符中的两种')
                return true
            },
            trigger: ['input', 'blur']
        }
    ],
    reenteredPassword: [
        {
            required: true,
            validator(rule: FormItemRule, value: string) {
                if (value !== model.value.password)
                    return new Error('密码不一致')
                return true
            },
            trigger: ['input', 'blur']
        }
    ]

}

const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            await userRegisterService(model.value)
            message.success('验证成功')
        }
        else {
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
        <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="重复密码">
            <n-input v-model:value="model.reenteredPassword" :disabled="!model.password" type="password"
                @keydown.enter.prevent placeholder="请重复密码" />
        </n-form-item>
        <n-row :gutter="[0, 24]">
            <n-col :span="24">
                <div style="display: flex; justify-content: center">
                    <n-button :disabled="model.username === null" round type="primary"
                        @click="handleValidateButtonClick">
                        注册
                    </n-button>
                </div>
            </n-col>
        </n-row>
    </n-form>

</template>

<style scoped></style>