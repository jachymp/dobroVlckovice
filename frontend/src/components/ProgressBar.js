const ProgressBar = ({reg, total, text}) => {

    const parentDiv = {
        width: '80%',
        height: '25px',
        borderRadius: '10px',
        border: '1px solid black'
    }

    const childDiv = {
        width: `${(reg/total)*100}%`,
        height: '25px',
        backgroundColor: 'yellow',
        borderRadius: '10px'
    }

    const progressText = {
        textAlign: 'right',
        padding: '3px 10px 0 0',
        fontWeight: 'bold'
    }

    return (
        <div style={parentDiv}>
            <div style={childDiv}>
                <p style={progressText}>{`${text}`}</p>
            </div>
        </div>
    )
}

export default ProgressBar;