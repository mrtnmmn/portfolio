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
      <div className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default MainContents;