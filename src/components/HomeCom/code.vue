<script setup>
import { reactive, ref } from 'vue';
import { AuthorizationCode } from '@/api/index.js'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'
let store = useCounterStore()
const router = useRouter()
const form = reactive({
    project: '',
    gitWarehouseType: '',
    WarehouseName: '',
    WarehouseDescription:'',
    checked: {
        checked1: true,
        checked2: false,
        checked3: false
    },
    radio: 'private'
})
const rules = reactive({
    project: [
        { required: true, message: '这是必需的' },
    ],
    gitWarehouseType: [
        { required: true, message: '这是必需的' },
    ],
    WarehouseName: [
        { required: true, message: '这是必需的' },
        { mix: 1, max: 100, message: '超过最大长度' }
    ]

})

const submitForm = (e) => {
    console.log(form.checked.checked1);
    console.log(e);
}
// {
//     validator: (rule, value, callback) => {

//     }
// }
</script>
  
<template>
    <div style="display: flex;align-items: center;">
        创建代码仓库
    </div>
    <el-form :model="form" :rules="rules">
        <el-form-item label="所属项目" label-position="top" prop="project">
            <el-select v-model="form.project" clearable style="width: 20%;" placeholder="所属项目" autocomplete="off">
                <el-option label='hachimi' value="哈基米"></el-option>
                <el-option lable="hachiwang" value="哈基汪"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item style="display: flex;">
            <el-form-item label="仓库类型" label-position="top" style="width: 8%;" prop="gitWarehouseType">
                <el-select placeholder="Git 仓库" v-model="form.gitWarehouseType" clearable autocomplete="off">
                    <el-option label='hachimi' value="哈基米"></el-option>
                    <el-option lable="hachiwang" value="哈基汪"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="仓库名称" label-position="top" style="width: 52%;" prop="WarehouseName">
                <el-input v-model="form.WarehouseName" style="width: 100%;" maxlength="100"
                    placeholder="仓库名称只支持字母，数字，下划线(_)，中划线(-)和点(.)的组合" show-word-limit type="text" />
            </el-form-item>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.WarehouseDescription" style="width:50%" :rows="2" type="textarea" placeholder="请输入仓库描述"></el-input>
        </el-form-item>
        <el-form-item label="初始化仓库" prop="checked">
            <el-checkbox-group style="display: flex;flex-direction: column;" v-model="form.checked.checked1">
                <el-checkbox  label="生成 README 文件" size="large" name="type"/>
                <el-checkbox  label="生成 .gitignore 文件" size="large" name="type"/>
                <el-checkbox  label="添加分支模型（仓库创建后将根据所选模型创建分支）" size="large" disabled name="type"/>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="是否开源" prop="radio">
            <el-radio-group style="display: block;" v-model="form.radio">
                <el-radio value="private" size="large" style="display: block;">私有仓库</el-radio>
                <el-radio value="public" size="large" style="display: block;">公开仓库</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-button color="rgb(43, 50, 61)" size="default" type="primary" @click="submitForm">完成创建</el-button>
        <el-button color="rgb(43, 50, 61)" size="default">取消</el-button>
    </el-form>
</template>
  
<style scoped></style>