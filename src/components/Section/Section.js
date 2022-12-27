import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children && children}
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Section;
