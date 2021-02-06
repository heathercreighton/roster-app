function Player(props) {
    console.log(props)

   let hobbies;

    if (props.hobbies.length != 0) {
    hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)  
    } else {
        hobbies = <li>None Listed</li>
    }

    return (
        <div>
            <h3>Player Name:{props.firstName} {props.lastName}, Jersey Number: {props.jerseyNumber}</h3>
            <ul>
                {hobbies}
            </ul>
            

        </div>
    )
}


export default Player;