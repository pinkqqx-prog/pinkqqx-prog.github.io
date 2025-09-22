<template>
    <div class="container">
      <div class="header">
        <h1 class="title">PinkQQx博客</h1>
     
          <h2 class="name">前端学习笔记</h2>
   
       
      </div>

      <div class="content">
        <div class="card-grid">
          <div v-for="item in data" :key="item.id" class="card" @click="handleClick(item)">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.description }}</p>
            <span class="card-date">{{ item.date }}</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = ref([
  { id: 1, title: '计算机网络', description: '计算机网络基础原理、协议和实践应用', date: '2024-08-22',url:"/network" },
  { id: 2, title: 'Vue(2/3)', description: 'Vue.js框架的使用和核心概念解析', date: '2024-06-10' },
  { id: 3, title: 'React Hook', description: 'React.js框架的使用和核心概念解析', date: '2025-01-05' },
  { id: 4, title: '实际情景开发', description: '实际项目中遇到的问题、情景解决', date: '2025-06-01' },
  { id: 5, title: 'TypeScript 入门', description: 'TypeScript基础语法和在项目中的应用', date: '2025-6-28' },
  { id: 6, title: '微前端架构学习', description: '微前端架构的原理、实现和应用场景', date: '2025-06-25' },
  { id: 7, title: '流水线cicd', description: '流水线cicd的原理、实现和应用场景,基于腾讯bk-ci', date: '2025-6-28' },
])


const handleClick = (item) => {
  if(!item.url){
    alert('文档还没整理上传 Ciallo～(∠・ω< )⌒★')  
    return
  }

  router.push(item.url)
}
</script>

<style  scoped>

.container{
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

.title{
  color: #841ae1;
  font-size: 45px;
  font-weight: bold;
  margin: 30px 0px 20px;
  text-shadow: 6px 5px 6px #b4a074;
}

.name{
  color: #FDB927;
  font-size: 24px;
  font-weight: bold;
}

.content {
  margin-top: 20px;
  padding: 0 20px 20px 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card-title {
  color: #FDB927;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.card-date {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-style: italic;
}



.my-img{

  width: 100px;
  height: 100px;
  margin-left: 10px;
}


</style>