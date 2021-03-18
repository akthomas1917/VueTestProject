import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

// COMPONENTS
import HelloWorld from "./components/HelloWorld";
import Login from "./components/Login";
import StudentHomepage from "./components/StudentHomepage"
import CourseHistory from "./components/CourseHistory"
import CourseOfferings from "./components/CourseOfferings"
import SuggestCoursePlan from "./components/SuggestCoursePlan"
import DegreeRequirements from "./components/DegreeRequirements"
import StudentData from "./components/StudentData"
import GPDHomepage from "./components/GPDHomepage"
import EnrollmentTrends from "./components/EnrollmentTrends"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/studenthomepage', component: StudentHomepage },
    { path: '/coursehistory', component: CourseHistory },
    { path: '/courseofferings', component: CourseOfferings },
    { path: '/suggestcourseplan', component: SuggestCoursePlan },
    { path: '/degreerequirements', component: DegreeRequirements },
    { path: '/studentdata', component: StudentData },
    { path: '/gpdhomepage', component: GPDHomepage },
    { path: '/enrollmenttrends', component: EnrollmentTrends },
  ],

  mode: 'history'

})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
