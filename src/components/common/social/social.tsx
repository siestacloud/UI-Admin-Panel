import insta from "./img/1.svg"
import fb from "./img/2.svg"
import inn from "./img/3.svg"


export function Social() {
  return (
    <article className="social">
      <a href="#"><img src={insta} alt="" /></a>
      <a href="#"><img src={fb} alt="" /></a>
      <a href="#"><img src={inn} alt="" /></a>
    </article>
  );
}

