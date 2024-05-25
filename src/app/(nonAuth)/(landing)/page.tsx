import { Medal } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="content-landing">
      <div className="inner-content">
        <div className="badge">
          <Medal className="medal" />
          Intelligent Asset Management
        </div>
        <h1>자산관리 가계부 포드</h1>
        <div className="gradient-text">Work Foard</div>
      </div>
      <div className="description">
        간편하고 자유로운 가계부 작성, 엑셀 연동, 차트 분석 등 개인 맞춤형
        자산관리 서비스를 제공합니다. 포드와 함께 나만의 가계부를 만들어 자산을
        관리해보세요.
      </div>
      <button className="btn btn_medium landing-btn" type="button">
        <Link href="/login">포드 시작하기</Link>
      </button>
    </div>
  );
}
