import Skeleton from "@material-ui/lab/Skeleton";
const SkeletonLoaderHome = () => {

  return (
    <div>
      <div className="pt-5 pb-3 px-2 flex justify-between">
        <Skeleton
          variant="rect"
          width={160}
          height={25}
          className="rounded"
        />
        <Skeleton
          variant="rect"
          width={160}
          height={25}
          className="rounded"
        />
      </div>
      <div className="flex flex-wrap p-1">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div className="p-1 w-1/2" key={index}>
            <div className="border rounded-lg">
              <Skeleton
                variant="rect"
                height={120}
                className="w-full rounded-t-md"
              />
              <div className="p-1 flex flex-wrap justify-between items-center">
                <Skeleton
                  variant="rect"
                  width={80}
                  height={20}
                  className="mb-1 rounded"
                />
                <Skeleton
                  variant="rect"
                  width={60}
                  height={15}
                  className="mb-1 rounded"
                />
                <Skeleton
                  variant="rect"
                  width={60}
                  height={15}
                  className="mb-1 rounded"
                />
                <Skeleton
                  variant="rect"
                  width={60}
                  height={15}
                  className="mb-1 rounded"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonLoaderHome
