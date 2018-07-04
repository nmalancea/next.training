import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import Header from './Header'
import Footer from './Footer'

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = 'Nextconf Schedule' }) => (
  <div id="root">
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/static/nprogress.css" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
