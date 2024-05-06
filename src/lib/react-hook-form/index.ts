import { getCleanedNum } from "@/utils";

const valueAsNumber = {
  setValueAs: (value: string | number): number | null => {
    const cleaned = getCleanedNum(value);
    return cleaned ? +cleaned : null;
  },
};

const validateRules = {
  valueAsNumber,
  required: {
    required: {
      value: true,
      message: "필수값을 입력해주세요.",
    },
  },
  requiredNum: {
    required: {
      value: true,
      message: "필수값을 입력해주세요.",
    },
    ...valueAsNumber,
  },
  email: {
    required: {
      value: true,
      message: "이메일을 입력해주세요.",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "올바른 이메일 형식으로 입력해주세요.",
    },
  },
  userName: {
    required: {
      value: true,
      message: "유저명을 입력해주세요.",
    },
  },
  password: {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, // TODO: 정의 필요
      message: "8~16자의 영문, 숫자, 특수문자만 가능합니다.",
    },
  },
};

export default validateRules;
