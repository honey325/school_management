export interface attResult {
  id?: number;
  stdId?: number;
  attDate?: Date;
  present?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isDelete?: boolean;
}
export interface attInsert {
  id?: number;
  stdId: number;
  attDate: Date;
  present: boolean;
}