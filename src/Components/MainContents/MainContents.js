import './MainContents.css'
import { useTranslation } from 'react-i18next';
import { motion, useCycle } from 'framer-motion';
import { useState } from 'react'

import Footbar from './Footbar/Footbar';
import { SidebarToggle } from '../Sidebar/SidebarToggle/SidebarToggle';
import StarRating from './StarRating/StarRating';
import SkillsShowcase from './SkillsShowcase/SkillsShowcase';

function MainContents() {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const [isOpen, toggleOpen] = useCycle(false, true);

  const { t } = useTranslation()

  const [isasdOpen, setIsOpen] = useState(false)

  return (  
    <div className="mainDiv">
      <div className='titleDiv'>
        <div className='name'>Martin Lomba Rodriguez</div>
        <div className='subtitle'>
          {t('jobTitle')}
        </div>
      </div>

      <div className='sectionTitle'>
        {t('aboutMeSectionTitle')}
      </div>
      <p className='description'>
        {t('descriptionParagraph1')}
      </p>
      <p className='description'>
        {t('descriptionParagraph2')}
      </p>
      <StarRating rating={4.5} label={'React'} /> 
      <SkillsShowcase /> 
      <Footbar />
    </div>
  );
}

export default MainContents;