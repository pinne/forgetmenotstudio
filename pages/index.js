import Layout from '../components/layout'
import Contacts from '../components/contacts'
import ProjectPuff from '../components/project-puff'

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>Forget<br />me not<br />studio</h1>
      </header>
      <main>
        <Contacts />
      </main>
    </Layout>
  )
}
