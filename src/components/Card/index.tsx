import styles from './styles.module.scss';

interface Props{
    children: React.ReactNode;
    className?: string;
}

export function Card(props: Props): JSX.Element {
    return (
        <article
            className={`${styles.card} ${props.className}`}
        >
            {props.children}
        </article>
    )
}