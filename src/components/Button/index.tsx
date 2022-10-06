import { Text } from '../Text';
import styles from './styles.module.scss'

interface Props {
    children: String;
    onClick: () => void;
    secondary?: boolean;
}

export function Button(props: Props): JSX.Element {
    return (
        <button
            className={`
                ${styles.button}
                ${props.secondary ? styles.secondary : ''}
            `}
        >
            <Text size="small" bold color={props.secondary ? 'primary' : 'light'}>
                {props.children}
            </Text>
        </button>
    )
}