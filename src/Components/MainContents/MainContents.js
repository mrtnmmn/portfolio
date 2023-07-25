import './MainContents.css'
import { useTranslation } from 'react-i18next';

function MainContents() {

  const { t } = useTranslation()

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
    </div>
  );
}

export default MainContents;