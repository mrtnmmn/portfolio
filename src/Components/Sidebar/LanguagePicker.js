import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

import './LanguagePicker.css'

function LanguagePicker() {

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [actualLanguage, setActualLanguage] = useState('en')

  useEffect(() => {
    changeLanguage(actualLanguage)
  }, [actualLanguage])
  

  return (  
    <div className='mainSelectorDiv'>
      {actualLanguage === 'gal' ? <div className='selectedLanguage'>GAL</div> : <div className='notSelectedLanguage' onClick={() => {setActualLanguage('gal')}}>GAL</div>}
      {actualLanguage === 'es' ? <div className='selectedLanguage'>ESP</div> : <div className='notSelectedLanguage' onClick={() => {setActualLanguage('es')}}>ESP</div>}
      {actualLanguage === 'en' ? <div className='selectedLanguage'>ENG</div> : <div className='notSelectedLanguage' onClick={() => {setActualLanguage('en')}}>ENG</div>}
    </div>
  );
}

export default LanguagePicker;