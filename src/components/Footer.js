import React, { useEffect, useState } from 'react';

function Footer() {
      const [year, setYear] = useState('')
      const time = new Date()

      useEffect(() =>{
            setYear(time.getFullYear())
      },[])

      return <div className="footer">
            <ul>
                  <li>Tesla @ {year}</li>
                  <li>Privacy & Legal</li>
                  <li>Contact</li>
                  <li>Careers</li>
                  <li>News</li>
                  <li>Engage</li>
                  <li>Locations</li>
            </ul>
      </div>;
}

export default Footer;
