import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Atoms from './examples/Atoms'
import {RecoilRoot} from 'recoil'
import {Selectors} from './examples/Selectors'
import {AtomEffects} from './examples/AtomEffects'
import {AtomEffectFamilies} from './examples/AtomEffectFamilies'
import {AtomEffectAsync} from './examples/AtomEffectAsync'
import RecoilLogger from 'recoil-logger'
import {Async} from './examples/Async'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <RecoilLogger />
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path="/examples/atoms">
                            <Atoms />
                        </Route>
                        <Route path="/examples/selectors">
                            <Selectors />
                        </Route>
                        <Route path="/examples/async">
                            <Async />
                        </Route>
                        <Route path="/examples/atomEffects">
                            <AtomEffects />
                        </Route>
                        <Route path="/examples/atomEffectFamilies">
                            <AtomEffectFamilies />
                        </Route>
                        <Route path="/examples/atomEffectAsync">
                            <AtomEffectAsync />
                        </Route>
                        <Route>
                            <Canvas />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
