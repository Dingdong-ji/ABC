<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const arr = ref([
    {
        path: '/Home/workbench/recentlyVisited',
        title: '最近访问'
    },
    {
        path: '/Home/workbench/allStore'
        ,
        title: '全部仓库'
    },
    {
        path: '/Home/workbench/openStore'
        ,
        title: '开源仓库'
    }
])
</script>

<template>
    <div>
        <div
            style="border-bottom: 1px solid rgb(237, 237, 243); padding-left: 3%;padding-bottom: 1%;padding-top: 1%;margin-bottom: 3%;">
            <div style="display: flex;">
                <div style="display: flex;justify-content:space-between;width: 100%;align-items: center;">
                    <div>
                        <RouterLink :to="item.path" style="text-decoration: none;color: rgb(53, 66, 83);margin-right: 1rem;"
                            v-for="item in arr">{{ item.title }}
                        </RouterLink>
                    </div>
                    <el-button color="rgb(43, 50, 61)" size="default">创建代码仓库</el-button>


                </div>
            </div>
        </div>
        <div style="display: flex;justify-content: center;">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped>
a:focus {
    padding-bottom: 0.8rem;
    border-bottom: 2px solid rgb(23, 109, 230);
}
</style>