import { Subjects } from './subjects';

export interface PostUpdatedEvent {
  subject: Subjects.PostUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    imgUrl: string;
    userId: string;
  };
}
