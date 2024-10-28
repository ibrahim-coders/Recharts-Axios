import PropTypes from 'prop-types';
const Links = ({ routes }) => {
  return (
    <div>
      <li className="hover:bg-white p-4" key={routes.id}>
        <a href={routes.path}>{routes.name}</a>
      </li>
    </div>
  );
};
Links.propTypes = {
  routes: PropTypes.object,
};

export default Links;
