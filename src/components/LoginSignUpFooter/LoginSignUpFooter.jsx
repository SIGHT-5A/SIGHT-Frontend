import React, { useEffect, useState } from 'react';
import './LoginSignUpFooter.scss';

const LoginSignUpFooter = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="login-signup-footer">
      <p>
        S.I.G.H.T. (System Identifying Geospatial Hazards and Threats) &copy;{' '}
        {year} - All rights reserved
      </p>
    </div>
  );
};

export default LoginSignUpFooter;
