import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.css";

const mentList = [
  `🌺기존 15만원상당의서비스🌺
 💗편백수액원액 기계분사💗
당일예약시 살균소독및 새집&헌집증후군에 탁월한 편백수원액을 집안전체에 도포해드립니다
🔅타업체 처럼물타서쓰는 피톤치드와 차원이다르십니다!!✔️
(집안전체살균소독<현관문부터집안전체>)
🌈24시간안 예약시 서비스드립니다🌈`,

  `하청주는업체에서는
저희같은금액에청소받으실수없으세요^^
직영점에서만가능합니다

운영되고있어 이금액에 가능하세요!!
하청업체는 수수료 제외한 금액으로 서비스를 해야하니 과도한 추가금이 나올수 있습니다 😅`,

  `🌈5성급 호텔에서 10년이상 청소직으로 근무하다 이사때 입주청소받아보고..이건 아니다싶어서 호텔에서 근무하던 동기3명과 💕청소해유💕란 이름으로 청소업체 차렸습니다!
경력만 17년넘는 베테랑중의 베테랑!
호텔의결벽증을 정석을 확실히보여드려요
(위생과 청결 최고의퀄리티! 최저가격)
전문교육받으신 3년넘는베태랑팀장님들투입합니다 
❤️대표님도 현장투입❤️
❗️직영팀만투입❗️약속합니다`,

  `대표홈페이지
https://cheongsohaeu.co.kr/
대표블로그
https://blog.naver.com/PostList.nhn?blogId=wjdtngusdlek45&from=postList&categoryNo=6`,

  `저희 💥ㅁ청소해유💥는 처음부터오픈견적내어드립니다~청소날 갑작스런추가로기분나쁘실수있기에 너무적은견적에 현혹되지마세요ㅜ 현장에서 어떤이유로든 추가금발생시키십니당
추가부합사항없다면 추가금일절없고 추가금거절도가능하십니다`,

  `100% 외주/하청없는 직영팀만 만들어낼수있는 합리적인 금액으로 고객님들을 기만하지않으며
👶우리 아이가 살집, 👩‍❤‍👨 내 가족이 살집, 내 새출발을 시작할곳이라 생각하며 놓치는곳없이 꼼꼼히 작업에 임하겠습니다.`,

  `👨‍👩‍👦‍👦독일친환경 세제 ❗️키엘제품❗️사용👨‍👩‍👦‍👦
코베트ㅡ 타일.유리세정.바닥청소
비녹신ㅡ금속표면세정및표면보호
사니칼ㅡ화장실.욕실세정
그라셋ㅡ각종기름때(동물성)
엑손포르테ㅡ주방후드.화구.바닥.벽오염제거`,

  `💥꼭확인하세요!타업체사용제품이 신생아와 반려동물에안전한제품인지!!💥
바로입주가능한 친환경세제만 사용합니다❤️`,

  `🍀상위1프로5.0만점 청소해유🍀
🌈2천개넘는리뷰중 클레임성리뷰 단한개도없는 업체`,

  `🌈8천건넘는 작업을통한 팀장님의 노하우와 기술로 퀄리티있는청소하는 업체
🌈17년이상된 대표님과 최소5년이상되신팀장님들로 꾸려져있는 업체`,

  `리뷰비교해보실때
‼️ 별점낮은순‼️으로꼭꼭비교해주세요🥰
저희는클레임성리뷰단한개도없는 2천개넘는리뷰가증명합니다~1점많은업체는 걸러주세요💥 사후서비스안되거나  하청쓰는업체입니다`
];

function App() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-end">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {mentList.map((ment, index) => (
          <CopyToClipboard key={index} text={ment} onCopy={() => handleCopy(index)}>
            <div
              className={`w-60 h-60 overflow-hidden cursor-pointer rounded-2xl p-4 shadow-md text-sm whitespace-pre-wrap transition-all duration-200 ${
                copiedIndex === index ? "bg-green-200" : "bg-white hover:bg-blue-100"
              }`}
              title="클릭하면 복사됩니다"
            >
              {ment}
            </div>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
}

export default App;
