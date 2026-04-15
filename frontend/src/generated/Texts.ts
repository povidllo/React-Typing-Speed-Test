/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Language, LengthType, Text } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Texts<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Projects
   * @name TextsList
   * @summary Получить текст
   * @request GET:/texts
   */
  textsList = (
    query: {
      language: Language;
      lengthType: LengthType;
    },
    params: RequestParams = {},
  ) =>
    this.request<Text, any>({
      path: `/texts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
