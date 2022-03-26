export default function Main(props){
   const divStyle = {
       border: "1px solid black",
       maxWidth: "25%",
       margin: "auto"
   } 

    return(
        <div style={divStyle}>
            <p style={props.pStyle}>Welcome to the application!</p>
        </div>
    )
}