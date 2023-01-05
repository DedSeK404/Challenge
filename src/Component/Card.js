const MissileCard = (props) =>{
    return(
        <div className="card">
            <img className="missile_photo" src={props.missile} alt="1"/>
            <h2 className="h2">Missile_model: {props.model}</h2>
            <p className="p2">Description: {props.description}</p>
            <button className="buy_button">Buy now</button>
        </div>
    )
};
export default MissileCard;