import Task from './Task';

export default {
    component: Task,
    title: 'TaskVisualTesting',
};

export const InboxTask = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
            updatedAt: new Date(2023, 0, 1, 9, 0),
            boardName: 'On Test Board',
        },
    },
};

export const SnoozedTask = {
    args: {
        task: {
            // Shaping the stories through args composition.
            ...InboxTask.args.task,
            state: 'TASK_SNOOZED',
        },
    },
};

export const PinnedTask = {
    args: {
        task: {
            // Shaping the stories through args composition.
            ...InboxTask.args.task,
            state: 'TASK_PINNED',
        },
    },
};