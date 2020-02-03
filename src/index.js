import 'unfetch/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import LanguageContext, { LanguageProvider } from './contexts/LanguageContext'
import App from './components/App/App'
import './setup-icons'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <LanguageProvider>
      <UserProvider>
        <LanguageContext.Consumer>
          {languageContext => <App />}
        </LanguageContext.Consumer>
        {/* <App />  */}
      </UserProvider>
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
