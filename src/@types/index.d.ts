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
declare type StudyTag = 'LANGUAGE' | 'IT' | 'NATIONAL_EXAM' | 'CERTIFICATE' | 'ENTANCE_EXAM' | 'EMPLOYMENT' | 'OTHER';

// Study Room Object
declare interface StudyRoomOverview {
  id: number;
  title: string;
  studyRanking: number;
  userRankingInStudy: number;
  studyTimeInSecond: number;
  tag: StudyTag;
  isLeader: boolean;
}

// Days Code & Name
declare type DayCode = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
declare type DayName = '월' | '화' | '수' | '목' | '금' | '토' | '일';

// Study Schedule Alarm time
declare interface ScheduleTime {
  readonly dayCode: DayCode;
  readonly dayName: DayName;
  isActive: boolean;
  isAmPm: 'AM' | 'PM';
  atHour: string;
  atMinute: string;
}
