import React from 'react';
import cvcImage from '../../assets/cvv-300x300.png';
import { CVCHelpWrapper } from './index.styles';

const CVCHelp = () => {
  return (
    <CVCHelpWrapper>
      <img className='cvc-help-img' src={cvcImage} />
    </CVCHelpWrapper>
  );
};

export default CVCHelp;
