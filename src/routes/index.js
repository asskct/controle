import Home from '../components/home'
import Pelada from '../components/pelada'
import Chat from '../components/chat'
import Caixa from '../components/caixa'
import Galeria from '../components/galeria'

import Admin from '../components/admin'

const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,      
  },
  {
    path: "/pelada",
    component: Pelada
  },
  {
    path: "/chat",
    component: Chat
  },
  {
    path: "/caixa",
    component: Caixa
  },
  {
    path: "/galeria",
    component: Galeria
  },
  {
    path: "/admin",
    component: Admin
  },
]

export default Routes