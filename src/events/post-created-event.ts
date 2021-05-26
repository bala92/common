import { Subjects } from './subjects';

export interface PostCreatedEvent {
  subject: Subjects.PostCreated;
  data: {
    id: string;
    version: number;
    title: string;
    imgUrl: string;
    userId: string;
  };
}
