import { Medal } from 'lucide-react';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="content-landing">
      <div className="inner-content">
        <div className="badge">
          <Medal className="medal" />
          Intelligent Asset Management
        </div>
        <h1>코인 알람</h1>
        <div className="gradient-text">Coin Alarm</div>
      </div>
      <div className="description">코인알람 설명</div>
      <button className="btn btn_medium landing-btn" type="button">
        <Link href="/login">코인알람 시작하기</Link>
      </button>
    </div>
  );
}
