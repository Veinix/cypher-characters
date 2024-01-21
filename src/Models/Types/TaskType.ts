
export type Task = {
    taskDifficulty: number,
    taskDescription: string,
    taskTargetNumber: number,
    taskGuidance: string,
}

export const taskDifficultyList: Task[] = [
    {
        taskDifficulty: 0,
        taskDescription: "Routine",
        taskTargetNumber: 0,
        taskGuidance: "Anyone can do this basically every time."
    },
    {
        taskDifficulty: 1,
        taskDescription: "Simple",
        taskTargetNumber: 3,
        taskGuidance: "Most people can do this most of the time."
    },
    {
        taskDifficulty: 2,
        taskDescription: "Standard",
        taskTargetNumber: 6,
        taskGuidance: "Typical task requiring focus, but most people can usually do this."
    },
    {
        taskDifficulty: 3,
        taskDescription: "Demanding",
        taskTargetNumber: 9,
        taskGuidance: "Requires full attention; most people have a 50/50 chance to succeed."
    },
    {
        taskDifficulty: 4,
        taskDescription: "Difficult",
        taskTargetNumber: 12,
        taskGuidance: "Trained people have a 50/50 chance to succeed."
    },
    {
        taskDifficulty: 5,
        taskDescription: "Challenging",
        taskTargetNumber: 15,
        taskGuidance: "Even trained people often fail."
    },
    {
        taskDifficulty: 6,
        taskDescription: "Intimidating",
        taskTargetNumber: 18,
        taskGuidance: "Normal people almost never succeed."
    },
    {
        taskDifficulty: 7,
        taskDescription: "Formidable",
        taskTargetNumber: 21,
        taskGuidance: "Anyone can do this basically every time"
    },
    {
        taskDifficulty: 8,
        taskDescription: "Heroic",
        taskTargetNumber: 24,
        taskGuidance: "Impossible without skills or great effort."
    },
    {
        taskDifficulty: 9,
        taskDescription: "Immortal",
        taskTargetNumber: 27,
        taskGuidance: "A task worthy of legends that last lifetimes."
    },
    {
        taskDifficulty: 10,
        taskDescription: "Impossible",
        taskTargetNumber: 30,
        taskGuidance: "A task that normal humans couldn’t consider (but one that doesn’t break the laws of physics)."
    }
]