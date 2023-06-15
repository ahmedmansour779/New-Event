import styled from "@emotion/styled";
import theme from "../../../../config";

export const PNFWrapper = styled("div")`
    label: PNFWrapper;
    width: 100%;
    padding: 11rem;
    background-color: ${theme.gray} ;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    h1 {
        color: ${theme.white};
        font-size: 5rem;
        span {
            color: ${theme.primary}
        }
    }
    p {
        color: ${theme.secondry};
        font-size: 1.4rem;
    }
`