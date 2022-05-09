function Story(props){
  return (
    <div class="story">
    <div class="imagem">
      <img src={props.objStory.img} />
    </div>
    <div class="usuario">
      {props.objStory.name}
    </div>
  </div>
  )
}

export default function Stories(){
  const objStories = [
  {img: "assets/img/9gag.svg", name: "9gag"}, 
  {img: "assets/img/meowed.svg", name: "meowed"}, 
  {img: "assets/img/barked.svg", name: "barked"}, 
  {img: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"}, 
  {img: "assets/img/wawawicomics.svg", name: "wawawicomics"},
  {img: "assets/img/respondeai.svg", name: "respondeai"},
  {img: "assets/img/filomoderna.svg", name: "filomoderna"},
  {img: "assets/img/memeriagourmet.svg", name: "memeriagourmet"}
]

  return (
    <div class="stories">
        {objStories.map(story => <Story objStory = {story} />)}
    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
  )
}