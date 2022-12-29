import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types'; // ES6

import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  // console.log(to);
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};
