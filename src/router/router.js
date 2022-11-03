import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Administration from '../views/Administration.vue'
import AdministrationID from '../views/AdministrationID.vue'
import Teachers from '../views/Teachers.vue'
import TeacherID from '../views/TeacherID.vue'
import ODOD from '../views/ODOD.vue'
import AboutBasicData from '../views/AboutBasicData.vue'
import AboutStructure from '../views/AboutStructure.vue'
import AboutDocuments from '../views/AboutDocuments.vue'
import AboutEducation from '../views/AboutEducation.vue'
import AboutEducationProgramPrimary from '../views/AboutEducationProgramPrimary.vue'
import AboutEducationProgramSecondary from '../views/AboutEducationProgramSecondary.vue'
import AboutEducationWorkProgramPrimary from '../views/AboutEducationWorkProgramPrimary.vue'
import AboutEducationWorkProgramSecondary from '../views/AboutEducationWorkProgramSecondary.vue'
import AboutEducationPaidServices from '../views/AboutEducationPaidServices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/about/basic-data',
    name: 'AboutBasicData',
    component: AboutBasicData
  },
  {
    path: '/about/structure',
    name: 'AboutStructure',
    component: AboutStructure
  },
  {
    path: '/about/documents',
    name: 'AboutDocuments',
    component: AboutDocuments
  },
  {
    path: '/about/education',
    name: 'AboutEducation',
    component: AboutEducation
  },
  {
    path: '/about/education/education-program-primary',
    name: 'AboutEducationProgramPrimary',
    component: AboutEducationProgramPrimary
  },
  {
    path: '/about/education/education-program-secondary',
    name: 'AboutEducationProgramSecondary',
    component: AboutEducationProgramSecondary
  },
  {
    path: '/about/education/work-program-primary',
    name: 'AboutEducationWorkProgramPrimary',
    component: AboutEducationWorkProgramPrimary
  },
  {
    path: '/about/education/work-program-secondary',
    name: 'AboutEducationWorkProgramSecondary',
    component: AboutEducationWorkProgramSecondary
  },
  {
    path: '/odod',
    name: 'ODOD',
    component: ODOD
  },
  {
    path: '/administration',
    name: 'Administration',
    component: Administration
  },
  {
    path: '/administration/:id',
    name: 'AdministrationID',
    component: AdministrationID,
    props: true
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/teachers/:id',
    name: 'TeacherID',
    component: TeacherID,
    props: true
  },
  {
    path: '/about/education/paid_services',
    name: 'AboutEducationPaidServices',
    component: AboutEducationPaidServices
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
