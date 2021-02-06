function Welcome() {
    const currentHour = new Date().getHours()
    const morning = "Good Morning"
    const afternoon = "Good Afternoon!"
    const night = "Good Night"
    const message = currentHour < 12 ? morning
        : currentHour < 18 ? afternoon
        : night
    return (
        <>
        <h2>Welcome Michigan Wolverine Fans!</h2>
            <p>{message}</p>
        </>    
    )
}

export default Welcome;