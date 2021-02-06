import Player from './Player';

function PlayerList(props) {
    let { players } = props;
    let count = 0;
    const teamMembers = players.map(player => {
        return <Player
            count={count++}
            firstName={player.firstName}
            lastName={player.lastName}
            jerseyNumber={player.jerseyNumber}
            hobbies={player.hobbies}
        />
    }
    );

    return (     
        <div>{teamMembers}</div>
    )
}



export default PlayerList;