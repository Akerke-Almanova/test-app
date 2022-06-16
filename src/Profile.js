

function Profile(props){
    return (
        <div>
            <img src={props.img} alt = "profile" width="150px" />
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.hobby}</p>
            
        </div>
    )
}
export default Profile;

// function Profile(props){
//     return(
//         <div>
//             <img src={props.img} alt="good" width="150px"/>
//             <h3>{props.name}</h3>
//             <p>{props.price}</p>
//         </div>
//     )
// }
// export default Profile;