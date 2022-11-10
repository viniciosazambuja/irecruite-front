import { faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FlexArea } from '../FlexArea';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import styles from './styles.module.scss';

export function Header(): JSX.Element {

    const navigate = useNavigate();

    const { signOut }  = useAuth();

    const handleCreateJob = () => {
        navigate('/jobs/create');
    };

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
                <IconButton icon={faPlus} onClick={handleCreateJob} />
                <IconButton icon={faSignOut} onClick={signOut} />
            </FlexArea>
        </header>
    )
}