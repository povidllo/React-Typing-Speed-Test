import { components, paths } from "@/shared/generated/types";
import { Request } from "express";

export type AuthBodyType = components["schemas"]["AuthBody"];
export type AuthResponseType = components["schemas"]["AuthResponse"];
export type UserType = components["schemas"]["User"];

export type PostRegisterResponses =
  paths["/auth/registration"]["post"]["responses"];
export type PostRegister201Response =
  PostRegisterResponses["201"]["content"]["application/json"];
export type PostRegister404Response =
  PostRegisterResponses["400"]["content"]["application/json"];
export type PostRegister409Response =
  PostRegisterResponses["409"]["content"]["application/json"];
export type PostRegisterResponsesType =
  | PostRegister201Response
  | PostRegister409Response
  | PostRegister404Response;

export type PostLoginResponses = paths["/auth/login"]["post"]["responses"];
export type PostLogin200Response =
  PostLoginResponses["200"]["content"]["application/json"];
export type PostLogin400Response =
  PostLoginResponses["400"]["content"]["application/json"];
export type PostLogin401Response =
  PostLoginResponses["401"]["content"]["application/json"];
export type PostLoginResponsesType =
  | PostLogin200Response
  | PostLogin400Response
  | PostLogin401Response;

export type GetMeResponses = paths["/auth/me"]["get"]["responses"];
export type GetMe200Response =
  GetMeResponses["200"]["content"]["application/json"];
export type GetMe401Response =
  GetMeResponses["401"]["content"]["application/json"];
export type GetMeResponsesType = GetMe200Response | GetMe401Response;

export type UserPublicDB = {
  userId: string;
  userLogin: string;
};

export type UserAuthDB = UserPublicDB & {
  passwordHash: string;
};

export type AuthRequest = Request & {
  user?: UserPublicDB;
};
