export default class Gender {
  static GEN_OPTIONS = [
    [1, "未選択"],
    [2, "男性"],
    [3, "女性"],
    [4, "その他"],
  ];

  static getGenderLabel(id: number) {
    const genderOption = Gender.GEN_OPTIONS.find((option) => option[0] === id);
    return genderOption ? genderOption[1] : "未選択";
  }
}
