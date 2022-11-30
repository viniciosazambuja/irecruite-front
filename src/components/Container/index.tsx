import styles from './styles.module.scss';

export interface Props{
    id?: string;
    children: React.ReactNode;
    scrollable?: boolean;
}

export function Container(props: Props): JSX.Element {
    return (
        <article
            id={props.id}
            className={styles.main}
        >
            {props.children}
        </article>
    )
}