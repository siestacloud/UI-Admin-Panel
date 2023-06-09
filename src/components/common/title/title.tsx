
interface props {
  title: string
  desc: string
}

export function Title({title,desc}:props) {

  return (
    <article className="title" >
      <h2 className="title__headline">{title}</h2>
      <p className="title__desc">{desc}</p>
    </article>
  );
}



