// User information structure
declare interface User {
  email: string;
  name: string;
  major: string;
  studentId: string;
  birthday: string;
  academicStatus: string;
}

// For selecting major on join
declare interface College {
  category: string;
  majors: Array<string>;
}