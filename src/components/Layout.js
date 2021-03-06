import React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import '../styles/index.css'

const Layout = ({ children, title }) => (
  <div>
    <div id='wrapper'>
      <Helmet
        title={title || 'bureau32'}
        meta={[
          {
            name: 'description',
            content: 'Office for architectural visualization.',
          },
          {
            name: 'keywords',
            content:
              'architecture, visualization, berlin, rendering, 3d, sebastian, georgescu, bureau32, architektur, visualisierung',
          },
        ]}
      />
      <Header />
      {children}
    </div>
  </div>
)

export default Layout
