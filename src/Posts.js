import React from "react"

export default function Posts(){



  const objPosts = [
    {imguser: "assets/img/meowed.svg", textuser:"meowed", imgcont: "assets/img/gato-telefone.svg", imglike: "assets/img/respondeai.svg", likeuser:"respondeai", likenumber: "101.523" },
    {imguser: "assets/img/barked.svg", textuser: "barked", imgcont: "assets/img/dog.svg", imglike: "assets/img/adorable_animals.svg", likeuser: "adorable_animals", likenumber: "99.159" }
  ]

  return (
  <div class="posts">
    {objPosts.map(post => <Post objpost = {post} />)}
  </div>
  )
}

// function Post(props){

// const [icon, setIcon] = React.useState("")

//    function like(){
//     setIcon("heart")
//   }

  return(
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.objpost.imguser} alt="" />
        {props.objpost.textuser}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.objpost.imgcont} alt="" />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
        <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.objpost.imglike} alt="" />
        <div class="texto">
          Curtido por <strong>{props.objpost.likeuser}</strong> e <strong>outras {props.objpost.likenumber} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
  )
}

// export default function Posts(){



//   const objPosts = [
//     {imguser: "assets/img/meowed.svg", textuser:"meowed", imgcont: "assets/img/gato-telefone.svg", imglike: "assets/img/respondeai.svg", likeuser:"respondeai", likenumber: "101.523" },
//     {imguser: "assets/img/barked.svg", textuser: "barked", imgcont: "assets/img/dog.svg", imglike: "assets/img/adorable_animals.svg", likeuser: "adorable_animals", likenumber: "99.159" }
//   ]

//   return (
//   <div class="posts">
//     {objPosts.map(post => <Post objpost = {post} />)}
//   </div>
//   )
// }