export interface Field {
    key: string;
    type: string;
    title: string;
    required: boolean;
    validation?: {
      maxLength?: number;
      minLength?: number;
      pattern?: string;
    };
    hidden: boolean;
    default?: string | number | boolean | null;
  }
  
  export interface JSONSchema {
    fields: Field[];
  }
  
  export enum FieldType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
  }
  
  