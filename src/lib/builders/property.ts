
import { Enum, MapExpr, ReduceExpr, AggregateDefinition, Lazy, Type, Index, Guid } from '../models/types';

import { PropertyDefinition } from '../models/property-definition';

export class Property {

  private _definition: PropertyDefinition;

  constructor(propDef?: PropertyDefinition) {
    this._definition = propDef || {};
  }

  public name(name: string): this {
    this._definition.name = name;
    return this;
  }

  public key(): this {
    this._definition.key = true;
    return this;
  }

  public ref(type: Type): this {
    this._definition.ref = type;
    return this;
  }

  public min(min: number): this {
    this._definition.min = min;
    return this;
  }

  public max(max: number): this {
    this._definition.max = max;
    return this;
  }

  public length(len: number): this {
    this._definition.length = len;
    return this;
  }

  public decimals(decimals: number): this {
    this._definition.decimals = decimals;
    return this;
  }

  public unique(unique = true): this {
    this._definition.unique = unique;
    return this;
  }

  public choices<T>(choices: Lazy<T[]>): this {
    this._definition.choices = choices;

    return this;
  }

  public type(type: Type, secondaryType?: Type): this {
    this._definition.type = type;
    if (secondaryType) {
      this._definition.secondaryType = secondaryType;
    }
    return this;
  }

  public array(itemType?: Type): this {
    return this.type(Array, itemType);
  }

  public guid(): this {
    return this.type(Guid);
  }

  public string(pattern?: string | RegExp): this {
    this.type(String);
    
    if (pattern) {
      // TODO: Convert wildcard string into regexp...
      this._definition.pattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    }
    
    return this;
  }


  public integer(): this;
  public integer(min: number, max: number): this;
  public integer(min: number = 0, max: number = Number.MAX_SAFE_INTEGER): this {

    return this
      .type(Number)
      .decimals(0)
      .min(min)
      .max(max);
  }

  public float(): this;
  public float(min: number, max: number): this;  
  public float(min: number = Number.MIN_VALUE, max: number = Number.MAX_VALUE): this {    
    return this
      .type(Number)
      .min(min)
      .max(max);
  }
  
  public build(): PropertyDefinition {
    return Object.assign({}, this._definition);
  }

}