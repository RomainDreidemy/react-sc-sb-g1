import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import "./../../assets/font/RoobertTRIAL-Regular.otf";
import certifiedIcon from "../../assets/img/certified.png";


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

const CertifiedIconWrapper = styled.img`
    margin-left: 5px;
`;

const StreamerName = props => {
    const { text, darkMode, certified, userConnected } = props;
    return <StreamerNameWrapper certified={certified}>{text} 
        {
            (certified) ? <CertifiedIconWrapper src={certifiedIcon} /> : ''
        }
    </StreamerNameWrapper>;
};

StreamerName.propTypes = {
    text: PropTypes.string,
    certified: PropTypes.bool,
};

StreamerName.defaultProps = {
    text: '',
    certified: false,
};

export default StreamerName;
