import PropTypes from "prop-types";
const Container = ({ children, className }) => {
    return (
        <div className={`max-w-6xl mx-auto xl:px-0 md:px-10 sm:px-5 px-2 ${className}`}>
          {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
