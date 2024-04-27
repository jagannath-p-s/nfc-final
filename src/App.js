import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImageComponent from './BackgroundImageComponent';
import ProfileCardComponent from './ProfileCardComponent';
import SocialMediaComponent from './SocialMediaComponent';
import Customerside from './Customerside';
import InsertDataForm from './Addcustomer'

// Styled container to center the components
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Add this to make sure BackgroundImageComponent covers the entire container */
`;

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <CenteredContainer>
      {/* Buttons to display different components */}
      <button onClick={() => handleButtonClick('Customerside')}>Customerside</button>
      <button onClick={() => handleButtonClick('ProfileCardComponent')}>Add Customer</button>
      <button onClick={() => handleButtonClick('SocialMediaComponent')}>Admin</button>

      {/* Conditionally render the selected component */}
      {selectedComponent === 'Customerside' &&  <Customerside />}
      {selectedComponent === 'ProfileCardComponent' && <InsertDataForm />}
      {selectedComponent === 'SocialMediaComponent' && <SocialMediaComponent />}
      {/* Add more conditionals for additional components */}
    
    </CenteredContainer>
  );
}

export default App;
