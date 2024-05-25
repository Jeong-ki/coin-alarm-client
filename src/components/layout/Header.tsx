"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../button";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";
import Logo from "@/assets/images/logo.svg";

export default function Header() {
  const profileRef = useRef(null);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);

  const handleOpenProfile = () => {
    setIsOpenProfile((prev) => !prev);
  };

  useOutsideClick({
    ref: profileRef,
    isFocus: isOpenProfile,
    setIsFocus: setIsOpenProfile,
  });

  return (
    <header className="doc-header">
      <h1 className="doc-title">
        <Link href="/home" className="link_logo">
          <Image src={Logo} alt="Foard Logo" height={25} width={20} />
          Foard
        </Link>
      </h1>

      <Button type="button" color="black" size="medium">
        <Link href="/login">로그인</Link>
      </Button>

      {/* <div
        ref={profileRef}
        className={cn("info_my", { layer_open: isOpenProfile })}
      >
        <div className="profile_user">
          <strong className="screen_out">사용자 프로필</strong>
          <Button
            className="link_thumb"
            type="button"
            onClick={handleOpenProfile}
          >
            <div className="wrap_thumb">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                width={35}
                height={35}
                alt="사용자 이미지"
              />
            </div>
          </Button>
        </div>

        <div className="profile_layer">
          <div className="inner_layer">
            <div className="layer_body">
              <div className="info_profile">
                <strong className="screen_out">로그인 정보</strong>
                <div className="wrap_thumb">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                    width={35}
                    height={35}
                    alt="사용자 이미지"
                  />
                </div>
                <div className="info_thumb">
                  <strong className="tit_name">유저명</strong>
                  <span className="txt_id">이메일</span>
                </div>
              </div>
            </div>
            <div className="layer_foot">
              <button type="button" className="btn_txt">
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}
