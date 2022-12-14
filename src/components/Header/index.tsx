import { faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FlexArea } from '../FlexArea';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import styles from './styles.module.scss';

export function Header(): JSX.Element {

    const navigate = useNavigate();

    const { signOut, user } = useAuth();

    const handleCreateJob = () => {
        navigate('/jobs/create');
    };

    return (
        <header className={styles.header}>
            <div
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            >
                <Text size='large' color='light'>iRecruite</Text>
            </div>
            <FlexArea
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                gap='.5rem'
            >
                {user?.type === 'company' ?
                    <IconButton icon={faPlus} onClick={handleCreateJob} />
                : null}
                <IconButton icon={faUser} onClick={() => console.log('Profile')} />
                <IconButton icon={faSignOut} onClick={signOut} />
            </FlexArea>
        </header>
    )
}