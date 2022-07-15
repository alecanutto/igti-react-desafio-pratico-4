import styled from 'styled-components';

const StyledTooltipText = styled.p`
  text-align: center;
  font-weight: 400;

  cursor: default;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledTooltipBox = styled.div`
  position: absolute;
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
`;

const StyledTooltipCard = styled.div`
  height: 4rem;
  position: relative;
  & ${StyledTooltipText}:hover + ${StyledTooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

export default function Title(props: { title: string }) {
  const { title } = props;

  return (
    <StyledTooltipCard>
      <StyledTooltipText>{title}</StyledTooltipText>
      <StyledTooltipBox>{title}</StyledTooltipBox>
    </StyledTooltipCard>
  );
}
