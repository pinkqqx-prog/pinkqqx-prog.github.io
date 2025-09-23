<template>
    <div class="container">
      <div class="header">
        <h1 class="title">PinkQQx博客</h1>
        <h2 class="name">前端学习笔记</h2>
      </div>

      <div class="content">
        <CardGrid 
          :data="data" 
          :columns="3" 
          :rows="3" 
          :enable-pagination="false"
          @item-click="handleItemClick"
        />
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CardGrid from './CardGrid.vue'

const router = useRouter()
const data = ref([
  { id: 1, title: '计算机网络', description: '计算机网络基础原理、协议和实践应用', date: '2024-08-22', type: 'component', url: "/network" },
  { id: 2, title: 'Vue(2/3)', description: 'Vue.js框架的使用和核心概念解析', date: '2024-06-10', type: 'component' },
  { id: 3, title: 'React Hook', description: 'React.js框架的使用和核心概念解析', date: '2025-01-05', type: 'component' },
  { id: 4, title: '实际情景开发', description: '实际项目中遇到的问题、情景解决', date: '2025-06-01', type: 'component' },
  { id: 5, title: 'TypeScript 入门', description: 'TypeScript基础语法和在项目中的应用', date: '2025-6-28', type: 'component' },
  { id: 6, title: '微前端架构学习', description: '微前端架构的原理、实现和应用场景', date: '2025-06-25', type: 'component' },
  { id: 7, title: '流水线cicd', description: '流水线cicd的原理、实现和应用场景,基于腾讯bk-ci', date: '2025-6-28', type: 'component' },
])

const handleItemClick = (item) => {
  if(!item.url){
    alert('文档还没整理上传 Ciallo～(∠・ω< )⌒★')  
    return
  }
  router.push(item.url)
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0 200px;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #552583, #7B2CBF, #9A4993, #FDB927);
  box-sizing: border-box;
}

.header {
  padding: 20px;
}

.title {
  color: #841ae1;
  font-size: 45px;
  font-weight: bold;
  margin: 30px 0px 20px;
  text-shadow: 6px 5px 6px #b4a074;
}

.name {
  color: #FDB927;
  font-size: 24px;
  font-weight: bold;
}

.content {
  margin-top: 20px;
  padding: 0 20px 20px 20px;
}
</style>