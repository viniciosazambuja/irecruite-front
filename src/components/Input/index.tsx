import { Text } from '../Text';
import styles from './styles.module.scss';

interface Props{
    type: string;
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: Props): JSX.Element{
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={props.name}
            >
                <Text size='small' color='dark'>{props.label}</Text>
            </label>
            <input
                className={styles.input}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}