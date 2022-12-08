import styles from './CodeBlock.module.css';
import Image from 'next/image';
import { useCopytoClipboard } from '../../hooks/useCopytoClipboard';

export default function CodeBlock({ block }) {
  const { copied, copyToClipboard } = useCopytoClipboard();

  return (
    <article className={styles.card}>
      <h2>{block.title}</h2>
      <pre style={{ whiteSpace: 'pre-line' }}>
        {' '}
        <code>{block.code}</code>{' '}
      </pre>
      <button
        onClick={() => copyToClipboard(block.code)}
        className={copied ? `${styles.copyBtn} ${styles.copied}` : `${styles.copyBtn}`}
      >
        <Image
          src={copied ? '/images/check.svg' : '/images/copy.svg'}
          alt='Copy to Clipboard'
          width={35}
          height={35}
        />
      </button>
    </article>
  );
}
