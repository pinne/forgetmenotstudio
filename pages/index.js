import Layout from '../components/layout'
import Contacts from '../components/contacts'
import ProjectPuff from '../components/project-puff'

export default function Home() {
  return (
    <Layout>
      <main>
        <ProjectPuff />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Contacts />
      </main>
    </Layout>
  )
}
