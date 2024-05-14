export enum RegistrationStatus {
  Paid = 'Оплачено',
  PendingPayment = 'Ожидает оплаты',
  Registered = 'Зарегистрировано'
}

export interface Registration {
  id: number;
  eventId: number;
  clientName: string;
  email: string;
  ticketCount: number;
  status: RegistrationStatus;
}
