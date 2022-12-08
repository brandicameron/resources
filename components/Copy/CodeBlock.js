import styles from './CodeBlock.module.css';
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
        <img src={copied ? 'images/check.svg' : 'images/copy.svg'} alt='Copy to Clipboard' />
      </button>
    </article>
  );
}
