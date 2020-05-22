import React from "react";
import styled, { css } from "styled-components";

import Verified from "../../assets/img/verified.png"

const VerifiedIconWrapper = styled.img`
    margin-left: 5px;
`;

const VerifiedIcon = props => {
    return <VerifiedIconWrapper src={Verified}></VerifiedIconWrapper>
}

export default VerifiedIcon;