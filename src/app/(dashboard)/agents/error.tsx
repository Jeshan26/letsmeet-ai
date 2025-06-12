"use client";

import { ErrorState } from "@/components/error-state";

const ErrorPage= ()=> {
    return(
        <ErrorState 
            title="Error loading agents"
            description="Something went Wrong"
        />
    );
};

export default ErrorPage;