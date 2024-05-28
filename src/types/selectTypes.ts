export type userResult = {
  id?: number;
  role_id?: number;
  fname?: String;
  lname?: String;
  email?: String;
  dob?: Date|null;
  created_at?: Date;
  updated_at?: Date;
};
export type userinsert = {
  id?: number;
  role_id: number;
  fname: String;
  lname: String;
  email: String;
  dob?: Date;
};
export type courseResult = {
  id: number;
  name: String;
  desciption: String;
  created_at: Date;
  updated_at: Date;
};
