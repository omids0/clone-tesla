import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Container() {
      return <Content>
            <Section
                  backgroundImage={'model-3.jpg'}
                  title={'Model 3'}
                  description={'Order Online for Touchless Delivery'}
                  btnOne={'custom order'}
                  btnTwo={'existing inventory'}
            />
            <Section
                  backgroundImage={'model-y.jpg'}
                  title={'Model Y'}
                  description={'Order Online for Touchless Delivery'}
                  btnOne={'custom order'}
                  btnTwo={'existing inventory'}
            />
            <Section
                  backgroundImage={'model-s.jpg'}
                  title={'Model S'}
                  description={'Order Online for Touchless Delivery'}
                  btnOne={'custom order'}
                  btnTwo={'existing inventory'}
            />
            <Section
                  backgroundImage={'model-x.jpg'}
                  title={'Model X'}
                  description={'Order Online for Touchless Delivery'}
                  btnOne={'custom order'}
                  btnTwo={'existing inventory'}
            />
            <Section
                  backgroundImage={'solar-panel.jpg'}
                  title={'Solar Panels'}
                  description={'Lowest Cost Solar Panels in America'}
                  btnOne={'order now'}
                  btnTwo={'learn more'}
            />
            <Section
                  backgroundImage={'solar-roof.jpg'}
                  title={'Solar Roof'}
                  description={'Produce Clean Energy From Your Roof'}
                  btnOne={'order now'}
                  btnTwo={'learn more'}
            />
            <Section
                  backgroundImage={'accessories.jpg'}
                  title={'Accessories'}
                  description={''}
                  btnOne={'shope now'}
                  btnTwo={''}
            />
            {/* footer */}
      </Content>;
}

export default Container;

const Content = styled.div`
            height: 100vh;
`

