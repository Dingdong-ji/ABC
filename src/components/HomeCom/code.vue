<script setup>
import { reactive, ref } from 'vue';
import { AuthorizationCode } from '@/api/index.js'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'
let store = useCounterStore()
const router = useRouter()
console.log(store.access_token);
const form = reactive({
    user: '1409815550@qq.com',
    password: 'hachimidawang0.',
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
    if (await formRef()) {
        let userToken = await (AuthorizationCode(form.user, form.password))
        if (userToken.status === 200) {
            store.$patch((state) => {
                state.access_token = userToken.data.access_token
                state.refresh_token = userToken.data.refresh_token
            })
            router.push('/Home/workbench')
        }
    } else {
        alert('请输入正确的邮箱')
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
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
    </el-form>
</template>
  
