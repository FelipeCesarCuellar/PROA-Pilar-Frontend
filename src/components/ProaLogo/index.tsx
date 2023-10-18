import React from 'react';

interface ProaLogoProps {
    height: number;
}

const ProaLogo: React.FC<ProaLogoProps> = ({ height }) => (
    <img src="assets/images/PLogo.svg" height={height} width="auto" alt="" />
);

export default ProaLogo;
