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
  email: string;
}

export default function Request() {
  const [isRequest, setIsRequest] = useState(false); // TODO: API 요청으로 변경 필요
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleRequestSubmit: SubmitHandler<IRequestData> = (data) => {
    console.log(data);
    setIsRequest(true);
  };

  return (
    <div className="wrap_login">
      <div className="tit_login">
        <Image src={Logo} alt="Foard Logo" height={120} width={120} />
        <h1>비밀번호 초기화</h1>
      </div>
      <div className="wrap_login_form">
        <h2 className="screen_out">비밀번호 초기화 신청</h2>
        <div className="inner_login">
          {!isRequest ? (
            <form onSubmit={handleSubmit(handleRequestSubmit)}>
              <fieldset>
                <legend className="screen_out">비밀번호 초기화 입력 폼</legend>
                <div className="box_login">
                  <div className="group_form">
                    <label htmlFor="email">이메일</label>
                    <Input
                      id="email"
                      placeholder=""
                      libProps={register("email", validateRules.email)}
                      errorMsg={errors.email?.message}
                    />
                  </div>
                </div>
                <Button type="submit" color="primary" size="full">
                  비밀번호 초기화
                </Button>
              </fieldset>
            </form>
          ) : (
            <div className="box_complete">
              비밀번호 초기화 요청이 완료되었습니다. <br /> 이메일을
              확인해주세요.
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
