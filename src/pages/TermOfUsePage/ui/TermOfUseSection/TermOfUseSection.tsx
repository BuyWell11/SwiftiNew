import styles from './TermOfUseSection.module.scss';

interface Props {
  number: number;
  title: string;
  paragraphs: string[];
}

function TermOfUseSection({ number, title, paragraphs }: Props) {
  return (
    <div className={styles.section}>
      <span className={styles.title}>
        {number}. {title}
      </span>
      <ol className={styles.list}>
        {paragraphs.map((paragraph, index) => (
          <li className={styles.body} key={index}>
            {paragraph}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TermOfUseSection;
