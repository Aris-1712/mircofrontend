import styled from './Button.module.css';

const Button = ({ label, clicHandler, disabled }) => {
  return (
    <>
      <button
        className={styled['btn-primary']}
        onClick={() => {
          clicHandler();
        }}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;