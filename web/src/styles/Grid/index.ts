import styled from 'styled-components';

interface FlexProps {
  flexDirection?: string;
  justify?: string;
  alignItems?: string;
  width?: any;
}

interface ColProps extends FlexProps {
  flex?: any;
}

export const Container = styled.div<FlexProps>`
  width: ${props => props.width ? props.width : '100%'};
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
`;

export const ContainerMax = styled.div<FlexProps>`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
`;

export const Col = styled.div<ColProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : '')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
