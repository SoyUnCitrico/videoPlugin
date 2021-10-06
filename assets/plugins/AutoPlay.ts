import MediaPlayer from "../MediaPlayer";

export default class AutoPlay {
  constructor(){
      // console.log("Creando el autoplay");
  }

  run(player: MediaPlayer) {
    if(!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
    console.log("Auto Playing");
  }
}