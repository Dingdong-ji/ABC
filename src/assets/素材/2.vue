<script setup>
import { ref } from 'vue'
import {
    useRouter, RouterLink,RouterView
} from 'vue-router'
const router = useRouter()
const arr = ref([
    { icon: '', title: '工作台', path: '/Home/workbench' },
    { icon: '', title: '项目', path: '/Home/project' },
    { icon: '', title: 'AI', path: '/Home/ai' },
    { icon: '', title: '事项', path: '/Home/issues' },
    { icon: '', title: '代码', path: '/Home/code' },
    { icon: '', title: '制品', path: '/Home/products' },
    { icon: '', title: '洞察', path: '/Home/discernment' },
    { icon: '', title: '知识', path: '/Home/knowledge' },
    { icon: '', title: '自动化', path: '/Home/automation' }
])
</script>

<template>
    <div>
        <!-- <RouterLink :to="arr[0].path">{{ arr[0].title }}</RouterLink>
        <RouterView></RouterView> -->
        <el-container direction="horizontal">
            <el-container direction="vertical">
                <el-aside width="200px" v-for="item in arr">
                    <RouterLink :to="item.path">{{ item.title }}</RouterLink>
                </el-aside>
            </el-container>
            <el-container>
                <el-header>代码仓库</el-header>
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>