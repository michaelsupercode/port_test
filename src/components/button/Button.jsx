import './Button.scss';

const Button = () => {
  return (
    <div className="button-container">
      <a
        download="_CV"
        className="button"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <a
        download="Another_Document"
        className="button"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        s/w
      </a>
    </div>
  );
};

export default Button;
