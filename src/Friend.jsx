export default function Friend({friend}){
    return (
        <div className="box">
            <h4>Name:{friend.name}</h4>
            <p>username:{friend.username}</p>
            <p>email:{friend.email}</p>
        </div>
    )

}