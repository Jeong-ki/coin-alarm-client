"use client";

import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import validateRules from "@/lib/react-hook-form";
import { useRouter } from "next/navigation";

interface ILoginData {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit: SubmitHandler<ILoginData> = (data) => {
    console.log(data);
    router.push("/home");
  };

  return (
    <div className="wrap_login">
      <div className="tit_login">
        <Image src={Logo} alt="Foard Logo" height={120} width={120} />
        <h1>로그인</h1>
      </div>
      <div className="wrap_login_form">
        <h2 className="screen_out">로그인</h2>
        <div className="inner_login">
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <fieldset>
              <legend className="screen_out">로그인 입력 폼</legend>
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
                <div className="group_form">
                  <div className="password_label">
                    <label htmlFor="password">비밀번호</label>
                    <Link href="/reset/request">
                      비밀번호를 잊어버리셨나요?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    libProps={register("password", validateRules.password)}
                    errorMsg={errors.password?.message}
                  />
                </div>
              </div>
              <Button type="submit" color="primary" size="full">
                로그인
              </Button>
            </fieldset>
          </form>
          <p className="desc_notice_login">
            계정이 없으신가요? <Link href="/join">회원가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
