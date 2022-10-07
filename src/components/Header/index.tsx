import { faLongArrowAltUp, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '../Text';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Text size='large' color='light'>iRecruite</Text>
            <div className={styles.iconArea}>
                <FontAwesomeIcon icon={faSignOut} className={styles.icon} />
            </div>
        </header>
    )
}