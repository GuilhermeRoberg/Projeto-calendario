import { ResponseDTO } from '../dtos/responseDto';
import * as scheduleData from '../data/scheduleData';
import { Event } from '@prisma/client'

export const getAllEvents = async () => {
  try {
    const response = await scheduleData.getAllEvents();
    return new ResponseDTO('Success', 200, 'Events retrieved', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
}

export const addEvent = async (event: any) => {
  try {
    const response = await scheduleData.addEvent(event);
    return new ResponseDTO('Success', 201, 'Event added', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
}

export const updateEvent = async (eventId: string, updatedEvent: any) => {
  try {
    const response = await scheduleData.updateEvent(eventId, updatedEvent);
    return new ResponseDTO('Success', 200, 'Event updated', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error updating event', e.stack);
  }
}

export const deleteEvent = async (eventId: string) => {
  try {
    const response = await scheduleData.deleteEvent(eventId);
    return new ResponseDTO('Success', 200, 'Event deleted', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error deleting event', e.stack);
  }
}

export const syncEvents = async (events: any[]) => {
  try {
    const response = await scheduleData.syncEvents(events);
    return new ResponseDTO('Success', 200, 'Events synchronized', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error synchronizing events', e.stack);
  }
}