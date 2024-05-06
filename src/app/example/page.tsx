"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { InputSearch } from "@/components/input/search";
import validateRules from "@/lib/react-hook-form";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";

interface ExampleFormValue {
  [key: string]: any;
}

export default function Example() {
  const [text, setText] = useState("");
  const {
    watch,
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleFormValue>({
    defaultValues: { test: "", testNum: null, testSearch: "" },
  });

  const handleChange = (value: any) => {
    setText(value);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleSubmit(
      (data) => console.log(data),
      (err) => console.log(err)
    )(e);
  };

  return (
    <div>
      <Button
        type="button"
        color="white_line"
        size="medium"
        onClick={() => {
          console.log(getValues());
          console.log(errors);
        }}
      >
        Test
      </Button>
      <br />
      <br />
      <br />
      <Input
        formSize="large"
        value={text}
        onChange={handleChange}
        placeholder="test"
      />
      <form onSubmit={onSubmit}>
        <Input
          formSize="large"
          libProps={register("test", validateRules.required)}
          errorMsg={errors.test?.message}
          isError={!!errors.testNum?.message}
        />
        <Input
          type="number"
          formSize="large"
          libProps={register("testNum", validateRules.requiredNum)}
          isError={!!errors.testNum?.message}
        />
        <InputSearch
          formSize="large"
          value={watch("testSearch")}
          setValue={setValue}
          libProps={register("testSearch", validateRules.required)}
          errorMsg={errors.testSearch?.message}
          isError={!!errors.testSearch?.message}
        />
        <Button type="submit" color="primary" size="medium">
          Test
        </Button>
      </form>
    </div>
  );
}
