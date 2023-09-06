import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { clearPreview } from 'lib/api/helper';
// Style
import { makeStyles, Theme } from '@material-ui/core/styles';
import Gender from 'options/gender';
import Prefectures from 'options/prefecture';
import Grade from 'options/grade';
import Subject from 'options/subject';
import Interest from 'options/interest';
import Hobby from 'options/hobby';
// Function
import { updateUserData } from 'lib/api/user';
// Interface
import { UserData } from 'interfaces/index';
import { UserTagData } from 'interfaces/index';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import FormInputText from 'views/components/atoms/FormInputText';
import FormTextarea from 'views/components/atoms/FormTextarea';
import FormImage from 'views/components/atoms/FormImage';
import FormSubmitButton from 'views/components/atoms/FormSubmitButton';
import FormSelect from 'views/components/atoms/FormSelect';

interface UserEditFormProps {
    handleGetUserData: Function;
    userData: UserData;
    tagsData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
    checkBox: {
        display: 'none',
    },
    checkBoxChecked: {
        outline: 'solid 3px red',
    },
}));

const UserEditForm = ({ handleGetUserData, userData, tagsData }: UserEditFormProps) => {
    const classes = useStyles();
    // State
    const [name, setName] = useState<string>(userData.name || '');
    const [body, setBody] = useState<string>(userData.body || '');
    const [age, setAge] = useState<string>(userData.age || '');
    const [tags, setTags] = useState<string[]>([...tagsData.map((tag) => tag.tagName)]);
    const [tag, setTag] = useState<string>('');
    const [image, setImage] = useState<File | undefined>();
    const [preview, setPreview] = useState<string>('');
    const [showInterestOptions, setShowInterestOptions] = useState(false);
    const [showHobbyOptions, setShowHobbyOptions] = useState(false);
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    // Id
    const { id } = useParams<{ id: string }>();
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Gender
    const initialGender = userData.genderId
        ? {
              value: userData.genderId.toString(),
              label: userData.genderCode.toString(),
          }
        : null;
    const [gender, setGender] = useState(initialGender);
    const handleGenderChange = (selectedOption: any) => {
        setGender(selectedOption);
    };
    const genderOptions = Gender.GEN_OPTIONS.map(([value, label]) => ({
        value: value.toString(),
        label: label.toString(),
    }));

    // Grade
    const initialGrade = userData.gradeId
        ? {
              value: userData.gradeId.toString(),
              label: userData.gradeCode.toString(),
          }
        : null;
    const [grade, setGrade] = useState(initialGrade);
    const handleGradeChange = (selectedOption: any) => {
        setGrade(selectedOption);
    };
    const gradeOptions = Grade.GRD_OPTIONS.map(([value, label]) => ({
        value: value.toString(),
        label: label.toString(),
    }));

    // Subject
    const initialSubject = userData.subjectId
        ? {
              value: userData.subjectId.toString(),
              label: userData.subjectCode.toString(),
          }
        : null;
    const [subject, setSubject] = useState(initialSubject);
    const handleSubjectChange = (selectedOption: any) => {
        setSubject(selectedOption);
    };
    const subjectOptions = Subject.SUB_OPTIONS.map(([value, label]) => ({
        value: value.toString(),
        label: label.toString(),
    }));

    // Prefecture
    const initialPrefecture = userData.prefectureId
        ? {
              value: userData.prefectureId.toString(),
              label: userData.prefectureCode.toString(),
          }
        : null;
    const [prefecture, setPrefecture] = useState(initialPrefecture);
    const handlePrefectureChange = (selectedOption: any) => {
        setPrefecture(selectedOption);
    };
    const prefectureOptions = Prefectures.PREF_OPTIONS.map(([value, label]) => ({
        value: value.toString(),
        label: label.toString(),
    }));

    // Birthplace
    const initialBirthplace = userData.birthplaceId
        ? {
              value: userData.birthplaceId.toString(),
              label: userData.birthplaceCode.toString(),
          }
        : null;
    const [birthplace, setBirthplace] = useState(initialBirthplace);
    const handleBirthplaceChange = (selectedOption: any) => {
        setBirthplace(selectedOption);
    };
    const birthplaceOptions = Prefectures.PREF_OPTIONS.map(([value, label]) => ({
        value: value.toString(),
        label: label.toString(),
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

    const onSubmit = async () => {
        // フォームデータの送信
        const formData = new FormData();

        formData.append('name', name);
        if (image) {
            formData.append('image', image);
        }
        formData.append('body', body);
        formData.append('age', age);
        formData.append('gender_id', gender ? gender.value : '');
        formData.append('grade_id', grade ? grade.value : '');
        formData.append('prefecture_id', prefecture ? prefecture.value : '');
        formData.append('birthplace_id', birthplace ? birthplace.value : '');
        formData.append('subject_id', subject ? subject.value : '');

        // タグをデータ登録用に配列に格納する
        // なにもタグがない場合は、データを送信しない
        if (tags.length !== 0) {
            tags.forEach((tagValue) => {
                formData.append('tags[]', tagValue);
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

        await updateUserData(id, formData).then(() => {
            handleGetUserData();
        });
        clearPreview(setPreview);
    };

    // 興味オプションの表示を切り替えるボタンが押されたときの処理
    const handleToggleInterestOptions = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowInterestOptions((prevShowInterestOptions) => !prevShowInterestOptions);
    };

    // 興味オプションの表示を切り替えるボタンが押されたときの処理
    const handleToggleHobbyOptions = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowHobbyOptions((prevShowHobbyOptions) => !prevShowHobbyOptions);
    };

    const handleAddTag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // デフォルト操作を拒否するメソッド(ページ再読み込みを拒否する)
        e.preventDefault();
        if (tag.trim() !== '') {
            // 新しいタグを追加する場合は、元のtagsステートには影響を与えないようにします
            setTags((prevTags) => [...prevTags, tag.trim()]);
            setTag(''); // タグを追加したら入力フィールドをクリア
        }
    };

    // 新しくhandleRemoveTag関数を追加します
    const handleRemoveTag = (tagToRemove: string) => {
        // タグを取り除くために、現在のtagsステートから対象のタグをフィルタリングします
        setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-base m-auto">
                <p className="text-center pt-5 pb-3">ユーザー情報編集</p>

                <FormInputText
                    state={name}
                    setState={setName}
                    inputTitle={'名前'}
                    column={'name'}
                    type={'text'}
                />

                <FormImage
                    setState={setImage}
                    inputTitle={'プロフィール画像'}
                    preview={preview}
                    setPreview={setPreview}
                />

                <FormTextarea
                    state={body}
                    setState={setBody}
                    inputTitle={'自己紹介'}
                    column={'body'}
                />

                <FormInputText
                    state={age}
                    setState={setAge}
                    inputTitle={'年齢'}
                    column={'age'}
                    type={'number'}
                />

                <FormSelect
                    value={gender}
                    onChange={handleGenderChange}
                    inputTitle="性別"
                    options={genderOptions}
                />

                <FormSelect
                    value={grade}
                    onChange={handleGradeChange}
                    inputTitle="学年"
                    options={gradeOptions}
                />

                <FormSelect
                    value={subject}
                    onChange={handleSubjectChange}
                    inputTitle="専攻"
                    options={subjectOptions}
                />

                <FormSelect
                    value={prefecture}
                    onChange={handlePrefectureChange}
                    inputTitle="居住地"
                    options={prefectureOptions}
                />

                <FormSelect
                    value={birthplace}
                    onChange={handleBirthplaceChange}
                    inputTitle="出身地"
                    options={birthplaceOptions}
                />

                <div className="mt-2">
                    <b className="input-title">研究タグ</b>
                    <div className="flex">
                        <input
                            type="text"
                            value={tag}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setTag(e.target.value);
                            }}
                            className="border py-3 px-4 block w-full border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        />

                        <button
                            className="w-24 text-10 sm:text-xs ml-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all  dark:focus:ring-offset-gray-800"
                            onClick={handleAddTag}
                        >
                            タグ追加
                        </button>
                    </div>
                </div>

                {/* 追加されたタグを表示 */}
                <div className="py-2 flex flex-wrap">
                    {tags.map((tag, index) => (
                        <p
                            key={index}
                            className="bg-blue-600 text-white rounded-3xl py-1 px-2 mr-1 mb-1 text-sm flex items-center"
                        >
                            {tag}
                            <button
                                className="text-lg text-white ml-1 flex items-center"
                                onClick={() => handleRemoveTag(tag)}
                            >
                                <HighlightOffIcon fontSize="small" />
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
                        {showInterestOptions ? '興味分野一覧を隠す' : '興味分野一覧を見る'}
                    </button>
                </div>

                <div className="mb-5">
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
                                                <option
                                                    value={value}
                                                    className="text-center text-xs"
                                                >
                                                    {label}
                                                </option>
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* 興味オプションの表示を切り替えるボタン */}
                <div className="mt-3">
                    <b className="input-title">趣味</b>
                    <br />
                    <button
                        className="bg-gray-200 text-gray py-2 px-5 text-sm mt-2 w-1/2"
                        onClick={handleToggleHobbyOptions}
                    >
                        {showHobbyOptions ? '趣味一覧を隠す' : '趣味一覧を見る'}
                    </button>
                </div>

                <div className="mb-5">
                    {/* 興味オプションを表示する部分 */}
                    {showHobbyOptions && (
                        <div>
                            <div className="w-full flex flex-wrap py-3">
                                {Hobby.HOB_OPTIONS.map((option: (string | number)[]) => {
                                    if (option.length !== 3) return null; // オプションが3つの要素を持たない場合はnullを返す

                                    const [value, label, image] = option as HobbyOption; // オプションの型をHobbyOptionに変換
                                    const isChecked = selectedHobbies.includes(value);

                                    return (
                                        <div key={value} className="w-1/5 my-1 relative px-1">
                                            <label className="image-dark">
                                                <input
                                                    type="checkbox"
                                                    className={`${classes.checkBox}`}
                                                    checked={isChecked}
                                                    onChange={() => handleHobbySelection(value)}
                                                />
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/hobby/${image}`}
                                                    className={`rounded ${
                                                        isChecked ? classes.checkBoxChecked : ''
                                                    }`}
                                                    alt=""
                                                />
                                            </label>
                                            <option
                                                value={value}
                                                className="text-10 sm:text-xs absolute inset-1/2  left-0 right-0 text-white flex items-center justify-center"
                                            >
                                                {label}
                                            </option>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <FormSubmitButton buttonTitle={'変更を保存する'} />
            </form>
        </>
    );
};

export default UserEditForm;
