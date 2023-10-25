import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <div className={utilStyles.list}>
          <h2 className={utilStyles.headingLg}>Link</h2>
          <li className={utilStyles.listItem}>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/profile/a/b/c">Profile</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/api/hello">API</Link>
          </li>
        </div>
      </section>
    </Layout>
  )
}

// SSG, 只在服务端运行；只能从一个page里导出
// 在开发环境，每次请求都执行；在生产环境，只在构建时运行
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }

//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   // Next.js polyfills fetch() on both the client and server. You don't need to import it.
//   const res = await fetch('..')
//   return res.json()

//   // Instead of the file system,
//   // fetch post data from a database
//   return databaseClient.query('SELECT posts...')
// }

// SSR
export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
