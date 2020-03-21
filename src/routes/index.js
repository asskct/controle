import Home from '../components/home'
import Pelada from '../components/pelada'

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
]

export default Routes