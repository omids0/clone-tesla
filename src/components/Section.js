import React from 'react';
import styled from 'styled-components'

function Section({ backgroundImage, title, description, btnOne, btnTwo }) {
      return <Part bgImg={backgroundImage}>
            <div className="part-content">
                  <div className="part-information">
                        <h1>{title}</h1>
                        <p>{description}</p>
                  </div>
                  <div className="part-buttons">
                        <button className='btn1'>{btnOne}</button>
                        {btnTwo && <button className="btn2">{btnTwo}</button>}
                  </div>
            </div>
      </Part>;
}

export default Section;

const Part = styled.div`
background: yellow;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: ${props => `url('./images/${props.bgImg}')`}
`