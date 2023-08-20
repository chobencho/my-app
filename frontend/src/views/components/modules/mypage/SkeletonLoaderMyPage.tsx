import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoaderMyPage = () => {
  return (
    <div>
      <Skeleton
        variant="circle"
        width={120}
        height={120}
        className="mt-5 mb-2 mx-auto"
      />
      <Skeleton
        variant="rect"
        width={90}
        height={25}
        className="rounded mx-auto mb-2"
      />
      <Skeleton
        variant="rect"
        width={70}
        height={20}
        className="rounded mx-auto mb-2"
      />

      <div className="w-full flex px-5 py-3">
        <Skeleton
          variant="rect"
          width={200}
          height={45}
          className="rounded-3xl mx-2"
        />
        <Skeleton
          variant="rect"
          width={200}
          height={45}
          className="rounded-3xl mx-2"
        />
      </div>


    </div>
  )
}

export default SkeletonLoaderMyPage
