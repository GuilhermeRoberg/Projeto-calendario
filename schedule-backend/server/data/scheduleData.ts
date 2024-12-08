import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllEvents = async () => {
  return await prisma.event.findMany();
};

export const addEvent = async (event: any) => {
  return await prisma.event.create({
    data: event,
  });
};

export const updateEvent = async (eventId: string, updatedEvent: any) => {
  return await prisma.event.update({
    where: { id: eventId },
    data: updatedEvent,
  });
};

export const deleteEvent = async (eventId: string) => {
  return await prisma.event.delete({
    where: { id: eventId },
  });
};

export const syncEvents = async (events: any[]) => {
  const transaction = events.map(event => 
    prisma.event.upsert({
      where: { id: event.id },
      update: event,
      create: event,
    })
  );
  return await prisma.$transaction(transaction);
};