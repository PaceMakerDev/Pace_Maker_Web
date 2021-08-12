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

// Study Room Category
declare type StudyCategory = 'LANGUAGE' | 'IT' | 'NATIONAL_EXAM' | 'CERTIFICATE' | 'ENTANCE_EXAM' | 'EMPLOYMENT' | 'OTHER';

// Study Room Object
declare interface StudyRoomOverview {
  id: number;
  title: string;
  studyRanking: number;
  userRankingInStudy: number;
  studyTimeInSecond: number;
  category: StudyCategory;
  isLeader: boolean;
}
