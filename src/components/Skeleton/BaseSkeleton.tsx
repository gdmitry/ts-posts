import './BaseSkeleton.css'

type PropsType = {
  classes?: string,
}

const BaseSkeleton = ({ classes }: PropsType) => {
  const classNames = `skeleton ${classes} animate-pulse`

  return <div className={classNames}></div>
}
export default BaseSkeleton