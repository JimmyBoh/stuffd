import { StoredEnum } from './stored-enum';

export type Lookup<T=any> = { [key: string]: T };

export const GuidType = Symbol('jimmyboh:stuffd:guid');
export type GuidType = typeof GuidType;

export type Constructor<T=any> = { new(): T; };
export type GeneratedConstructor<T=any> = Constructor<T> & { new(props: Lookup): T; };
export type GeneratedArray<T=any> = Array<T>;
export type TypeReference<T=any> = Constructor<T> | StoredEnum | GuidType;

export type Chance = Chance.Chance;

export interface GenerationDefaults {
  minInteger: number;
  maxInteger: number;
  minFloat: number;
  maxFloat: number;
  maxFloatDecimals: number;
  minStringLength: number;
  maxStringLength: number;
  minArrayLength: number;
  maxArrayLength: number;
  minDate: Date;
  maxDate: Date;
}

export interface TaskArguments {
  _: string[];
  [name: string]: any;
}

export interface TaskOptions {
  seed?: number;
  args?: TaskArguments;
}