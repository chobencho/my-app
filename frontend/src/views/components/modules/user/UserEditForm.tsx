import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import Gender from "options/gender";
import Prefectures from "options/prefecture";
import Grade from "options/grade";
import Subject from "options/subject";
import Interest from "options/interest";
import Hobby from "options/hobby";
// Function
import { updateUserData } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { clearPreview } from "lib/api/helper";
import { uploadImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface UserEditFormProps {
  handleGetUserData: Function;
  userData: UserData;
  userResearchTagData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  checkBox: {
    display: "none",
  },
  checkBoxChecked: {
    outline: "solid 3px red",
  },
}));

const UserEditForm = ({
  handleGetUserData,
  userData,
  userResearchTagData,
}: UserEditFormProps) => {
  const classes = useStyles();
  // State
  const [name, setName] = useState<string>(userData.name || "");
  const [body, setBody] = useState<string>(userData.body || "");
  const [age, setAge] = useState<string>(userData.age || "");
  const [tags, setTags] = useState<string[]>([
    ...userResearchTagData.map((tag) => tag.tagName),
  ]);
  const [tag, setTag] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  const [showInterestOptions, setShowInterestOptions] = useState(false);
  const [showHobbyOptions, setShowHobbyOptions] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  // Id
  const { id } = useParams<{ id: string }>();

  const initialGender = userData.genderId
    ? {
      value: userData.genderId.toString(),
      label: userData.genderCode.toString(),
    } // 適切なラベルをセットしてください
    : null;

  const [gender, setGender] = useState(initialGender);

  const handleGenderChange = (selectedOption: any) => {
    setGender(selectedOption);
  };

  const genderOptions = Gender.GEN_OPTIONS.map(([value, label]) => ({
    value: value.toString(),
    label: label.toString(), // labelをstring型に変換
  }));

  const initialGrade = userData.gradeId
    ? {
      value: userData.gradeId.toString(),
      label: userData.gradeCode.toString(),
    } // 適切なラベルをセットしてください
    : null;

  const [grade, setGrade] = useState(initialGrade);

  const handleGradeChange = (selectedOption: any) => {
    setGrade(selectedOption);
  };

  const gradeOptions = Grade.GRD_OPTIONS.map(([value, label]) => ({
    value: value.toString(),
    label: label.toString(), // labelをstring型に変換
  }));

  const initialSubject = userData.subjectId
    ? {
      value: userData.subjectId.toString(),
      label: userData.subjectCode.toString(),
    } // 適切なラベルをセットしてください
    : null;

  const [subject, setSubject] = useState(initialSubject);

  const handleSubjectChange = (selectedOption: any) => {
    setSubject(selectedOption);
  };

  const subjectOptions = Subject.SUB_OPTIONS.map(([value, label]) => ({
    value: value.toString(),
    label: label.toString(), // labelをstring型に変換
  }));

  const initialPrefecture = userData.prefectureId
    ? {
      value: userData.prefectureId.toString(),
      label: userData.prefectureCode.toString(),
    } // 適切なラベルをセットしてください
    : null;

  const [prefecture, setPrefecture] = useState(initialPrefecture);

  const handlePrefectureChange = (selectedOption: any) => {
    setPrefecture(selectedOption);
  };

  const prefectureOptions = Prefectures.PREF_OPTIONS.map(([value, label]) => ({
    value: value.toString(),
    label: label.toString(), // labelをstring型に変換
  }));

  const initialBirthplace = userData.birthplaceId
    ? {
      value: userData.birthplaceId.toString(),
      label: userData.birthplaceCode.toString(),
    } // 適切なラベルをセットしてください
    : null;

  const [birthplace, setBirthplace] = useState(initialBirthplace);

  const handleBirthplaceChange = (selectedOption: any) => {
    setBirthplace(selectedOption);
  };

  const birthplaceOptions = Prefectures.PREF_OPTIONS.map(([value, label]) => ({
    value: value.toString(),
    label: label.toString(), // labelをstring型に変換
  }));

  // 趣味チェック機能
  type HobbyOption = [string, string, string];
  const MAX_HOBBY_SELECTION = 5;
  const handleHobbySelection = (hobbyValue: string) => {
    setSelectedHobbies((prevSelectedHobbies) => {
      if (prevSelectedHobbies.includes(hobbyValue)) {
        // チェックを外す場合
        return prevSelectedHobbies.filter((value) => value !== hobbyValue);
      } else {
        // チェックを付ける場合
        if (prevSelectedHobbies.length < MAX_HOBBY_SELECTION) {
          return [...prevSelectedHobbies, hobbyValue];
        } else {
          // 選択可能なホビーの数を超えた場合、現在の選択を維持
          return prevSelectedHobbies;
        }
      }
    });
  };

  // 興味チェック機能
  type InterestOption = [string, string, string];
  const MAX_INTEREST_SELECTION = 3;
  const handleInterestSelection = (interestValue: string) => {
    setSelectedInterests((prevSelectedInterests) => {
      if (prevSelectedInterests.includes(interestValue)) {
        // チェックを外す場合
        return prevSelectedInterests.filter((value) => value !== interestValue);
      } else {
        // チェックを付ける場合
        if (prevSelectedInterests.length < MAX_INTEREST_SELECTION) {
          return [...prevSelectedInterests, interestValue];
        } else {
          // 選択可能な興味の数を超えた場合、現在の選択を維持
          return prevSelectedInterests;
        }
      }
    });
  };

  // 画像アップロード機能
  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => uploadImage(e, setImage),
    [setImage]
  );

  // プレビュー機能
  const handlePreviewImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => previewImage(e, setPreview),
    [setPreview]
  );

  // プレビュー削除機能
  const handleClearPreview = () => {
    setPreview("");
    clearPreview();
  };

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("name", name);
    if (image) formData.append("image", image);
    formData.append("body", body);
    formData.append("age", age);
    formData.append("gender_id", gender ? gender.value : "");
    formData.append("grade_id", grade ? grade.value : "");
    formData.append("prefecture_id", prefecture ? prefecture.value : "");
    formData.append("birthplace_id", birthplace ? birthplace.value : "");
    formData.append("subject_id", subject ? subject.value : "");

    // タグをデータ登録用に配列に格納する
    // なにもタグがない場合は、データを送信しない
    if (tags.length !== 0) {
      tags.forEach((tagValue) => {
        formData.append("tags[]", tagValue);
      });
    }

    if (selectedInterests.length != 0) {
      selectedInterests.forEach((interestValue) => {
        formData.append(`interest_ids[]`, interestValue);
      });
    }

    if (selectedHobbies.length != 0) {
      selectedHobbies.forEach((hobbyValue) => {
        formData.append(`hobby_ids[]`, hobbyValue);
      });
    }

    return formData;
  };

  // ユーザ情報を変更する
  const handleEditUserData = async (e: React.FormEvent<HTMLFormElement>) => {
    // デフォルト操作を拒否するメソッド(ページ再読み込みを拒否する)
    e.preventDefault();
    const data = createFormData();

    await updateUserData(id, data).then(() => {
      handleGetUserData();
    });

    handleClearPreview();
  };

  // 興味オプションの表示を切り替えるボタンが押されたときの処理
  const handleToggleInterestOptions = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowInterestOptions(
      (prevShowInterestOptions) => !prevShowInterestOptions
    );
  };

  // 興味オプションの表示を切り替えるボタンが押されたときの処理
  const handleToggleHobbyOptions = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowHobbyOptions((prevShowHobbyOptions) => !prevShowHobbyOptions);
  };

  const handleAddTag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // デフォルト操作を拒否するメソッド(ページ再読み込みを拒否する)
    e.preventDefault();
    if (tag.trim() !== "") {
      // 新しいタグを追加する場合は、元のtagsステートには影響を与えないようにします
      setTags((prevTags) => [...prevTags, tag.trim()]);
      setTag(""); // タグを追加したら入力フィールドをクリア
    }
  };

  // 新しくhandleRemoveTag関数を追加します
  const handleRemoveTag = (tagToRemove: string) => {
    // タグを取り除くために、現在のtagsステートから対象のタグをフィルタリングします
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <form onSubmit={handleEditUserData} className="w-96 m-auto">
        <p className="text-center pt-5 pb-3">ユーザー情報編集</p>
        <div className="">
          <div className="flex items-center">
            <b className="input-title">名前</b>
            <p className="required">必須</p>
          </div>
          <input
            type="text"
            placeholder="name"
            className="input-text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-part">
          <b className="input-title">プロフィール画像</b>
          <input
            id="icon-button-file"
            type="file"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleUploadImage(e);
              handlePreviewImage(e);
            }}
          />
          <div className="relative">
            <label className="image-label" htmlFor="icon-button-file">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mb-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-1 text-sm text-gray-400">
                  <span className="font-semibold">
                    写真のアップロードはここをクリック
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </label>
            {preview ? (
              <div className="absolute top-0 left-0">
                <HighlightOffIcon
                  onClick={() => handleClearPreview()}
                  className="absolute text-white top-1 left-1"
                />
                <img
                  src={preview}
                  alt="preview img"
                  className="preview-image"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="input-part">
          <div className="flex items-center">
            <b className="input-title">自己紹介</b>
            <p className="required">必須</p>
          </div>
          <textarea
            placeholder="introduce"
            className="input-text whitespace-pre-wrap h-40"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="">
          <div className="flex items-center">
            <b className="input-title">年齢</b>
            <p className="required">必須</p>
          </div>
          <input
            type="number"
            placeholder="age"
            className="input-text"
            value={age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="my-1">
          <div className="flex items-center">
            <b className="input-title">性別</b>
            <p className="required">必須</p>
          </div>
          <Select
            className=""
            value={gender}
            onChange={handleGenderChange}
            options={genderOptions}
          />
        </div>

        <div className="my-1">
          <div className="flex items-center">
            <b className="input-title">学年</b>
            <p className="required">必須</p>
          </div>
          <Select
            className=""
            value={grade}
            onChange={handleGradeChange}
            options={gradeOptions}
          />
        </div>

        <div className="my-1">
          <div className="flex items-center">
            <b className="input-title">専攻</b>
            <p className="required">必須</p>
          </div>
          <Select
            className=""
            value={subject}
            onChange={handleSubjectChange}
            options={subjectOptions}
          />
        </div>

        <div className="my-1">
          <div className="flex items-center">
            <b className="input-title">居住地</b>
            <p className="required">必須</p>
          </div>
          <Select
            className=""
            value={prefecture}
            onChange={handlePrefectureChange}
            options={prefectureOptions}
          />
        </div>

        <div className="my-1">
          <div className="flex items-center">
            <b className="input-title">出身地</b>
            <p className="required">必須</p>
          </div>
          <Select
            className=""
            value={birthplace}
            onChange={handleBirthplaceChange}
            options={birthplaceOptions}
          />
        </div>

        <div className="mt-2">
          <b className="input-title">研究タグ</b>
          <div className="flex">
            <input
              type="text"
              value={tag}
              className="input-text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTag(e.target.value);
              }}
            />
            <button
              className="border border-blue-base rounded text-blue-base text-sm w-1/6 m-1.5"
              onClick={handleAddTag}
            >
              追加
            </button>
          </div>
        </div>

        {/* 追加されたタグを表示 */}
        <div className="py-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-blue-600 text-white rounded-3xl py-1 px-2 mr-1 mb-1 text-sm"
            >
              {tag}
              <button
                className="text-lg text-white ml-1"
                onClick={() => handleRemoveTag(tag)}
              >
                <HighlightOffIcon />
              </button>
            </p>
          ))}
        </div>

        {/* 興味オプションの表示を切り替えるボタン */}
        <div className="mt-3">
          <b className="input-title">興味分野</b>
          <br />
          <button
            className="bg-gray-200 text-gray py-2 px-5 text-sm mt-2 w-1/2"
            onClick={handleToggleInterestOptions}
          >
            {showInterestOptions ? "興味分野一覧を隠す" : "興味分野一覧を見る"}
          </button>
        </div>

        {/* 興味オプションを表示する部分 */}
        {showInterestOptions && (
          <div>
            <div className="w-full flex flex-wrap py-2">
              {Interest.INT_OPTIONS.map((option: (string | number)[]) => {
                if (option.length !== 3) return null; // オプションが3つの要素を持たない場合はnullを返す

                const [value, label, image] = option as InterestOption; // オプションの型をInterestOptionに変換
                const isChecked = selectedInterests.includes(value);

                return (
                  <div key={value} className="w-1/2 p-1">
                    <label className="flex">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleInterestSelection(value)}
                        className="mr-1"
                      />
                      <option value={value} className="text-center text-xs">
                        {label}
                      </option>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 興味オプションの表示を切り替えるボタン */}
        <div className="mt-3">
          <b className="input-title">趣味</b>
          <br />
          <button
            className="bg-gray-200 text-gray py-2 px-5 text-sm mt-2 w-1/2"
            onClick={handleToggleHobbyOptions}
          >
            {showHobbyOptions ? "趣味一覧を隠す" : "趣味一覧を見る"}
          </button>
        </div>

        {/* 興味オプションを表示する部分 */}
        {showHobbyOptions && (
          <div>
            <div className="w-full flex flex-wrap py-3">
              {Hobby.HOB_OPTIONS.map((option: (string | number)[]) => {
                if (option.length !== 3) return null; // オプションが3つの要素を持たない場合はnullを返す

                const [value, label, image] = option as HobbyOption; // オプションの型をHobbyOptionに変換
                const isChecked = selectedHobbies.includes(value);

                return (
                  <div key={value} className="w-1/5 pb-2 relative px-1">
                    <label className="image-dark">
                      <input
                        type="checkbox"
                        className={`${classes.checkBox}`}
                        checked={isChecked}
                        onChange={() => handleHobbySelection(value)}
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}/images/hobby/${image}`}
                        className={`rounded ${isChecked ? classes.checkBoxChecked : ""
                          }`}
                        alt=""
                      />
                    </label>
                    <option
                      value={value}
                      className="text-center text-10 absolute bottom-7 left-0 right-0 text-white"
                    >
                      {label}
                    </option>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="generalButton text-white bg-blue-base w-3/5"
          >
            変更を保存する
          </button>
        </div>
      </form>

      {preview ? (
        <div>
          <button
            onClick={() => handleClearPreview()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
          <img src={preview} alt="preview img" className="border" />
        </div>
      ) : null}
    </>
  );
};

export default UserEditForm;
