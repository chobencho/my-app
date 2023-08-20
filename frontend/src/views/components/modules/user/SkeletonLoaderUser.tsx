import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonLoaderUser = () => {
  return (
    <div>
      <Skeleton
        variant="rect"
        height={200}
        className="w-full"
      />
      <Skeleton
        variant="rect"
        width={80}
        height={25}
        className="rounded mx-auto mt-2 mb-4"
      />
      {[1, 2, 3].map((index) => (
        <div className="border-b m-2 pb-2 flex" key={index}>
          <Skeleton
            variant="rect"
            width={80}
            height={25}
            className="rounded my-1 mr-2"
          />
          <Skeleton
            variant="rect"
            width={80}
            height={25}
            className="rounded my-1"
          />
        </div>
      ))}
      <div className="border-b pb-2 m-2">
        <Skeleton
          variant="rect"
          width={80}
          height={25}
          className="rounded my-1 mr-2"
        />
        <div className="flex ">
          {[1, 2, 3, 4, 5].map((index) => (
            <Skeleton
              variant="rect"
              height={65}
              className="rounded my-1 mx-1 w-1/5"
            />
          ))}
        </div>
      </div>
      <div className="border-b pb-2 m-2">
        <Skeleton
          variant="rect"
          width={80}
          height={25}
          className="rounded my-1 mr-2"
        />
        <div className="flex ">
          {[1, 2, 3].map((index) => (
            <Skeleton
              variant="rect"
              height={65}
              className="rounded my-1 mx-1 w-1/3"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoaderUser
