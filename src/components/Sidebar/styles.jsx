import { Link } from "react-router-dom";
import styled,{css, keyframes} from "styled-components";

import { btnReset, v } from "../Layout/styles/variables";

export const SSidebarButton = styled.button`
    ${btnReset};
    position: relative;
    top: ${v.xxlSpacing};
    right: 30px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
    width: 52px;

    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;

`;




export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.text};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const SLink = styled(Link)`
    display: -webkit-box;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    width: ${({ isOpen }) => (!isOpen ? `100px` : `360px`)};
    transition: 0.8s ease;
    
    
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    width: ${({ isOpen }) => (!isOpen ? `100px` : `360px`)};
    transition: 0.8s ease;
    text-decoration: none;
    display: flex;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;


export const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `80px` : `300px`)};
    padding: ${v.lgSpacing};
    position: relative;
    background: ${({ theme }) => theme.bg};

    transition: all .1s ease;

& + ${SLinkLabel}{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
`;
