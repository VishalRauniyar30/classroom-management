import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'An introductory course covering the fundamental concepts of computer science and programming',
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: 'MATH202',
        name: 'Calculus II',
        department: 'Mathematics',
        description: 'Advance study of intergration, sequences, series, and power series',
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: 'ENG201R1',
        name: 'Literature and Composition',
        department: 'English',
        description: 'A course focused on critical reading and writing through the study of various literary genres',
        createdAt: new Date().toISOString()
    },
]