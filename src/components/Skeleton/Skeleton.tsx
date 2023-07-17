import BaseSkeleton from './BaseSkeleton'

const Skeleton = () => {
  return (
    <div className="post">
      <BaseSkeleton classes="title width-50" />
      <BaseSkeleton classes="text width-100" />
      <BaseSkeleton classes="text width-100" />
      <BaseSkeleton classes="text width-100" />
    </div>
  )
}

export default Skeleton