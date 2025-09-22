import main from '@/components/main.vue'
import network from '@/components/network.vue'

const routerArr = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/network',
    name: 'network',
    component: network
  }
]
export default routerArr
