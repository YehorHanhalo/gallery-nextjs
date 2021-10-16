import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

const IconButton = ({ children, onClick, classNames="", type="button", ...allyProps }) => (
  <button
    type={type}
    className={`${styles.IconButton} ${classNames}`}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;