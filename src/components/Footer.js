import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', color: '#cfcfcf', padding: '80px 80px 80px', marginTop: '64px', gap: '80px', position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItem: 'flex-start' }}>
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">CS — Ticket System</h3>
            <p style={{ margin: 0, lineHeight: 1.7, color: '#bdbdbd' }}>
              CS - Ticket System is a comprehensive platform for managing customer support tickets. Streamline your support workflow with features like ticket tracking, status updates, and real-time notifications to ensure efficient customer service and quick resolutions.
            </p>
          </div>

          <div>
            <h4 className="footer-subheading">Company</h4>
            <ul className="footer-list">
              <li className="footer-list-item">About Us</li>
              <li className="footer-list-item">Our Mission</li>
              <li className="footer-list-item">Contact Sales</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-subheading">Services</h4>
            <ul className="footer-list">
              <li className="footer-list-item">Products & Services</li>
              <li className="footer-list-item">Customer Stories</li>
              <li className="footer-list-item">Download Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-subheading">Information</h4>
            <ul className="footer-list">
              <li className="footer-list-item">Privacy Policy</li>
              <li className="footer-list-item">Terms & Conditions</li>
              <li className="footer-list-item">Join Us</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-subheading">Social Links</h4>
            <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span aria-hidden="true" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #5b5b5b',
                  fontSize: 12,
                  color: '#e5e5e5',
                  flexShrink: 0
                }}>X</span>
                <span style={{ color: '#cfcfcf', fontSize: '14px', whiteSpace: 'nowrap' }}>@CS — Ticket System</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span aria-hidden="true" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #5b5b5b',
                  fontSize: 12,
                  color: '#e5e5e5',
                  flexShrink: 0
                }}>in</span>
                <span style={{ color: '#cfcfcf', fontSize: '14px', whiteSpace: 'nowrap' }}>@CS — Ticket System</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span aria-hidden="true" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #5b5b5b',
                  fontSize: 12,
                  color: '#e5e5e5',
                  flexShrink: 0
                }}>f</span>
                <span style={{ color: '#cfcfcf', fontSize: '14px', whiteSpace: 'nowrap' }}>@CS — Ticket System</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span aria-hidden="true" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  border: '1px solid #5b5b5b',
                  fontSize: 12,
                  color: '#e5e5e5',
                  flexShrink: 0
                }}>✉</span>
                <span style={{ color: '#cfcfcf', fontSize: '14px', whiteSpace: 'nowrap' }}>support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2a2a2a', marginTop: '40px' }} />
        <div className="footer-bottom">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
