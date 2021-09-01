import Link from 'next/link'

import Layout from '../components/layout'

function NameBox({ name, email, phoneNumber }) {
  return (
    <div className='nameBox'>
      <p className='nameText'>{name}</p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p>
        <a href={`tel:${phoneNumber}`}>
          {phoneNumber
            .replace(/-/g, '')
            .replace(
              /\+\d\d(\d\d)(\d\d\d)(\d\d)(\d\d)/,
              '0$1-$2 $3 $4'
            )
          }
        </a>
      </p>
    </div>
  )
}
export default function Home() {
  return (
    <Layout>
      <main>
        <div className='names'>
          <NameBox
            name='Hanna Lindblom'
            email='hanna@forgetmenotstudio.se'
            phoneNumber='+46-70-3878287'
          />
          <NameBox
            name='Lina Antonisen'
            email='lina@forgetmenotstudio.se'
            phoneNumber='+46-70-8471921'
          />
          <NameBox
            name='Erika Söderberg'
            email='erika@forgetmenotstudio.se'
            phoneNumber='+46-76-2322802'
          />
        </div>
      </main>
    </Layout>
  )
}
