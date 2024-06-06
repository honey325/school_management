import { string } from "joi";
import { isStringObject } from "util/types";

export interface examResult {
  id?: number;
  examName?: String;
  examDate?: Date;
  totalMarks?: number;
  createdAt?: Date;
  updatedAt?: Date;
  isDelete?: Boolean;
}
export interface examInsert {
  id?: number;
  examName: String;
  examDate: Date;
  totalMarks: number;
}
