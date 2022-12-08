import styles from '../components/Copy/Copy.module.css';
import Head from 'next/head';
import { copyCode } from '../data/copyCode';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from '../components/Copy/CodeBlock';

export default function Copy() {
  return (
    <>
      <Head>
        <title>The Copy Room</title>
        <meta name='description' content='Quick & easy code snippets.' />
      </Head>

      <section className={styles.container}>
        {copyCode.map((block) => (
          <CodeBlock key={uuidv4()} block={block} />
        ))}
      </section>
    </>
  );
}
