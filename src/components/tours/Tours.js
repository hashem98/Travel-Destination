import "./Tours.css"
import data from "../../data/data.json"
import Tour from "./tour/Tour";
function Tours(props) {
    return (

        <>
            {/* {data.map((val,id)   => {
                return (
                    <div className="card" key={id}>
                        <img src={val.image} alt={val.name} />
                        <h3>Name : {val.name}</h3>
                       <hr></hr>
                    </div>
                );
            })} */}
            < Tour data={data}/>
            

        </>

    );
}

export default Tours;