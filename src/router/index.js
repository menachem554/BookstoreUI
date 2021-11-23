import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewBook from '../views/NewBook.vue'
import GetBook from '../views/GetBook.vue'
import About from '../views/About.vue'
import Jobs from '../views//jobs/Jobs.vue'
import JobDetails from '../views//jobs/JobDetails.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'NewBook',
    component: NewBook,
  },
  {
    path: '/getBook',
    name: 'GetBook',
    component: GetBook,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },

  // Catchall 404
  {
    path: '/:Catchall(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
