import { colors } from '@sds/theme';
import styled from 'styled-components';

const Button = styled.button`
    background: ${props => (props.color ? 'red' : colors.red[400])};
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 40px;
`;

export default Button;
