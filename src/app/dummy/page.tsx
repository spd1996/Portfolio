'use client'
import React from 'react';
import PageContainer from '../components/pagecontainer';

const DisabledComponent = () => {
  return (
    <PageContainer>
      <div className='flex flex-row'>
        <p>This component is disabled</p>
      </div>
    </PageContainer>
  );
};

export default DisabledComponent;