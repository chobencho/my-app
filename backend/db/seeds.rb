# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Prefecture.create(prefecture_code: '未選択')
Prefecture.create(prefecture_code: '北海道')
Prefecture.create(prefecture_code: '青森県')
Prefecture.create(prefecture_code: '岩手県')
Prefecture.create(prefecture_code: '宮城県')
Prefecture.create(prefecture_code: '秋田県')
Prefecture.create(prefecture_code: '山形県')
Prefecture.create(prefecture_code: '福島県')
Prefecture.create(prefecture_code: '茨城県')
Prefecture.create(prefecture_code: '栃木県')
Prefecture.create(prefecture_code: '群馬県')
Prefecture.create(prefecture_code: '埼玉県')
Prefecture.create(prefecture_code: '千葉県')
Prefecture.create(prefecture_code: '東京都')
Prefecture.create(prefecture_code: '神奈川県')
Prefecture.create(prefecture_code: '新潟県')
Prefecture.create(prefecture_code: '富山県')
Prefecture.create(prefecture_code: '石川県')
Prefecture.create(prefecture_code: '福井県')
Prefecture.create(prefecture_code: '山梨県')
Prefecture.create(prefecture_code: '長野県')
Prefecture.create(prefecture_code: '岐阜県')
Prefecture.create(prefecture_code: '静岡県')
Prefecture.create(prefecture_code: '愛知県')
Prefecture.create(prefecture_code: '三重県')
Prefecture.create(prefecture_code: '滋賀県')
Prefecture.create(prefecture_code: '京都府')
Prefecture.create(prefecture_code: '大阪府')
Prefecture.create(prefecture_code: '兵庫県')
Prefecture.create(prefecture_code: '奈良県')
Prefecture.create(prefecture_code: '和歌山県')
Prefecture.create(prefecture_code: '鳥取県')
Prefecture.create(prefecture_code: '島根県')
Prefecture.create(prefecture_code: '岡山県')
Prefecture.create(prefecture_code: '広島県')
Prefecture.create(prefecture_code: '山口県')
Prefecture.create(prefecture_code: '徳島県')
Prefecture.create(prefecture_code: '香川県')
Prefecture.create(prefecture_code: '愛媛県')
Prefecture.create(prefecture_code: '高知県')
Prefecture.create(prefecture_code: '福岡県')
Prefecture.create(prefecture_code: '佐賀県')
Prefecture.create(prefecture_code: '長崎県')
Prefecture.create(prefecture_code: '熊本県')
Prefecture.create(prefecture_code: '大分県')
Prefecture.create(prefecture_code: '宮崎県')
Prefecture.create(prefecture_code: '鹿児島県')
Prefecture.create(prefecture_code: '沖縄県')
Prefecture.create(prefecture_code: 'その他')

Subject.create(subject_code: '未選択')
Subject.create(subject_code: '数学')
Subject.create(subject_code: '物理学')
Subject.create(subject_code: '化学')
Subject.create(subject_code: '生物')
Subject.create(subject_code: '地球・惑星')
Subject.create(subject_code: '機械')
Subject.create(subject_code: 'システム制御')
Subject.create(subject_code: '電気・電子')
Subject.create(subject_code: '農学')
Subject.create(subject_code: '材料')
Subject.create(subject_code: '応用科学')
Subject.create(subject_code: '薬学')
Subject.create(subject_code: '医療')
Subject.create(subject_code: '情報工学')
Subject.create(subject_code: '知能・情報')
Subject.create(subject_code: '建築')
Subject.create(subject_code: '都市・環境学')
Subject.create(subject_code: '土木工学')
Subject.create(subject_code: '商学')
Subject.create(subject_code: '経済学')
Subject.create(subject_code: '法学')
Subject.create(subject_code: '社会学')
Subject.create(subject_code: '文学')
Subject.create(subject_code: '外国語')
Subject.create(subject_code: '心理学')
Subject.create(subject_code: '教育')
Subject.create(subject_code: 'その他')

