function User(props){
  return(
    <div class="usuario">
    <img src={props.objuser.img} />
    <div class="texto">
      <strong>{props.objuser.userid}</strong>
      {props.objuser.username}
    </div>
  </div>
  )
}


export default function Usuario(){
  const objUser = [
    {img: "assets/img/catanacomics.svg" , userid: "catanacomics" , username: "Catana"}
  ]
  return(
    <div>{objUser.map(user => <User objuser = {user} />)}</div>
  )
}
