import { Link } from 'react-router-dom';
import Tour from './tour/Tour';
function Tours(props) {

    return (
        <>
            {props.data.map((meme,idx)=> {
                return (
                    <div className="card" key={idx}>
                             {/* <div key={idx}>  */}
                             <Link 
                             to={`/city/${meme.id}`}>
                                 <Tour tour={meme}/>
                                 </Link> );
                                 <hr></hr>
                                 <hr></hr>
                                 <hr></hr>


                             </div>
                             );
            })}
        </>
    );
}

export default Tours;