import React from 'react';
import { render } from 'react-dom'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/en/messages.js'
import Content from './Content.js'

i18n.load('en', messages)
i18n.activate('en')

const App = () => (

  <I18nProvider i18n={i18n}>
    <Content/>
  </I18nProvider>
)

render(<App />, document.getElementById('root'))


