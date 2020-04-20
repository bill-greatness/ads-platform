import {Main,
   Registration, PayRoll,Assessment,
   DataBase, Message, Profile, EditProfile, Team,
    Schedules} from '../components'

export const routes  = [
  {
    path:'/',
    component:Main,
    authenticated:false,
    id:'1'
  },
  {
    path:'/login',
    component:'/',
    authenticated:false,
    id:'2'
  },
  {
    path:'/logout',
    component:'/',
    authenticated:false,
    id:'3'
  },
  {
    path:'/register',
    component:Registration,
    authenticated:false,
    id:'4'
  },
  {
    path:'/messages',
    component:Message,
    authenticated:false,
    id:'5'
  },
  {
    path:'/event-schedules',
    component:Schedules,
    authenticated:false,
    id:'6'
  },
  {
    path:'/data-tables',
    component:DataBase,
    authenticated:false,
    id:'32'
  },
  {
    path:'/assessments',
    component:Assessment,
    authenticated:false,
    id:'7'
  },
  {
    path:'/preview-account',
    component:Profile,
    authenticated:false,
    id:'8'
  },
  {
    path:'/edit-profile',
    component:EditProfile,
    authenticated:false,
    id:'9'
  },
  {
    path:'/team',
    component:Team,
    authenticated:false,
    id:'10'
  },
  {
    path:'/payroll',
    component:PayRoll,
    authenticated:false,
    id:'11'
  }
]
