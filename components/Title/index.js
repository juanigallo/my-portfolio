import style from "./style.module.scss";

function Title({ value }) {
  return <h3 className={style.title}>{value}</h3>;
}

export default Title;
