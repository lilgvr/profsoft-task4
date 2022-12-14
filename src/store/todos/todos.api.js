import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constants";
import { fromResponseDto } from "../../utils/helpers";

const todosApiPOptions = {
    reducerPath: 'todos/api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
}

export const todosApi = createApi({
    ...todosApiPOptions,
    endpoints: build => ({
        getTodos: build.query({
            query: (limit = 10) => ({
                url: `/todos`,
                params: {
                    '_limit': limit,
                },
            }),
            transformResponse: (response) => fromResponseDto(response),
        }),
    }),
})

export const {
    useGetTodosQuery,
} = todosApi
