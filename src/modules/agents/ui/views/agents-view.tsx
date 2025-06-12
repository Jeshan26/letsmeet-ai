"use client"

// generally we define the
// errors state here only but as we have used the hydration boundries over the server side 
// ,so in that case there wont be error as it will always have the data so we will define the error under default next.js error boundry which is error.tsx page on server side.
// However this default error boundry thing has a demerit because it works on the folder level and if a single component needs 
// error showing we cannot do it so for that we can install react-error-boundr and use this by passing the error state compoent to fallback of it
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import {  useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () =>{
    const trpc = useTRPC();
    // const {data , isLoading, isError} = useQuery(trpc.agents.getMany.queryOptions());
    const {data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
    
    
    return(
        <div>
            {JSON.stringify(data,null,2)}
        </div>
    )
};

export const AgentsViewLoading = ()=>{
    return (
    <LoadingState 
        title="Loading agents"
        description="Ths may take up some moment"
    />
);    
};

export const AgentsViewError = ()=>{
    return (
    <ErrorState 
        title="Error Loading agents"
        description="Something went wrong"
    />
);    
};