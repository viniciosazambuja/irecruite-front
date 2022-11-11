import { Text } from '../Text';
import styles from './styles.module.scss';

interface Props{
    type: string;
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    monetary?: boolean;
}

export function Input(props: Props): JSX.Element{

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(!props.monetary){
            props.onChange(event);
        } else {
            const regex = /^[0-9\b]+$/;
            if (event.target.value === '' || regex.test(event.target.value)) {
                props.onChange(event);
            }
        }
    };

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
                onChange={handleChange}
            />
        </div>
    )
}