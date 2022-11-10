import { Text } from '../Text';
import styles from './styles.module.scss';

interface Props{
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea(props: Props): JSX.Element{
    return (
        <div className={styles.container}>
            <label
                className={styles.label}
                htmlFor={props.name}
            >
                <Text size='small' color='dark'>{props.label}</Text>
            </label>
            <textarea
                className={styles.textarea}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}