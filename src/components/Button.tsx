
type ButtonType = {
    name: string
    callBack: (filter: string) => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack(props.name)
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
