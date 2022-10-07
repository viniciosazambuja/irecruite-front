import styles from './styles.module.scss'

interface Props {
    width?: string | number;
    height?: string | number;
    direction?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    gap?: number | string;
    children: React.ReactNode;
}

export function FlexArea(props: Props): JSX.Element {
    return (
        <div style={{
            display: 'flex',
            flexDirection: props.direction || 'row',
            justifyContent: props.justifyContent || 'flex-start',
            alignItems: props.alignItems || 'stretch',
            gap: props.gap || '1rem',
            width: props.width || 'auto',
            height: props.height || 'auto'
        }}>
            {props.children}
        </div>
    )
}