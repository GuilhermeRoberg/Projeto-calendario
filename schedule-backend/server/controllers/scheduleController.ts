import { Request, Response, NextFunction } from 'express';
import * as scheduleService from '../services/scheduleService';
import { EventDTO } from '../dtos/eventDto';

export const getAllEvents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await scheduleService.getAllEvents();
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
}

export const addEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const event: EventDTO = {
      dateTime: req.body.dateTime,
      title: req.body.title,
      description: req.body.description,
    }
    const response = await scheduleService.addEvent(event);
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
}

export const updateEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const eventId = req.params.id;
    const event: EventDTO = {
      dateTime: req.body.dateTime,
      title: req.body.title,
      description: req.body.description,
      isActive: req.body.isActive,
      lastModified: new Date(),
    }
    const response = await scheduleService.updateEvent(eventId, event);
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
}

export const deleteEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const eventId = req.params.id;
    const response = await scheduleService.deleteEvent(eventId);
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
}

export const syncEvents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const events: EventDTO[] = req.body.events;
    const response = await scheduleService.syncEvents(events);
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
}