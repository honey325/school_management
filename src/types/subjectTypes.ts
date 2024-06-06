export type subjectResult = {
  id?: number;
  name?: String;
  class?: number;
  description?: String;
  created_at?: Date;
  updated_at?: Date;
};

export type subjectInsert = {
  id?: number;
  name: String;
  class: number;
  description: String;
};
