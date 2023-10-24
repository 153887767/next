import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Profile({ id }) {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div>id: {JSON.stringify(id)}</div>
      {['/a', '/a/b/', '/a/b/c'].map((item) => (
        <div key={item}>
          <Link href={`/profile${item}`}>{item}</Link>
        </div>
      ))}
    </Layout>
  )
}

// pages/profile/[...id].js matches /profile/a, but also /profile/a/b, /profile/a/b/c and so on.
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: ['a']
        }
      },
      {
        params: {
          id: ['a', 'b']
        }
      },
      {
        params: {
          id: ['a', 'b', 'c']
        }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id // ['a', 'b', 'c']
    }
  }
}
