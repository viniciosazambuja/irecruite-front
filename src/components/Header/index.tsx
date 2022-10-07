import { faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FlexArea } from '../FlexArea';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Text size='large' color='light'>iRecruite</Text>
            <FlexArea
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                gap='.5rem'
            >
                <IconButton icon={faUser} onClick={() => console.log('Profile')} />
                <IconButton icon={faSignOut} onClick={() => console.log('Logout')} />
            </FlexArea>
        </header>
    )
}