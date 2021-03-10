import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "../styles/landing.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardTopDiv}>
            <div className={styles.card}>
              <p className={"font-alice text-6xl"}>Hey, I'm Michael.</p>
              <p className={"font-sanspro text-2xl"}>
                There is literally nothing interesting about me. I am acutely
                aware that the styling of this site looks like a boutique
                toothpaste brand, but pastels are easy to use on the web.
              </p>
            </div>
          </div>
          <div className={styles.cardBottomDiv}></div>
        </div>
        <h2 className={"font-alice text-2xl text-center m-5 text-gray-800"}>
          Writing
        </h2>
        <div
          className={
            "w-full border-solid border-2 border-gray-400 rounded-md pb-4 pl-4 pr-4 text-lg text-gray-800"
          }
        >
          <div className={styles.pinnedPosts}>
            <i>Pinned Posts</i>
          </div>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className={"mt-2"}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
        <div className={"pl-4 pr-4 mt-4 text-lg"}>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className={"mt-2"}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
