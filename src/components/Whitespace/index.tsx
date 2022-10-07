interface Props{
    width?: string;
    height?: string;
}

export function Whitespace(props: Props): JSX.Element {
    return (
        <div
            style={{
                width: props.width,
                height: props.height
            }}
        />
    )
}