import { Text } from '../Text';
import styles from './styles.module.scss'

interface Props {
    children: String;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    secondary?: boolean;
}

export function Button(props: Props): JSX.Element {
    return (
        <button
            className={`${styles.button} ${props.secondary ? styles.secondary : ''}`}
            onClick={props.type === 'button' || !props.type ? props.onClick : undefined}
            type={props.type}
        >
            <Text size="small" bold color={props.secondary ? 'primary' : 'light'}>
                {props.children}
            </Text>
        </button>
    )
}