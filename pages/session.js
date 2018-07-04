import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Session from '../components/Session'

const SessionPage = ({ session, rating }) => (
  <Layout>
    <Session {...session} rating={rating} />
  </Layout>
)

SessionPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3001/schedule/${query.slug}`)
  const session = await res.json()[0]

  console.log(session)

  return { session, rating: query.rating }
}

export default SessionPage
