export enum AEventStatus {
DRAFT,
PUBLISHED,
CANCELLED
}

export class event {
  public title: string;
  public status: AEventStatus;
  public start: Date;
  public IsTicketed: Boolean;
  public end: Date;
  public participationFee: number;
  public description: string;
  public maxParticipants: number;

 constructor(title: string, status: AEventStatus, start: Date, IsTicketed: Boolean,end: Date, participationFee: number, description: string, maxParticipants: number) {
 this.title = title;
 this.status = status;
 this.start = start;
 this.IsTicketed = IsTicketed;
 this.end = end;
 this.participationFee = participationFee;
 this.description = description;
 this.maxParticipants = maxParticipants;
 }
}
