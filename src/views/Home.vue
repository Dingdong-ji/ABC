<script setup>
import { ref } from 'vue'
import {
    useRouter, RouterLink, RouterView
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
            <div style="display: flex;flex-direction: column;border-right: 1px solid black;">
                <el-aside width="6rem" v-for="item in arr">
                    <RouterLink :to="item.path"
                        style="display: flex;justify-content: center;text-decoration: none;color: black;">{{ item.title }}
                    </RouterLink>
                </el-aside>
            </div>
            <el-container style="display: flex;flex-direction: column;margin-bottom: 4%;">
                <div style="border-bottom: 1px solid rgb(0, 0, 0);display: flex;align-items: center;padding-left: 3%;padding-bottom: 1%;padding-top: 1%;">
                    代码仓库
                </div>
                <div >
                    <RouterView></RouterView>
                </div>
            </el-container>
        </el-container>
    </div>
</template>