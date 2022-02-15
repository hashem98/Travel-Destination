function Tour(props) {
    return (

        <>
            {props.data.map((val,id)   => {
                return (
                    <div className="card" key={id}>
                        <img src={val.image} alt={val.name} />
                        <h3>Name : {val.name}</h3>
                       <hr></hr>
                    </div>
                );
            })}

        </>

    );
}

export default Tour;