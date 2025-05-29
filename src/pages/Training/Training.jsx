import useTraining from '../../hooks/useTraining';
import AjaxLoader from '../../components/AjaxLoader/AjaxLoader';
import CardTraining from '../../components/CardTraining/CardTraining';

const training = (props) => {
     const { trainingID, buscando } = useTraining()


    return (
       <div >

           <div className="row justify-content-center text-center">
    {buscando ? <AjaxLoader /> : trainingID?.map((item, index) => (
        <CardTraining key={index} training={item} />
    ))}
</div>
        </div>
    );
}
export default training;