import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    bold?: boolean;
    color?: 'dark' | 'light' | 'primary';
}

export function Text(props: Props): JSX.Element {
    return (
        <p
            className={`
                ${styles.text}
                ${styles[props.size || 'small']}
                ${props.bold ? styles.bold : ''}
                ${props.color ? styles[props.color] : styles.black}
            `}
        >
            {props.children}
        </p>
    )
}