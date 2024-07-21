'use client';

import Logo from '@/assets/images/logo.svg';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import validateRules from '@/lib/react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface IJoinData {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export default function Join() {
  const router = useRouter();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IJoinData>({
    defaultValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
  });

  // const { mutate: mutateSignUp } = useMutation({
  //   mutationFn: signUpUser,
  //   onSuccess: (res) => {
  //     const { result, errorMsg } = res.SignupUser;
  //     if (result) {
  //       router.push("/login");
  //     } else {
  //       const isDuplicated = errorMsg === "DUPLICATED_ID";
  //       // TODO: alert 추가
  //       // isDuplicated && error, focus email
  //       isDuplicated &&
  //         setError("email", {
  //           type: "duplicated",
  //           message: "이미 가입되어있는 이메일입니다.",
  //         });
  //     }
  //   },
  // });

  const handleJoinSubmit: SubmitHandler<IJoinData> = data => {
    const { email: userId, password, userName: name } = data;
    console.log(data);
  };

  return (
    <div className="wrap_login">
      <div className="tit_login">
        <Image src={Logo} alt="코인 알람 로고" height={120} width={120} />
        <h1>회원가입</h1>
      </div>
      <div className="wrap_login_form">
        <h2 className="screen_out">회원가입</h2>
        <div className="inner_login">
          <form onSubmit={handleSubmit(handleJoinSubmit)}>
            <fieldset>
              <legend className="screen_out">회원가입 입력 폼</legend>
              <div className="box_login">
                <div className="group_form">
                  <label htmlFor="email">이메일</label>
                  <Input
                    id="email"
                    placeholder=""
                    libProps={register('email', validateRules.email)}
                    errorMsg={errors.email?.message}
                  />
                </div>
                <div className="group_form">
                  <label htmlFor="userName">닉네임</label>
                  <Input
                    id="userName"
                    placeholder=""
                    libProps={register('userName', validateRules.required)}
                    errorMsg={errors.userName?.message}
                  />
                </div>
                <div className="group_form">
                  <label htmlFor="password">비밀번호</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    libProps={register('password', validateRules.password)}
                    errorMsg={errors.password?.message}
                  />
                </div>
                <div className="group_form">
                  <label htmlFor="confirmPassword">비밀번호 확인</label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder=""
                    libProps={register(
                      'confirmPassword',
                      validateRules.confirmPassword(watch('password'))
                    )}
                    errorMsg={errors.confirmPassword?.message}
                  />
                </div>
              </div>
              <Button type="submit" color="primary" size="full">
                회원가입
              </Button>
            </fieldset>
          </form>
          <p className="desc_notice_login">
            이미 계정이 있으신가요? <Link href="/login">로그인하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
