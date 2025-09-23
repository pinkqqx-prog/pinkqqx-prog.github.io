<template>
  <div class="card-grid-container">
    <div class="card-grid" :style="gridStyle">
      <div 
        v-for="item in paginatedData" 
        :key="item.id" 
        class="card" 
        @click="handleClick(item)"
      >
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-description">{{ item.description }}</p>
        <span class="card-date">{{ item.date }}</span>
      </div>
    </div>
    
    <!-- 分页组件 - 只在需要时显示 -->
    <div v-if="showPagination" class="pagination">
      <button 
        class="pagination-btn" 
        @click="prevPage" 
        :disabled="currentPage === 1"
      >
        上一页
      </button>
      
      <div class="pagination-numbers">
        <button 
          v-for="page in totalPages" 
          :key="page"
          class="pagination-number"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        class="pagination-btn" 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
      >
        下一页
      </button>
    </div>
    
    <!-- 分页信息 - 只在需要时显示 -->
    <div v-if="showPagination" class="pagination-info">
      第 {{ currentPage }} 页，共 {{ totalPages }} 页，总计 {{ data.length }} 个文档
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 定义props
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Number,
    default: 3
  },
  rows: {
    type: Number,
    default: 3
  },
  enablePagination: {
    type: Boolean,
    default: true
  }
})

// 定义事件
const emit = defineEmits(['item-click'])

// 分页相关状态
const currentPage = ref(1)

// 计算每页显示的数量
const pageSize = computed(() => props.columns * props.rows)

// 计算网格样式
const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.columns}, 1fr)`
}))

// 计算是否需要显示分页
const showPagination = computed(() => {
  return props.enablePagination && props.data.length > pageSize.value
})

// 计算分页数据
const totalPages = computed(() => {
  if (!showPagination.value) return 1
  return Math.ceil(props.data.length / pageSize.value)
})

const paginatedData = computed(() => {
  if (!showPagination.value) {
    // 如果不需要分页，返回前 pageSize 个数据
    return props.data.slice(0, pageSize.value)
  }
  
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return props.data.slice(start, end)
})

// 分页方法
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// 点击处理
const handleClick = (item) => {
  // 发射事件给父组件
  emit('item-click', item)
  
  // 根据类型处理点击
  if (item.type === 'pdf') {
    if (!item.pdfPath) {
      alert('文档还没整理上传 Ciallo～(∠・ω< )⌒★')
      return
    }
    // 在新窗口打开PDF文件
    window.open(item.pdfPath, '_blank')
  } else if (item.type === 'component') {
    if (!item.url) {
      alert('文档还没整理上传 Ciallo～(∠・ω< )⌒★')
      return
    }
    // 路由跳转
    router.push(item.url)
  }
}
</script>

<style scoped>
.card-grid-container {
  width: 100%;
}

.card-grid {
  display: grid;
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

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 20px;
  gap: 10px;
}

.pagination-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 10px 20px;
  color: #FDB927;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 5px;
}

.pagination-number {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 8px 12px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;
}

.pagination-number:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.pagination-number.active {
  background: #FDB927;
  color: #552583;
  font-weight: bold;
  border-color: #FDB927;
}

.pagination-info {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>