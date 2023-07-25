import headerPicture from '../../resources/IMG_1568.JPG'
import './MainContents.css'
function MainContents() {
  return (  
    <div className="mainDiv">
      <img src={headerPicture} className='headerImage' />
    </div>
  );
}

export default MainContents;