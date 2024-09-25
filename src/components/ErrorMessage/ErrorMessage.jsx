import css from '../ErrorMessage/ErrorMessage.module.css';

const ErrorMessage = () => {
	return <h3 className={css.error}>Ops, something went wrong! Try again later!</h3>;
};

export default ErrorMessage;
