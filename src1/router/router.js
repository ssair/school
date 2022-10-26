import { createRouter, createWebHistory } from 'vue-router'

import SchoolHome from '../views/SchoolHome.vue'
import SchoolMenu from '../views/SchoolMenu.vue'
import SchoolAbout from '../views/SchoolAbout.vue'
import SchoolAboutBasicData from '../views/SchoolAboutBasicData.vue'
import SchoolAboutStructure from '../views/SchoolAboutStructure.vue'
import SchoolAboutDocuments from '../views/SchoolAboutDocuments.vue'
import SchoolAboutEducation from '../views/SchoolAboutEducation.vue'
import SchoolAboutEducationProgramPrimary from '../views/SchoolAboutEducationProgramPrimary.vue'
import SchoolAboutEducationProgramSecondary from '../views/SchoolAboutEducationProgramSecondary.vue'
import SchoolAboutEducationWorkProgramPrimary from '../views/SchoolAboutEducationWorkProgramPrimary.vue'
import SchoolAboutEducationWorkProgramSecondary from '../views/SchoolAboutEducationWorkProgramSecondary.vue'
import SchoolODOD from '../views/SchoolODOD.vue'
import SchoolPaidEducationalServices from '../views/SchoolPaidEducationalServices.vue'
import SchoolScheduleHigh from '../views/SchoolScheduleHigh.vue'
import SchoolScheduleJunior from '../views/SchoolScheduleJunior.vue'
import SchoolTeachers from '../views/SchoolTeachers.vue'
import SchoolTeacherID from '../views/SchoolTeacherID.vue'
import SchoolAdministration from '../views/SchoolAdministration.vue'
import SchoolAdministrationID from '../views/SchoolAdministrationID.vue'

import Test from '../views/Test.vue'



import RipHome from '../views/RipHome.vue'
/*import RipMenu from '../views/RipMenu.vue'*/
import RipDocuments from '../views/RipDocuments.vue'




const routes = [
  {
    path: '/',
    name: 'SchoolHome',
    component: SchoolHome
  },
  {
    path: '/menu',
    name: 'SchoolMenu',
    component: SchoolMenu
  },
  {
    path: '/about',
    name: 'SchoolAbout',
    component: SchoolAbout
  },
  {
    path: '/about/basic-data',
    name: 'SchoolAboutBasicData',
    component: SchoolAboutBasicData
  },
  {
    path: '/about/structure',
    name: 'SchoolAboutStructure',
    component: SchoolAboutStructure
  },
  {
    path: '/about/documents',
    name: 'SchoolAboutDocuments',
    component: SchoolAboutDocuments
  },
  {
    path: '/about/education',
    name: 'SchoolAboutEducation',
    component: SchoolAboutEducation
  },
  {
    path: '/about/education/education-program-primary',
    name: 'SchoolAboutEducationPrimary',
    component: SchoolAboutEducationProgramPrimary
  },
  {
    path: '/about/education/education-program-secondary',
    name: 'SchoolAboutEducationSecondary',
    component: SchoolAboutEducationProgramSecondary
  },
  {
    path: '/about/education/work-program-primary',
    name: 'SchoolAboutEducationWorkProgramPrimary',
    component: SchoolAboutEducationWorkProgramPrimary
  },
  {
    path: '/about/education/work-program-secondary',
    name: 'SchoolAboutEducationWorkProgramSecondary',
    component: SchoolAboutEducationWorkProgramSecondary
  },
  {
    path: '/odod',
    name: 'SchoolODOD',
    component: SchoolODOD
  },
  {
    path: '/paid-educational-services',
    name: 'SchoolPaidEducationalServices',
    component: SchoolPaidEducationalServices
  },
  {
    path: '/schoolschedulehigh',
    name: 'SchoolScheduleHigh',
    component: SchoolScheduleHigh
  },
  {
    path: '/schoolschedulejunior',
    name: 'SchoolScheduleJunior',
    component: SchoolScheduleJunior
  },
  {
    path: '/school-teachers',
    name: 'SchoolTeachers',
    component: SchoolTeachers
  },
  {
    path: '/school-teachers/:id',
    name: 'SchoolTeacherID',
    component: SchoolTeacherID,
    props: true
  },
  {
    path: '/school-administration',
    name: 'SchoolAdministration',
    component: SchoolAdministration
  },
  {
    path: '/school-administration/:id',
    name: 'SchoolAdministrationID',
    component: SchoolAdministrationID,
    props: true
  },
  {
    path: '/rip',
    name: 'RipHome',
    component: RipHome
  },/*
  {
    path: '/rip/menu',
    name: 'RipMenu',
    component: RipMenu
  },*/
  {
    path: '/rip/documents',
    name: 'RipDocuments',
    component: RipDocuments
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
  //scrollBehavior() {
  // always scroll to top
  //return { top: 0 }
  //}
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 })
        }, 50)
      })
    }
  },
})

router.beforeEach(( ) => {
  let elemHeader = document.getElementById('page__header');
  elemHeader.style.backgroundColor = 'rgba(254, 254, 254, .7)';
  elemHeader.style.backdropFilter = "blur(20px)";
  elemHeader.style.webkitBackdropFilter = "blur(20px)";
  elemHeader.style.borderBottom = "1px solid #d5dddf"
  elemHeader.style.transition = "0s"
})

export default router
