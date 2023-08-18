import { Link } from 'react-router-dom'

export interface CreateNewBoardButtonProps {
  verifiedAge: boolean
}

const CreateNewBoardButton = ({ verifiedAge }: CreateNewBoardButtonProps) => {
  return (
    <div className="fixed w-full bottom-16">
      <div className={"relative border bg-blue-base text-white p-3 my-3 mx-auto w-3/5 rounded-3xl"}>
        <p className="text-center">新規作成</p>
        {!verifiedAge && (
          <span
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            年齢確認が完了していません
          </span>
        )}
        {verifiedAge && (<Link to={`/boardCreate`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>)}
      </div>
    </div>

  )
}

export default CreateNewBoardButton
