import css from "./Button.module.css";
const Button = ({ val2 }) => {
    return <button className={`${css.buttons}`}>{val2}</button>;
};
export default Button;
