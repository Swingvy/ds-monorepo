// import { colors } from '@sds/theme';
import styled from 'styled-components';

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}
export enum Skin {
    Normal = 'normal',
    Primary = 'primary',
    Secondary = 'secondary',
    Positive = 'positive',
    Destructive = 'destructive',
    OutlineLight = 'outlineLight',
    OutlineDark = 'outlineDark',
}

export interface Props {
    className?: string;
    size?: Size;
    skin?: Skin;
}

export const Button = styled.button.attrs(
    ({ className = '', size = Size.Medium, skin = Skin.Normal }: Props) => ({
        className,
        size,
        skin,
    }),
)``;
// const Button = styled.button`
//     box-sizing: border-box;

//     background: ${(props) => {
//         return props.color ? 'red' : colors.red[400];
//     }};
//     color: #fff;
//     border-radius: 3px;
//     cursor: pointer;
//     font-size: 1rem;
//     font-weight: 300;
//     padding: 9px 40px;
// `;
