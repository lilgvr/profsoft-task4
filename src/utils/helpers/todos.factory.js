import { TODO_STATUS_TYPES } from "../constants";

export const fromResponseDto = dto => dto.map(
    todo => ({
        id: todo.id,
        title: todo.title,
        status: TODO_STATUS_TYPES.todo,
    }),
);
