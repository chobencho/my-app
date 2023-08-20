import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoaderCommunities = () => {
  return (
    <div>
      <Skeleton
        variant="rect"
        width={300}
        height={40}
        className="m-auto my-5"
      />

      <Skeleton
        variant="rect"
        width={100}
        height={25}
        className="m-auto my-5"
      />
      <div className="flex flex-wrap px-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div className="mb-3 flex items-center justify-center w-1/3" key={index}>
            <Skeleton
              variant="circle"
              width={40}
              height={40}
              className="mr-1 rounded-t-md"
            />
            <Skeleton
              variant="rect"
              width={40}
              height={20}
              className="rounded"
            />
          </div>
        ))}
      </div>
      <div>
        <Skeleton
          variant="rect"
          width={100}
          height={25}
          className="m-auto my-5"
        />
        {[1, 2, 3].map((index) => (
          <div className="flex mx-2 py-2 border-b" key={index}>
            <Skeleton
              variant="rect"
              width={100}
              height={50}
              className="rounded"
            />
            <div className="ml-2">
              <Skeleton
                variant="rect"
                width={60}
                height={20}
                className="rounded mb-2"
              />
              <Skeleton
                variant="rect"
                width={90}
                height={20}
                className="rounded mb-2"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SkeletonLoaderCommunities