Interest.create(interest_code: '食品・農林・水産')
Interest.create(interest_code: '建設・住宅・インテリア')
Interest.create(interest_code: '繊維・化学・薬品・化粧品')
Interest.create(interest_code: '鉄鋼・金属・鉱業')
Interest.create(interest_code: '機械・プラント')
Interest.create(interest_code: '電子・電気機器')
Interest.create(interest_code: '自動車・輸送用機器')
Interest.create(interest_code: '精密・医療機器')
Interest.create(interest_code: '印刷・事務機器関連')
Interest.create(interest_code: 'スポーツ・玩具')
Interest.create(interest_code: 'その他メーカー')
Interest.create(interest_code: '不動産')
Interest.create(interest_code: '鉄道・航空・運輸・物流')
Interest.create(interest_code: '電力・ガス・エネルギー')
Interest.create(interest_code: 'フードサービス')
Interest.create(interest_code: 'ホテル・旅行')
Interest.create(interest_code: '医療・福祉')
Interest.create(interest_code: 'アミューズメント・レジャー')
Interest.create(interest_code: 'その他サービス業')
Interest.create(interest_code: 'コンサルティング・調査')
Interest.create(interest_code: '人材サービス')
Interest.create(interest_code: '教育')
Interest.create(interest_code: '総合商社')
Interest.create(interest_code: '専門商社')
Interest.create(interest_code: 'ソフトウェア')
Interest.create(interest_code: 'インターネット')
Interest.create(interest_code: '通信')
Interest.create(interest_code: '百貨店・スーパー')
Interest.create(interest_code: 'コンビニ')
Interest.create(interest_code: '専門店')
Interest.create(interest_code: '放送')
Interest.create(interest_code: '新聞')
Interest.create(interest_code: '出版')
Interest.create(interest_code: '広告')
Interest.create(interest_code: '銀行・証券')
Interest.create(interest_code: 'クレジット')
Interest.create(interest_code: '信販・リース')
Interest.create(interest_code: 'その他金融')
Interest.create(interest_code: '生保・損保')
Interest.create(interest_code: '公社・団体')
Interest.create(interest_code: '官公庁')

Hobby.create(hobby_code: '映画')
Hobby.create(hobby_code: 'カラオケ')
Hobby.create(hobby_code: '写真')
Hobby.create(hobby_code: '劇場')
Hobby.create(hobby_code: '芸術')
Hobby.create(hobby_code: '音楽')
Hobby.create(hobby_code: '創作')
Hobby.create(hobby_code: 'ゲーム')
Hobby.create(hobby_code: 'アニメ')
Hobby.create(hobby_code: '小説')
Hobby.create(hobby_code: '旅行')
Hobby.create(hobby_code: '運動')
Hobby.create(hobby_code: 'ジョギング')
Hobby.create(hobby_code: '車')
Hobby.create(hobby_code: '自転車')
Hobby.create(hobby_code: 'ダンス')
Hobby.create(hobby_code: 'ゴルフ')
Hobby.create(hobby_code: 'ダーツ')
Hobby.create(hobby_code: '格闘技')
Hobby.create(hobby_code: 'トレーニング')
Hobby.create(hobby_code: '結婚')
Hobby.create(hobby_code: 'スイーツ')
Hobby.create(hobby_code: '料理')
Hobby.create(hobby_code: 'インドア')
Hobby.create(hobby_code: '動物')
Hobby.create(hobby_code: 'お笑い')
Hobby.create(hobby_code: '雑貨')
Hobby.create(hobby_code: 'ハイキング')
Hobby.create(hobby_code: '温泉')
Hobby.create(hobby_code: '遊園地')
Hobby.create(hobby_code: 'アルコール')
Hobby.create(hobby_code: 'お喋り')

Grade.create(grade_code: '未選択')
Grade.create(grade_code: '修士課程1年')
Grade.create(grade_code: '修士課程2年')
Grade.create(grade_code: '博士課程1年')
Grade.create(grade_code: '博士課程2年')
Grade.create(grade_code: '博士課程3年')
Grade.create(grade_code: '博士課程4年')
Grade.create(grade_code: 'その他')

Gender.create(gender_code: '未選択')
Gender.create(gender_code: '男性')
Gender.create(gender_code: '女性')
Gender.create(gender_code: 'その他')

CommunityCategory.create(community_code: '雑談')
CommunityCategory.create(community_code: '恋愛')
CommunityCategory.create(community_code: '相談')
CommunityCategory.create(community_code: '趣味')
CommunityCategory.create(community_code: '研究')
CommunityCategory.create(community_code: '学会')
CommunityCategory.create(community_code: '学問')
CommunityCategory.create(community_code: '募集')
CommunityCategory.create(community_code: '進路')