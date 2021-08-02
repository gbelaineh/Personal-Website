/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <div>
      <h1>
        Gebriel Molla Belaineh
      </h1>
      <About>
        <p>
          Bio
        </p>
        <img src="" alt="placeHolder" />
      </About>
    </div>

  );
};

const About = styled.div`
    min-height:90vh;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding:0rem 10rem;
    color: whitesmoke;
`;

export default AboutSection;
