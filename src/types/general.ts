import { FieldPacket, RowDataPacket } from "mysql2";

export interface StringObject {
  [index: string]: String;
}

export interface StringNumObject {
  [index: string | number]: String | number|boolean;
}

export type RowData = [rows: RowDataPacket[], fields: FieldPacket[]];
