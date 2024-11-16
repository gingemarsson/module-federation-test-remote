import React from "react";
import "tailwindcss/tailwind.css";
import useSwr from 'swr';
import { fetcher } from "../lib";

type Props = {
    apiUrl?: string
};

export const App = ({
    apiUrl = ''
}: Props) => {
    const { data } = useSwr(apiUrl + '/api/data', fetcher);
    return (
        <div className="max-w-7xl w-full">
            <div className="bg-white shadow-md rounded px-6 pt-4 pb-6 mb-4 w-full text-black">Hello, app! <p className="font-mono text-xs">API Response: {JSON.stringify(data)}</p></div>
        </div>
    )
}