<template>
    <div class="container">
      <div class="header">
        <h1 class="title">PinkQQx博客</h1>
        <h2 class="name">计算机网络</h2>
      </div>

      <div class="content">
        <CardGrid 
          :data="data" 
          :columns="3" 
          :rows="3" 
          :enable-pagination="true"
          @item-click="handleItemClick"
        />
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardGrid from './CardGrid.vue'

const data = ref([
  { id: 1, title: '计算机网络通信模型', description: '计算机网络基础原理、协议和实践应用', date: '2024-08-22', type: 'pdf', pdfPath: '/pdf/netWork/1.计算机网络通信模型.pdf' },
  { id: 2, title: '应用层协议', description: 'HTTP、HTTPS、FTP等应用层协议详解', date: '2024-06-10', type: 'pdf', pdfPath: '/pdf/netWork/2.应用层协议.pdf' },
  { id: 3, title: '传输层协议', description: 'TCP、UDP传输层协议原理和应用', date: '2025-01-05', type: 'pdf', pdfPath: '/pdf/netWork/3.传输层协议.pdf' },
  { id: 4, title: '网络层协议', description: 'IP协议、路由算法等网络层知识', date: '2025-06-01', type: 'pdf', pdfPath: '/pdf/netWork/4.网络层协议.pdf' },
  { id: 5, title: 'HTTP缓存机制', description: 'HTTP缓存策略和实现原理', date: '2025-6-28', type: 'pdf', pdfPath: '/pdf/netWork/5.HTTP缓存机制.pdf' },
  { id: 6, title: '跨域&CORS', description: '跨域问题的产生原因和解决方案', date: '2025-06-25', type: 'pdf', pdfPath: '/pdf/netWork/6.跨域&CORS.pdf' },
  { id: 7, title: '浏览器请求队列&并发限制', description: '浏览器网络请求的队列管理和并发控制', date: '2025-6-28', type: 'pdf', pdfPath: '/pdf/netWork/7.浏览器请求队列&并发限制.pdf' },
  { id: 8, title: 'HTTPS &TLS/SSL', description: 'HTTPS协议和TLS/SSL加密原理', date: '2025-7-01', type: 'pdf', pdfPath: '/pdf/netWork/8.HTTPS &TSLSSL.pdf' },
  { id: 9, title: 'CDN&负载均衡', description: 'CDN内容分发网络和负载均衡技术', date: '2025-7-05', type: 'pdf', pdfPath: '/pdf/netWork/9.CDN&负载均衡.pdf' },
  { id: 10, title: 'DNS解析', description: 'DNS域名解析系统的工作原理', date: '2025-7-10', type: 'pdf', pdfPath: '/pdf/netWork/10.DNS解析.pdf' },
  { id: 11, title: '前端请求库', description: 'Axios、Fetch等前端HTTP请求库', date: '2025-7-15', type: 'pdf', pdfPath: '/pdf/netWork/11.前端请求库.pdf' },
  { id: 12, title: 'HTTP长轮询', description: 'HTTP长轮询技术的实现和应用', date: '2025-7-20', type: 'pdf', pdfPath: '/pdf/netWork/12.HTTP长轮询.pdf' },
  { id: 13, title: 'WebSocket', description: 'WebSocket协议和实时通信应用', date: '2025-7-25', type: 'pdf', pdfPath: '/pdf/netWork/13.WebSocket.pdf' },
  { id: 14, title: 'SSR、CSR、SSG', description: '服务端渲染、客户端渲染和静态生成', date: '2025-7-30', type: 'pdf', pdfPath: '/pdf/netWork/14.SSR、CSR、SSG.pdf' },
  { id: 15, title: '并发请求', description: '前端并发请求的处理和优化', date: '2025-8-01', type: 'pdf', pdfPath: '/pdf/netWork/15.并发请求.pdf' },
  { id: 16, title: '文件上传实际情景', description: '文件上传的各种实现方案和优化', date: '2025-8-05', type: 'pdf', pdfPath: '/pdf/netWork/16.文件上传实际情景.pdf' },
  { id: 17, title: '文件下载实际情景', description: '文件下载的实现方案和用户体验优化', date: '2025-8-10', type: 'pdf', pdfPath: '/pdf/netWork/17.文件下载实际情景.pdf' },
  { id: 18, title: '分布式链路追踪', description: '微服务架构下的链路追踪技术', date: '2025-8-15', type: 'pdf', pdfPath: '/pdf/netWork/18.分布式链路追踪.pdf' },
  { id: 19, title: '取消请求', description: 'HTTP请求的取消机制和实现', date: '2025-8-20', type: 'pdf', pdfPath: '/pdf/netWork/19.取消请求.pdf' },
  { id: 20, title: '请求缓存', description: '前端请求缓存策略和实现', date: '2025-8-25', type: 'pdf', pdfPath: '/pdf/netWork/20.请求缓存.pdf' }
])

const handleItemClick = (item) => {
  // 可以在这里添加额外的处理逻辑
  console.log('点击了PDF:', item.title)

   if(!item.pdfPath){
    alert('文档还没整理上传 Ciallo～(∠・ω< )⌒★')  
    return
  }
  
  // 在新窗口打开本地PDF文件
  window.open(item.pdfPath, '_blank')
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