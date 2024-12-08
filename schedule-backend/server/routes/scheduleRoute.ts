import express from 'express';
import { getAllEvents, addEvent, updateEvent, deleteEvent, syncEvents } from '../controllers/scheduleController';

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', addEvent);
router.post('/:id', updateEvent);
router.delete('/:id', deleteEvent);
// router.post('/sync', syncEvents);

export default router;
