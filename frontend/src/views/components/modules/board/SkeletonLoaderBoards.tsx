import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
const SkeletonLoaderBoards = () => {
  return (
    <div>
      <div className="p-5">
        <Skeleton
          variant="rect"
          width={120}
          height={25}
          className="m-auto rounded"
        />
      </div>
      {[1, 2, 3].map((index) => (
        <div
          className="border w-96 shadow-xs rounded mx-auto mb-3 p-2 flex items-center"
          key={index}
        >
          <div className="w-3/5 m1-2">
            <Skeleton variant="text" height={25} className="w-11/12" />
            <Skeleton variant="text" height={25} className="w-3/4" />
            <div className="flex items-center">
              <Skeleton
                variant="circle"
                width={40}
                height={40}
                className="mr-2"
              />
              <Skeleton variant="text" width={80} height={25} />
            </div>
          </div>
          <Skeleton
            variant="rect"
            width={160}
            height={90}
            className="rounded"
          />
        </div>
      ))}
      <div className="w-full fixed bottom-20">
        <Skeleton
          variant="rect"
          width={200}
          height={50}
          className="rounded-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default SkeletonLoaderBoards;
