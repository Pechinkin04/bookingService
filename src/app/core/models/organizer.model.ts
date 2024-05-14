export interface Organizer {
    id: number;
    name: string;
    contact: string;
    events: number[]; // массив идентификаторов мероприятий, организованных этим организатором
  }
  