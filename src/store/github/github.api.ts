import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  IUser, ServerResponse } from "../../models/models";

export const gitHubApi = createApi({
    reducerPath: "gitApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: (build) => ({
        searchUser: build.query<IUser[], string>({
            query: (search: string) => ({
                url: "search/users",
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (res: ServerResponse<IUser>) => res.items 
        }),
        getUserRepos: build.query<any, string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })
    })
})

export const { useSearchUserQuery, useLazySearchUserQuery} = gitHubApi