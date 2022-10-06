import styles from './styles.module.scss';

export interface Props{
    id: string;
    children: React.ReactNode;
    className: string;
}

export function Main(props: Props): JSX.Element {
    return (
        <main
            id={props.id}
            className={`${styles.main} ${styles.className}`}
        >
            {props.children}
        </main>
    )
}