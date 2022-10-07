import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

interface Props {
    icon: FontAwesomeIconProps['icon'];
    onClick?: () => void;
}

export function IconButton(props: Props): JSX.Element {
    return (
        <div className={styles.buttonArea}>
            <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        </div>
    )
}