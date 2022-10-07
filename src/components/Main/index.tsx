import styles from './styles.module.scss';

export interface Props{
    children: React.ReactNode;
}

export function Main(props: Props): JSX.Element {
    return (
        <main
            className={`${styles.main} ${styles.className}`}
        >
            {props.children}
        </main>
    )
}