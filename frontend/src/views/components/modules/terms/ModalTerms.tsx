import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShowVariousText from 'views/components/atoms/ShowVariousText';

export interface ModalTermsProps {
    onClose: Function;
}

const ModalTerms = ({ onClose }: ModalTermsProps) => {
    return (
        <div className="w-full h-full bg-gray-600 bg-opacity-60 fixed top-0 left-0 flex justify-center items-center z-50">
            <p className="max-modal bg-white p-2">
                <button onClick={() => onClose()} className="">
                    <HighlightOffIcon />
                </button>
                <ShowVariousText
                    fontSize={'16px'}
                    fontWeight={0}
                    margin={''}
                    classContent={'text-center'}
                    textContent={'Academia Matching利用規約'}
                    optionContent={''}
                />
                <p className="scroll-bar whitespace-pre-wrap w-full text-xs p-2 my-3">
                    Academia Matchingへようこそ。
                    <br />
                    Academia
                    Matching（以下「当サービス」と言います）に会員登録をなさるかどうかに関係なく、当サービスをご利用になれば、その時点でお客様は以下の利用規約（以下「本規約」と言います）にそのまま同意したことになり、本規約を内容とする当サービス利用契約が当社との間で締結されます。当サービスをご利用になる前に本規約をよくお読みください。本規約に同意しない場合は、当サービスを利用しないでください。
                    <br />
                    <br />
                    第1条（当サービスとは）
                    <br />
                    当サービスは、大学での研究や学習について共有する友人探しや出会いを希望する日本中の大学、研究機関及び高等教育機関に在学中の学生の男女（18歳以上。ただし、18歳以上であっても高校生は除きます）を対象に、知り合う機会を提供するものです。
                    <br />
                    <br />
                    第2条（定義）
                    <br />
                    本規約において、次の用語の意味がそれぞれ、以下の通りとする。
                    <br />
                    高校生...高校在学中の方。
                    <br />
                    スマートフォン...当サービスを利用する機能を有する携帯電話端末をいい、タブレット端末を含む
                    <br />
                    知的財産権...著作権、特許権、商標権等の知的財産権
                    <br />
                    <br />
                    <br />
                    第3条（サービス内容の保証および変更）
                    <br />
                    当社は提供するサービスの内容について、瑕疵（かし）やバグがないことを保証しておりません。また、当社は、お客様にあらかじめ通知することなく、当サービスの内容や仕様を変更したり、提供を中止したりすることができるものとします。
                    当社は、当サービスが、すべてのPC・スマートフォン（新品・中古品問いません。以下同様とします）およびOSに対応し利用できることを保証しておりません。また、当社は、当サービスに対応するPC、スマートフォンおよびOSを、いつでも、その裁量により、変更、中止、終了、することができるものとし、その提供を継続する義務を追わないものとする。
                    <br />
                    <br />
                    第４条（資格）
                    <br />
                    18歳以上（高校生は除く）でなければ、当サービスの会員登録や当サービス、ウェブサイトの利用ができません。違反された場合、会員登録は無効、アカウント削除となります。また、一部機能は学生かつ、18歳以上であることを証明した会員様しかご利用いただけません。
                    当サービスを利用することにより、本契約を締結し本規約と当社の定める条件の全てに従うための権利、権限および能力を有すること、ならびに重罪で有罪となったことがなく、発覚の有無にかかわらずいずれの性的犯罪を犯したことがないことを表明し、保証するものとみなされます。
                    他のお客様とのコミュニケーションについてはお客様が単独で責任を負い、当管理人は現在または将来のお客様のあらゆる行為に関して、何らの表明も保証もいたしません。当管理人はお客様の犯罪経歴調査を行い、お客様の経歴を問い合わせ、またはお客さまの当管理人への申告の真偽を確認する義務をおいませんが、法令（適用され得る外国法、政令、規約、条例、ガイドライン、業界団体の内部規約等の一切を含みます。以下同様とします。）もしくは本規約に定める場合または当管理人が必要と判断する場合には、いつでもこれらを行うことができるものとします。
                    <br />
                    <br />
                    第5条（禁止事項）
                    <br />
                    当サービスのご利用に際しては、以下の事項を禁止します。禁止事項に該当したものと管理人が判断した場合、第9条の規定に従い、お客様のメッセージ、その他プロフィールの記載内容等を事前通告なしに削除したり、サービス提供の全部または一部の利用を一時的に停止したり、お客様のアカウントを削除する（本契約も終了します）など、当管理人が適切と判断する各措置を講じることができるものとする。
                    <br />
                    <br />
                    お客様は、これらの禁止事項を行うことにより当管理人に損害を与えた場合は、管理人が当該のお客様に対して損害賠償を請求する権利を有することを認めます。
                    <br />
                    <br />
                    なお当サービスではお客様が本規約に違反する行為を発見した場合、管理人に通報する機能がございます。
                    <br />
                    （１）
                    正しく事実に合致しない情報を、管理人に提供し、または当サービスに投稿するなどの行為。
                    <br />
                    （２）
                    当サービスの利用により知り得た他の利用者の利用情報を、当サービスの利用以外の目的で使用する行為および本規約第20条（秘密保持）に違反する行為
                    <br />
                    （３）
                    日本または当サービスのご利用の際にお客様が所在する国・地域の法令に違反する行為。
                    <br />
                    （４）
                    社会規範・公序良俗に反するものや、他人の権利を侵害し、または他人の迷惑となるような情報を投稿などする行為。
                    <br />
                    （５） 他のお客様に対して、誹謗中傷したり、嫌がらせをしたりする行為。
                    <br />
                    （６）
                    当サービスを利用することにより得た他の会員に関する情報を、嫌がらせ、罵倒、危害を加える等の不当な目的、その他本規約または法令に違反し、若しくは違反するおそれのある方法、目的で使用する行為、及び、事前に明示的な同意を当該会員本人から得ずに当サービス以外の手段により連絡を取ったり、他の物品やサービス等の宣伝・勧誘・販売等をする行為
                    <br />
                    （７）
                    他人の使用するソフトウェア、ハードウェアなどの機能を破壊したり、妨害したりするようなプログラムなどの投稿等をする行為
                    <br />
                    （８）
                    当サービスのサーバーまたはネットワークの機能を破壊したり、妨害、運営を妨げたりする行為
                    <br />
                    （９）
                    当サービスの運営または配信する広告の掲載を妨害し、または妨害するおそれのある行為
                    <br />
                    （１０） 他のお客様の個人情報などを無断で収集、蓄積および公開する行為。
                    <br />
                    （１１）
                    当サービスを、提供の趣向に照らして本来のサービス提供の目的とは異なる目的で利用する行為。
                    <br />
                    （１２） 会員登録、退会を短期間で繰り返す行為。
                    <br />
                    （１３） 他のお客様のアカウントを使用して、サービスを利用する行為
                    <br />
                    （１４） 当サービス上に同時に複数のアカウントを登録する行為
                    <br />
                    （１５） 当サービスに関連して、反社会的勢力に直接・間接に利益を提供する行為
                    <br />
                    （１６） 他人のために、または他人の名前で投稿などをする行為
                    <br />
                    （１７）
                    氏名、住所、電話番号、メールアドレスなど（これらは、自分自身のものであるかを問いません）を投稿等する行為
                    <br />
                    （１８） 他のお客様と会う約束をした後、これを一方的にキャンセルする行為
                    <br />
                    （１９）
                    本人の身体的な特徴や、性的な好みなどを投稿したり、肉体関係を目的として当サービスを利用する行為
                    <br />
                    （２０） お客様間で金銭のやりとりをする行為
                    <br />
                    （２１） 他人や他の存在になりすます行為
                    <br />
                    （２２）
                    管理人から事前に書面で承諾を得ずに、自分の発言が管理人の承認を得ていると発言したり、明示したりする行為
                    <br />
                    （２３）
                    管理人、他のお客様またはその他の第三者の知的財産権等および肖像権、プライバシー権、名誉権その他の権利または利益を侵害し、または侵害する恐れのある行為
                    <br />
                    （２４）
                    当サービスに使用されているソフトウェアや当サービスのために使用されているソフトウェアの修正、改変、使用許諾、翻訳、販売、解析、模倣、解読、逆コンパイル、逆アセンブルその他これらに類する行為を行い、または他人にこれを行わせる行為
                    <br />
                    （２５）
                    自動投稿ツールなどを使用して投稿等をし、または巡回ツールなどを使用して投稿の検索を行う行為
                    <br />
                    （２６）
                    管理人から事前に書面で許可を得ずに、商業用の広告、宣伝、勧誘、その他営業行為を目的として、当サービスを利用する行為（スパム、情報収集などを含みます）
                    <br />
                    （２７） 次のようなコンテンツを投稿等する行為
                    <br />
                    <br />
                    ・あらゆる集団および個人に対する種類の人種差別や偏見、憎悪、身体的危害を助長するような、明らかに不快なものと管理人が判断するコンテンツ
                    <br />
                    ・本人の許可の有無にかかわらず、第三者の情報（メールアドレス・写真など）を使用したコンテンツ
                    <br />
                    ・第三者に対する嫌がらせ、または嫌がらせを指示するコンテンツ
                    <br />
                    ・内容に虚偽があるコンテンツ、他のお客様の誤解を招く恐れがあると当社が判断するコンテンツ、または罵倒、脅迫、わいせつ、名誉毀損に当たるような行為を助長するコンテンツ
                    <br />
                    ・海賊版コンピュータ・プログラムを提供したり、それにリンクを貼ったり、製品に組み込まれたコピー防止機能を回避する情報を提供したり、海賊版音楽ファイルにリンクを張ったりするなどして、他人の著作権によって保護された作品を違法または不正にコピーしたコンテンツまたはこれらを助長するコンテンツ
                    <br />
                    ・存在しないページや、パスワードがなければアクセスできないページを含んだコンテンツまたは隠されたページや画像を含んだコンテンツ
                    <br />
                    ・性的または暴力的なやり方などで18歳未満または高校生の人を不正に利用するコンテンツまたは高校生の個人情報を求めるコンテンツ
                    <br />
                    ・違法な武器の製造、購入や、他人のプライバシーの侵害、コンピューターウイルスの製造、違法行為に関する説明を提供するコンテンツ
                    <br />
                    ・薬物の不適切な利用を助長する表現を含むコンテンツ
                    <br />
                    ・営利法または違法な目的のために、他のお客様からパスワードや個人情報を求めるコンテンツ
                    <br />
                    ・当社から事前に書面で許可を得ずに、コンテスト、宝くじ、物々交換、宣伝、ネットワークビジネス、ネズミ講など営利法活動または販売を行うコンテンツ
                    <br />
                    <br />
                    （28）他人にアカウントを貸与し、または使用させる行為
                    <br />
                    （29）本規約に違反し、またはそのおそれのある行為
                    <br />
                    （30）公序良俗に反する行為
                    <br />
                    （31）その他、管理人がふさわしくないと判断する行為
                    <br />
                    <br />
                    第6条（当サービスの利用の制限）
                    <br />
                    上記第5条（禁止事項）に該当するような行為をする方から当サービスのお客様を守るために、当サービス上でお客様が他のお客様に24時間以内に送ることができるメッセージの数を、当社の判断で適切な数に制限する権利および当サービスに新たに会員登録しようとする者に対して、当該会員登録を拒否する権利を当社は留保します。
                    <br />
                    <br />
                    第7条（契約期間および契約の終了）
                    <br />
                    お客様が当サービスを利用され、または当サービスのお客様である限り、本契約は有効です。
                    <br />
                    <br />
                    第8条（当サービスの目的外利用等の禁止）
                    <br />
                    お客様が、当社のサービスやそれらを構成するデータを、当サービスの提供目的を超え利用規約に違反して利用した場合、当管理人は、それらの行為を差し止める権利ならびにそれらの行為によってお客様が得た利益相当額を請求する権利を有します。
                    <br />
                    <br />
                    第9条（投稿の削除、サービスの利用停止、アカウント削除について）
                    <br />
                    お客様が当サービスに投稿等をした内容および、当サービスを通してお客様が他のお客様に提供した内容については、お客様が単独で責任を負うものとし、管理人は一切責任を負いません。お客様が当サービスに関連して投稿等した場合はいつでも、その内容が正確であり、本契約に違反せず、かつあらゆる点で誰にも損害を生じさせるものでないことを。お客様は表明し、保証したことになります。
                    管理人は、当サービスを適正に運営するために、以下の場合にはあらかじめ通知することなく、お客様のメッセージその他のお客様が投稿等したコンテンツを削除したり、サービス提供の全部または一部の利用を一次的に停止したり、お客様のアカウントを削除する（本契約も終了します）など、当社が適切と判断する各措置を講じることができるとします。
                    ・アカウント削除等の措置をとる場合
                    <br />
                    （１）
                    お客様が本規約に定められている事項に違反した場合、またはそのおそれがあると当社が判断した場合
                    <br />
                    （２）
                    アカウントが反社会的勢力または構成員や関係者によって登録または使用された場合、もしくはそのおそれがあると当社が判断した場合
                    <br />
                    （３） 当サービス上に同時に複数のアカウントを作成したことが判明した場合
                    <br />
                    （４）
                    その他、お客様との信頼関係が失われた場合など、当社とお客様との契約関係が困難であると当社が判断した場合
                    <br />
                    <br />
                    <br />
                    第10条（管理人に対する補償）
                    <br />
                    お客様の行為が原因で生じたクレームなどに関連して当管理人に費用が発生した場合には、お客様は管理人が支払った費用や賠償金などを負担するものとします。
                    <br />
                    <br />
                    第11条（お客様のデータおよびコンテンツの取り扱い）
                    <br />
                    当サービスの保守や、改良などの必要が生じた場合には、管理人はお客様が管理人の管理するサーバーに保存しているデータおよびコンテンツを、管理人のサービスの保守や改良などに必要な範囲で、お客様の同意なくして複製、改良等することができるものとします。
                    また、お客様が投稿等をしたコンテンツについては、お客様または当該コンテンツの著作権者に著作権が帰属します。ただし、当該コンテンツについて、お客様は管理人に対して、日本の国内外で無償化つ、非独占的に利用（複製、上映、公衆送信、展示、譲渡、翻訳、本案、出版）する権利を期限なく許諾したものとみなします。
                    なお、お客様は当社または当社がサブライセンスをした第三者に対し、著作者人格権を行使しないものとします。
                    <br />
                    <br />
                    第12条（サービスの提供の中断）
                    <br />
                    当社は、以下のいずれかに該当する場合には、お客様に事前に通知することなく、当サービスの全部または一部の提供を中断することができます。なお、以下の事由により管理人が行った措置に基づきお客様に損害が生じても、当社は一切の責任を負いません。
                    <br />
                    <br />
                    （１）
                    当サービスに関わるネットワーク、システムまたはサーバー等の点検または保守作業を行う場合
                    <br />
                    （２） ネットワーク、システムまたはサーバー等が事故により停止した場合
                    <br />
                    （３）
                    地震、落雷、火災、風水害、停電、天災地変などの不可抗力により当サービスの運営ができなくなった場合
                    <br />
                    （４） その他、管理人が停止または中断を行う必要があると判断した場合
                    <br />
                    <br />
                    第13条（免責事項）
                    <br />
                    管理人の債務不履行および不法行為責任は、当社の故意または重過失によらない場合には免責されるものとします。
                    また、管理人は、当サービスがお客様の特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、お客様による当サービスの利用がお客様に適用のある法令に適合することおよび不具合が生じないことについて、なんら保証するものではありません。加えて、お客様やその他の個人または団体等が、当サービスを通じて投稿等する助言、意見、声明その他の情報について、当社はその正確さや信頼性を表明し保証するものではありません。これらの情報を信頼することについては、お客様の自己責任になることをあらかじめ同意するものとします。オフライン、オンラインに関わらず、当管理人は責任を負いません。当サービスを利用される際は、ご自身で十分注意してください。
                    <br />
                    <br />
                    第14条（利用規約の変更について）
                    <br />
                    当管理人が必要と判断した場合には、お客様にあらかじめ通知することなくいつでも本規約を変更することができるものとします。本規約変更の効力発生後に、お客様が当サービスを利用した場合または当管理人の定める事前告知期間内に退会申請の手続きを取らなかった場合には、お客様は変更後の本規約の内容に同意したものとみなします。
                    <br />
                    <br />
                    第15条（通知または連絡）
                    <br />
                    お客様が当管理人への連絡を希望される場合には、当サービスに設けた問い合わせページまたは、指定するメールアドレスで問い合わせていただくものとします。また、当社からお客様への通知に関しましては、当サービスのウェブサイト上での表示、電子メールの送信、ショートメールの送信その他当社が適当と判断する方法により行うものとします。なお、当社による通知は、Webサイト上に表示された時点、当社がお客様のメールアドレスに対して電子メールを発信した時点でその効力が生じるものとします。
                    <br />
                    <br />
                    第16条（権利義務などの譲渡の禁止）
                    <br />
                    お客様は、本規約に基づく全ての契約について、その契約上の地位およびこれにより生じる権利義務の全部または一部を、当社の書面による事前の承諾なく第三者に譲渡等の処分をし、引き受けさせ、または担保に供することはできません。
                    また、当社が当サービスに係る事業を他者に譲渡した場合には、当該事業譲渡に伴い本契約上の地位、本規約にもとづく権利および義務並びにお客様の登録事項その他顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、お客様は、かかる譲渡につき本項において予め同意するものとする。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むのとします。
                    <br />
                    <br />
                    第17条（知的財産権ポリシー）
                    <br />
                    お客様は、権利者から事前に同意を得なければ、知的財産権などによって保護された情報を、どのような形であっても投稿等をすることはできません。
                    他のお客様の投稿等が他人の知的財産権を侵害することをお客様が発見した場合は、お問い合わせフォームで以下の情報を提供してください。なお、知的財産権等の侵害以外の本規約違反の申告につきましては、こちらの手続きより申告してください。
                    <br />
                    <br />
                    ・知的財産権等の権利者（その代理人として行動することが認められた人を含み、以下「権利者」と総称します）のお名前等の情報
                    <br />
                    ・お客様と権利者との関係についての説明
                    <br />
                    ・知的財産等を侵害するとお客様が主張する投稿等についての説明
                    <br />
                    ・知的財産権等を侵害するとお客様が主張する投稿等が、当サービスのどこに表示されているのかについての説明。
                    <br />
                    ・知的財産等を侵害するとお客様が主張する投稿等が、当サービスのどこに表示されているのかについての説明。
                    <br />
                    ・お客様ご自身の住所、電話番号、メールアドレス。
                    <br />
                    ・知的財産権等を侵害するとお客様が主張する投稿等が、利用者から認められていないもの、または知的財産権等を侵害するものであるとお客様が考える理由。
                    <br />
                    <br />
                    第18条（お客様間の紛争）
                    <br />
                    お客様は、他の当サービスのお客様との交流について、単独で責任を負うものとします。当社は、お客様と他のお客様との間で起きた紛争を監視する権利を留保しますが、関与または監視等をする義務は負いません。
                    <br />
                    <br />
                    第19条（会員情報の取り扱い）
                    <br />
                    当サービスをご利用の場合には、プライバシーポリシーも適用されます。お客様は、このプライバシーポリシーに従って当管理人がお客様の利用者情報を取り扱うことについて同意するものとします。また、当管理人はお客様が当サービスに提供した情報、データ等を、個人を特定できない形で統計的な情報として、当社の裁量で利用および公開することができるものとし、お客様はこれに同意するものとします。
                    <br />
                    <br />
                    第20条（秘密保持）
                    <br />
                    お客様は、当サービスに関連して当社がお客様に対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による許諾がある場合を除き、秘密に取り扱うものとします。お客様は、当サービスの利用により知り得た他の利用者の個人情報を守秘する義務があります。
                    <br />
                    <br />
                    第21条（お客様からの申出による利用停止）
                    <br />
                    ご利用の携帯電話端末を紛失・盗難された場合その他必要がある場合、お客様は当管理人に申し出ることにより、所定の方法により本人確認書類の提出を条件として、当サービスの利用を停止することができます。ただし、当管理人は、お客様からの当該申出の有無に関わらず、当サービスの利用停止がされないことおよびお客様のアカウントを第三者が利用したこと等により、お客様に損害が生じた場合であっても、これについて一切の責任を負いません。また、ご自身の携帯電話端末を第３者の譲渡、売却された場合も同様に当社は一切の責任を負いません。
                    <br />
                    <br />
                    第22条（当サービスのご利用上の注意点）
                    <br />
                    当サービスは、を学習の促進、情報共有のパートナー探し提供するサービスですが、不特定多数の方がご利用になっているために場合によってはサービスが悪用されたり、あるいは適切なコミュニケーションが取れない方が利用されたりする可能性もあります。そういった可能性を十分後ご認識の上、当サービスのご利用に際して他人に対してどのような個人情報を開示するか、どのようなやりとりをするかについては、お客様自身で常に慎重にお考えいただいた上で当サービスをご利用ください。
                    <br />
                    <br />
                    第23条（本規約の効力について）
                    <br />
                    本規約のいずれかの規定またはその一部が、消費者契約法その他の法令により無効または執行不能と判断された場合であっても、本規約の他の規定および一部が無効または執行不能と判断された残りの部分については、継続して完全に効力を有するものとします。また、無効または執行不能と判断された規定もしくは部分についても、当該規定もしくは部分の趣向に最も近い有効な規定を、無効な規定もしくは部分と置き換えて適用し、または当該規定もしくは部分の趣向に最も近い有効な規定となるよう合理的な解釈を加えて適用します。
                    <br />
                    <br />
                    第24条（準拠法、裁判管轄）
                    <br />
                    本利用規約の成立、効力発生、解釈にあたっては日本法を準拠法とします。また、当サービス（掲載内容や広告などを含む）、ソフトウエアに起因または関連して当社とお客様との間で生じた紛争については東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
            </p>
        </div>
    );
};

export default ModalTerms;
