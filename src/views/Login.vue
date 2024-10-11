<script setup>
import { reactive, ref } from 'vue';
import { AuthorizationCode } from '@/api/index.js'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'
import { ElMessage } from 'element-plus'
let store = useCounterStore()
const router = useRouter()

const form = reactive({
    user: '1409815550@qq.com',
    password: 'hachimidawang0.',
    checked: false,
    loginLoding: false
});

const rules = {
    user: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
}
const formRef = () => {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (re.exec(form.user) != null) {
        return true
    } else {
        return false
    }
}

const submitForm = async () => {
    // console.log(await formRef.value.validate());
    // if (!formRef()) { return }

    if (await formRef()) {
        if (form.checked != true) {
            ElMessage({
                message: '请同意服务协议和隐私政策',
                type: 'error',
                plain: true,
            })
            return
        }

        let userToken = await (AuthorizationCode(form.user, form.password))
        form.loginLoding = true

        if (userToken.status === 200) {
            store.$patch((state) => {
                state.access_token = userToken.data.access_token
                state.refresh_token = userToken.data.refresh_token
            })
            form.loginLoding = false
            ElMessage({
                message: '登录成功',
                type: 'success',
                plain: true,
            })
            setTimeout(() => {
                router.push('/Home/workbench/allStore')
            }, 1000)
        }
    } else {
        ElMessage({
            message: '请输入正确的邮箱',
            type: 'error',
            plain: true,
        })
    }
};
</script>
  
<template>
    <el-form :model="form" ref="formRef" :rules="rules">
        <el-form-item prop="user">
            <el-input v-model="form.user" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <div style="display: flex;justify-content: flex-start;align-items: center;">
            <el-checkbox v-model="form.checked" value="Option 1" size="large" />
            <div>我已阅读并同意</div>
            <el-link href="https://element-plus.org" style="font-size: 16px;color: rgb(3, 43, 236);">服务协议</el-link>
            <div>和</div>
            <el-link href="https://element-plus.org" style="font-size: 16px;color: rgb(3, 43, 236);">隐私政策</el-link>
        </div>
        <el-form-item>
            <el-button type="primary" @click="submitForm" size="large" :loading="form.loginLoding">登录</el-button>
        </el-form-item>
    </el-form>
</template>
  
