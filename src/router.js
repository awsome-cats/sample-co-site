import Vue from 'vue';
import Router from 'vue-router';


import Home4 from './views/Home4.vue'
import About4 from './components4/aboutContent/About4.vue'
import Contact4 from './components4/Contact4.vue'
import CampContent from './components4/CampContent.vue'
import HigherGraderContent from './components4/HigerGraderContent.vue'
import JuniorContent from './components4/JuniorContent.vue'
import HighSchoolContent from './components4/HighSchoolContent.vue'
import TestLink from './views/TestLink.vue'
import TestPara from './views/TestPara.vue'
import Recruite from './components4/Recruite.vue'
import Training from './components4/ Training.vue'
import MainBrifing from './views/briefing/MainBriefing.vue'



Vue.use(Router);

export default new Router({
  // mode: 'history',

  routes: [
   {
     path: '/',
     component: Home4
   },
   {
     path: '/about',
     component: About4
   },
   {
     path: '/contact',
     name: 'Contact4',
     component: Contact4
   },
   {
     path: '/camp',
     name: 'CampContent',
     component: CampContent
	},
	{
		path:'/higher-grader-course',
		name:'HigherGraderContent',
		component:HigherGraderContent
	
	},
	{
		path:'/junior-course',
		name:'JuniorContent',
		component:JuniorContent
	},
	{
		path:'/high-school-course',
		name:'HighSchoolContent',
		component:HighSchoolContent
  },
  {
    path:'/recruite',
    name:'Recruite',
    component:Recruite
  },
  {
    path:'/training',
    name:'Training',
    component:Training
  },
  {
    path:'/test-link',
    name:'TestLink',
    component:TestLink
  },
  {
    path:'/test-link/:id',
    name:'TestPara',
    component:TestPara,
    props: route =>({
      id:Number(route.params.id)
    })
  },
  {
    path:'/briefing-main',
    name:'MainBriefing',
    component:MainBrifing
  }

   ]
})