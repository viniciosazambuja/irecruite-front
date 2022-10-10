import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Form(props: Props): JSX.Element {
    return (
        <form
            className={styles.form}
            onSubmit={props.onSubmit}
        >
            {props.children}
        </form>
    )
}