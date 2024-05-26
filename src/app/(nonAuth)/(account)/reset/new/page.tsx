"use client";

import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import validateRules from "@/lib/react-hook-form";
import { useState } from "react";

interface IRequestData {
  newPassword: string;
  confirmNewPassword: string;
}

// TODO: 이메일 링크 외 경로로 접근시 홈으로 이동
export default function New() {
  const [isComplete, setIsComplete] = useState(false); // TODO: API 요청으로 변경 필요
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleRequestSubmit: SubmitHandler<IRequestData> = (data) => {
    console.log(data);
    setIsComplete(true);
  };

  return (
    <div className="wrap_login">
      <div className="tit_login">
        <Image src={Logo} alt="Foard Logo" height={120} width={120} />
        <h1>새 비밀번호 설정</h1>
      </div>
      <div className="wrap_login_form">
        <h2 className="screen_out">새 비밀번호 설정</h2>
        <div className="inner_login">
          {!isComplete ? (
            <form onSubmit={handleSubmit(handleRequestSubmit)}>
              <fieldset>
                <legend className="screen_out">비밀번호 초기화 입력 폼</legend>
                <div className="box_login">
                  <div className="group_form">
                    <label htmlFor="password">새 비밀번호</label>
                    <Input
                      id="password"
                      type="password"
                      placeholder=""
                      libProps={register("newPassword", validateRules.password)}
                      errorMsg={errors.newPassword?.message}
                    />
                  </div>
                  <div className="group_form">
                    <label htmlFor="confirmPassword">새 비밀번호 확인</label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder=""
                      libProps={register(
                        "confirmNewPassword",
                        validateRules.confirmPassword(watch("newPassword"))
                      )}
                      errorMsg={errors.confirmNewPassword?.message}
                    />
                  </div>
                </div>
                <Button type="submit" color="primary" size="full">
                  확인
                </Button>
              </fieldset>
            </form>
          ) : (
            <div className="box_complete">
              새 비밀번호 설정이 완료되었습니다.
            </div>
          )}
          <p className="desc_notice_login">
            <Link href="/login">로그인하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
