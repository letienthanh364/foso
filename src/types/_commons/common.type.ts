/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Pagination } from "../paging/paging.params.type";
import { InputFieldName } from "../input.type";
import { UserModel } from "../user/user.type";
import { IDType } from "./id.type";

export interface CustomImage {
  imgUrl: string;
  alt: string;
}

export interface ErrorRespone {
  statusCode: number;
  error: string | null;
  message: string | string[];
}

export interface PagingResponse<Data>
  extends SuccessReponse<Data>,
    Pagination {}

export interface SuccessReponse<Data> {
  message: string;
  data: Data;
  // statusCode: number;
  // message: string | string[];
}

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export interface NavigateItem {
  name: string;
  url: string;
}

export interface InputField {
  name: InputFieldName;
  title: string;
  placeHolder?: string;
  svgData?: ReactNode;
  type?: HTMLInputTypeAttribute | "array";
  errorMsg?: string;
  readonly?: boolean;
}

export interface DatabaseCommonFields {
  id: IDType;
  createdAt: string;
  updatedAt: string;
}

export interface DataRow {
  [key: string]: string | number | boolean | string[] | React.ReactNode;
}

export type SetupInstanceModel = UserModel;

export interface SetupInstanceUpdateBody {
  id: string;
  data: any;
}

export interface Translation {
  [key: string]: {
    [languageCode: string]: string; // This allows for multiple languages
  };
}
