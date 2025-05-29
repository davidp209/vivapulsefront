import './AjaxLoader.css';
import loaderGif from '../../assets/AyaxLoader/loader.gif';

const AjaxLoader = () => {
    return (
        <div className='ajax-loader d-flex justify-content-center align-items-center'>
            <img className='imagenAjax' src={loaderGif} alt="Cargando..."  />
        </div>
    );
};

export default AjaxLoader;
