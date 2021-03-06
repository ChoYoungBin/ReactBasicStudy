import { Route, Switch } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import MainNavigation from './component/layout/MainNavigation'

const App = () => {
    return (
        <div>
            <MainNavigation />
            <Switch>
                <Route path="/" exact={true}>
                    <AllMeetups />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetup />
                </Route>
            </Switch>
        </div>
    )
}
export default App
