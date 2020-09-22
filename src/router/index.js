import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/home.vue'
import alarm from '../views/alarm/MainAlarmItem.vue'
import info from '../views/info/MainInfoItem.vue'
import equipmentInfo from '../views/equipment/MainEquipmentInfo.vue'
import equipmentStatistics from '../views/equipment/MainEquipmentStatistics.vue'

Vue.use(Router);

const router = new Router({
  routes:[
    {
      path:'/home',
      component: home,
      children:[  
      {
        path:'info',
        component: info
      },
      {
        path:'alarm',
        component: alarm
      },
      {
        path:'equipmentInfo',
        component: equipmentInfo

      },
      {
        path:'equipmentStatistics',
        component: equipmentStatistics
      }
      ]
    },
  ]
})

export default router