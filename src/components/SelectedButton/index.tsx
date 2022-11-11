import styles from './styles.module.scss';

interface Props {
    onClick?: () => void
    selected?: boolean
    children: string
}

export function SelectedButton(props: Props): JSX.Element {
    return (
        <button
            className={`
                ${styles.button}
                ${props.selected ? styles.selected : ''}
            `}
            onClick={props.onClick}
            disabled={!props.onClick}
        >
            {props.children}
        </button>
    )
}