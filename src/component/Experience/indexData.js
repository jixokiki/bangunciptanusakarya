import "./index.css";

function IndexData(props){
    return(
        <div className="p-card">
            <div className="product-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default IndexData;