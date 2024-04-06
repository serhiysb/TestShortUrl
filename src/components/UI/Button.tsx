const Button = (props:buttonProps ) => {
    return <button 
    type={props.type} 
    onClick={props.onClick}
    disabled = {props.disabled}
    className={props.className}>{props.children}</button>
};

export default Button;

interface buttonProps{
    children: React.ReactNode,
    onClick?(): void;
    type: "button" | "submit",
    disabled?: boolean,
    className: string
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    className: 'btn btn-primary'
};