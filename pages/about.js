import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout title="About the app">
    <h1>About</h1>
    <p>This site will be a conference schedule eventually.</p>
    <p>
      <Link prefetch href="/contact">
        <a>Get in touch</a>
      </Link>
    </p>
  </Layout>
)
