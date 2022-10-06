import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    bold?: boolean;
}

export function Text(props: Props): JSX.Element {
    return (
        <p
            className={`
                ${styles.text}
                ${styles[props.size || 'small']}
                ${props.bold ? styles.bold : ''}
            `}
        >
            {props.children}
        </p>
    )
}