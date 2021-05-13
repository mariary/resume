import './App.css'
import {Redirect, Route} from 'react-router'
import {Main} from './components/Content/Main/Main'
import {Header} from './components/Header/Header'
import {About} from './components/Content/About/About'
import {Projects} from './components/Content/Projects/Projects'

function App() {

    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Route exact path={'/'}>
                    <Redirect to={'/home'}/>
                </Route>
                <Route path={'/home'} component={Main}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/projects'} component={Projects}/>
            </div>
        </div>
    )
}

export default App
