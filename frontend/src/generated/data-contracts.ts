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

export enum LengthType {
  Short = "short",
  Medium = "medium",
  Long = "long",
}

export enum Language {
  Ru = "ru",
  En = "en",
}

export interface Text {
  /** @example 123 */
  id?: string;
  /** @example "Some text example" */
  content?: string;
  language?: Language;
  lengthType?: LengthType;
}
