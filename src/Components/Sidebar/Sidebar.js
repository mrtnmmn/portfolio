import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'

import LanguagePicker from './LanguagePicker';
import { SidebarToggle } from './SidebarToggle/SidebarToggle';

const SidebarContainer = styled.div`
  width: ${({ isExpanded }) => (isExpanded ? '300px' : '100px')};
  height: 350px;
  background-color: rgb(145, 145, 145, 0.30);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: width 0.4s ease-in-out;
  margin-top: 30px;
  margin-left: 30px;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const ExpandButtonContainer = styled.div`
  align-self: center;
  color: ${({ isExpanded }) => (!isExpanded ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0)')};
  transition: 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButtonContainer = styled.div`
  align-self: flex-end;
  color: ${({ isExpanded }) => (isExpanded ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0)')};
  transition: 0.8s; 
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Sidebar = () => {

  const [isExpanded, setIsExpanded] = useState(true);

  const handleResizeClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <SidebarToggle /> 
      {isExpanded ? 
      <div>
        <CloseButtonContainer onClick={handleResizeClick} isExpanded={isExpanded}>
        <FontAwesomeIcon icon={faX}/>
        </CloseButtonContainer>
      </div> :
      <div>
        <ExpandButtonContainer onClick={handleResizeClick} isExpanded={isExpanded}>
          <FontAwesomeIcon icon={faBars} />
        </ExpandButtonContainer>  
      </div>
      }
      <LanguagePicker />
    </SidebarContainer>
  );
};

export default Sidebar;