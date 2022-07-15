import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
  padding: 1rem;
  font-weight: 600;
  text-align: center;
  ${props => {
    return css`
      background-color: ${props.theme.colors.bgColor};
      color: ${props.theme.colors.color};
    `;
  }};
`;

export default function Header(props: { title: string }) {
  const { title } = props;
  return <StyledHeader>{title}</StyledHeader>;
}
