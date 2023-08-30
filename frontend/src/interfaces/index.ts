// サインアップ
export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  confirmSuccessUrl: string;
}

// サインイン
export interface SignInParams {
  email: string;
  password: string;
}

// リセットメール送信
export interface SendResetMailParams {
  email: string;
}

// パスワードリセット
export interface ResetPasswordParams {
  password: string;
  passwordConfirmation: string;
  resetPasswordToken: string;
}

// ユーザー
export interface UserData {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  age: string;
  tags: string[];
  image?: {
    url: string;
  };
  body: string;
  subjectCode: string;
  subjectId: string;
  genderCode: string;
  genderId: string;
  gradeCode: string;
  gradeId: string;
  prefectureId: string;
  prefectureCode: string;
  birthplaceId: string;
  birthplaceCode: string;
  interestId: string;
  allowPasswordChange: boolean;
  likeCount: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

// ユーザ個別データ
export interface UserDataResponse {
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  tagsData: UserTagData[];
}

// 趣味情報
export interface UserTagData {
  id: number;
  userId: string;
  tagId: string;
  tagName: string;
}

// 趣味情報
export interface UserHobbyData {
  id: number;
  hobbyId: string;
  hobbyCode: string;
}

// 興味分野情報
export interface UserInterestData {
  id: number;
  interestId: string;
  interestCode: string;
}

// 掲示板
export interface BoardData {
  id: number;
  boardId: number;
  userId: string;
  title: string;
  boardTitle: string;
  image?: {
    url: string;
  };
  userImage: string;
  body: string;
  boardBody: string;
  likeCount: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

// コメントデータ
export interface CommentData {
  id: number;
  name: string;
  image?: {
    url: string;
  };
  boardId: string;
  userId: string;
  commentId: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

// インフォメーション
export interface InfoData {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

// チャットユーザデータ
export interface ChatUserData {
  id: string;
  uid: string;
  provider: string;
  email: string;
  name: string;
  age: number;
  image?: {
    url: string;
  };
  roomId: string;
  latestMessageBody: string;
  latestCreatedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageData {
  id: string;
  userId: string;
  roomId: string;
  body: string;
  image?: {
    url: string;
  };
}

export interface CommunityCategoryData {
  id: string;
  communityCode: string;
}

export interface CommunityData {
  id: string;
  communityId: string;
  communityCode: string;
  userId: string;
  categoryId: number;
  title: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityDataResponse {
  allCommunity: CommunityData[];
  myCommunity: CommunityData[];
  latestCommunity: CommunityData[];
  popularCommunity: CommunityData[];
}

export interface CommunityCommentData {
  id: string;
  communityId: string;
  userId: string;
  body: string;
  image?: {
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageItemsData {
  id: string;
  communityId: string;
  userId: string;
  roomId: string;
  body: string;
  image?: {
    url: string;
  };
  name: string;
  userImage: string;
  createdAt: Date;
  updatedAt: Date;
}
