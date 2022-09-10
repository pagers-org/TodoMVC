import React from 'react';

const Footer = ({ footerLeft, footerRight }: { footerLeft: React.ReactElement; footerRight: React.ReactElement }) => (
  <footer className="footer-container">
    {footerLeft}
    {footerRight}
  </footer>
);

export default Footer;
