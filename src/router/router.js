import { createRouter, createWebHistory } from 'vue-router'

//import SchoolHome from '../views/SchoolHome.vue'
//import SchoolMenu from '../views/SchoolMenu.vue'
//import SchoolAbout from '../views/SchoolAbout.vue'
//import SchoolAboutBasicData from '../views/SchoolAboutBasicData.vue'
import SchoolAboutStructure from '../views/SchoolAboutStructure.vue'
import SchoolAboutDocuments from '../views/SchoolAboutDocuments.vue'
import SchoolAboutEducation from '../views/SchoolAboutEducation.vue'
import SchoolAboutEducationProgramPrimary from '../views/SchoolAboutEducationProgramPrimary.vue'
import SchoolAboutEducationProgramSecondary from '../views/SchoolAboutEducationProgramSecondary.vue'
import SchoolAboutEducationWorkProgramPrimary from '../views/SchoolAboutEducationWorkProgramPrimary.vue'
import SchoolAboutEducationWorkProgramSecondary from '../views/SchoolAboutEducationWorkProgramSecondary.vue'
//import SchoolODOD from '../views/SchoolODOD.vue'
import SchoolPaidEducationalServices from '../views/SchoolPaidEducationalServices.vue'
//import SchoolScheduleHigh from '../views/old/SchoolScheduleHigh.vue'
//import SchoolScheduleJunior from '../views/old/SchoolScheduleJunior.vue'
//import SchoolTeachers from '../views/SchoolTeachers.vue'
//import SchoolTeacherID from '../views/SchoolTeacherID.vue'
//import SchoolAdministration from '../views/SchoolAdministration.vue'
//import SchoolAdministrationID from '../views/SchoolAdministrationID.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import Administration from '../views/Administration.vue'
import AdministrationID from '../views/AdministrationID.vue'
import Teachers from '../views/Teachers.vue'
import TeacherID from '../views/TeacherID.vue'
import ODOD from '../views/ODOD.vue'
import AboutBasicData from '../views/AboutBasicData.vue'




//import RipHome from '../views/old/RipHome.vue'
/*import RipMenu from '../views/RipMenu.vue'*/
//import RipDocuments from '../views/old/RipDocuments.vue'




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
    path: '/odod',
    name: 'ODOD',
    component: ODOD
  },
  {
    path: '/about/basic-data',
    name: 'AboutBasicData',
    component: AboutBasicData
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
    path: '/paid-educational-services',
    name: 'SchoolPaidEducationalServices',
    component: SchoolPaidEducationalServices
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
