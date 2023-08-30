// Common
import { Link } from "react-router-dom";
// Interface
import { BoardData } from "interfaces/index";
// Components
import UserCircleImage from "views/components/block/UserCircleImage";
import OtherImage from "views/components/block/OtherImage";
import UserName from "views/components/block/UserName";

interface BoardItemProps {
  boards: BoardData[];
  handleGetBoardData: Function;
}

const BoardsItem = ({ boards }: BoardItemProps) => {
  return (
    <>
      {boards.map((board) => (
        <Link
          to={`/board/${board.boardId}`}
          key={board.id}
          className="inline-block  py-2 px-3 w-full"
        >
          <div className="bg-white rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:rounded-tr-none sm:max-w-[15rem] ">
              {board.image?.url ? (
                <img
                  src={board.image.url}
                  alt="userData image"
                  className="w-full h-full absolute top-0 left-0 object-cover"
                />
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                  alt="image"
                  className="w-full h-full absolute top-0 left-0 object-cover"
                />
              )}
            </div>
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white txt-limit-2">
                  {board.title}
                </h3>
                <p className="mt-1 text-gray-800 dark:text-gray-400 whitespace-pre-wrap txt-limit-2">
                  {board.body}
                </p>
                <div className="mt-5 sm:mt-auto flex items-center">
                  {board.userImage !== null ? (
                    <img
                      src={`http://localhost:3001/uploads/user/image/${board.userId}/${board.userImage}`}
                      alt="boardData image"
                      className="w-8 h-8 object-cover rounded-3xl mr-2"
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/common/no-image.webp`}
                      alt="boardData image"
                    />
                  )}
                  <p className="text-md text-gray-500 dark:text-gray-500">
                    {board.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex ">
            <div className="w-3/5 ">
              <p className="text-base h-12 txt-limit-2 pr-2">{board.title}</p>
              <div className="flex mt-2">
                <OtherImage
                  id={board.userId}
                  url={board.userImage}
                  imageWidth={"25px"}
                  imageHeight={"25px"}
                  borderRadius={"20px"}
                />

                <UserName
                  name={board.name}
                  pcFontSize={"14px"}
                  spFontSize={"14px"}
                  fontWeight={0}
                  margin={"auto 5px"}
                  option={""}
                />
              </div>
            </div>

            <div className="w-2/5">
              <UserCircleImage
                generalData={board}
                imageWidth={"100%"}
                imageHeight={"12vh"}
                maxImageHeight={""}
                rounded={"5px"}
                marginRight={""}
              />
            </div>
          </div> */}
        </Link>
      ))}
    </>
  );
};

export default BoardsItem;
