export class EventDTO {
  id?: string;
  dateTime: Date;
  title: string;
  description?: string;
  lastModified?: Date;
  isActive?: boolean;

  constructor(
    id: string,
    dateTime: Date,
    title: string,
    lastModified?: Date,
    isActive: boolean = true,
    description?: string,
  ) {
    this.id = id;
    this.dateTime = dateTime;
    this.title = title;
    this.description = description;
    this.lastModified = lastModified;
    this.isActive = isActive;
  }
}