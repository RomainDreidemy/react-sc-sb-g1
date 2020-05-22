import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import "./../../assets/font/RoobertTRIAL-Regular.otf";
import Verified from "../../assets/img/verified.png";


const StreamerNameWrapper = styled.h1`
    font-family: Roobert TRIAL;
    font-weight: bold;
    color: #000;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline #A970FF;
    }
`;

const VerifiedIconWrapper = styled.img`
    margin-left: 5px;
`;

const StreamerName = props => {
    const { text, darkMode, verified, userConnected } = props;
    return <StreamerNameWrapper verified={verified}>{text} 
        {
            (verified) ? <VerifiedIconWrapper src={Verified} /> : ''
        }
    </StreamerNameWrapper>;
};

StreamerName.propTypes = {
    text: PropTypes.string,
    verified: PropTypes.bool,
};

StreamerName.defaultProps = {
    text: '',
    verified: false,
};

export default StreamerName;
