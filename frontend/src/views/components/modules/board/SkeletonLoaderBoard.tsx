import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoaderBoard = () => {
  return (
    <div>
      <Skeleton
        variant="rect"
        height={200}
        className="w-full"
      />
      <div className="m-2">
        <Skeleton
          variant="rect"
          height={30}
          className="w-4/5 rounded mb-2"
        />
        <div className="flex">
          <Skeleton
            variant="circle"
            width={40}
            height={40}
            className="mr-2"
          />
          <div>
            <Skeleton
              variant="rect"
              width={60}
              height={15}
              className="rounded mt-1"
            />
            <Skeleton
              variant="rect"
              width={90}
              height={10}
              className="rounded mt-2"
            />
          </div>
        </div>
        <div className="pt-3">
          {[1, 3, 2, 3].map((index) => (
            <Skeleton
              variant="rect"
              width={100 * index}
              height={20}
              className="rounded mt-3"
            />
          ))}
        </div>
        <div className="w-full fixed bottom-20">
          <Skeleton
            variant="rect"
            width={200}
            height={50}
            className="rounded-3xl mx-auto"
          />
        </div>
      </div>

    </div>
  )
}

export default SkeletonLoaderBoard
