export interface resultselect {
  stdId?: number;
  subId?: number;
  examId?: number;
  examdate?: Date;
  obtainedMarks?: number;
  createdAt?: Date;
  UpdatedAt?: Date;
  isDelete?: boolean;
}

export interface resultinsert {
  stdId: number;
  subId: number;
  examId: number;
  examdate: Date;
  obtainedMarks: number;
}
