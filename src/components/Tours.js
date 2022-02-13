import data from "../data.json"
function Footer(props) {
    return (

        <>
            {data.map(val => {
                return (
                    <div>
                        <img src={val.image} alt={val.name} />
                        <h3>Name : {val.name}</h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                );
            })}

        </>

    );
}

export default Footer;