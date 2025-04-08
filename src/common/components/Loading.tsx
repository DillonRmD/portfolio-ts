import {LoaderCircle} from "lucide-react";

export default function Loading() {
    return (
        <div
            className="bg-[#fef6e4] min-h-screen flex flex-col items-center justify-between text-[#272343] font-sans px-4 py-8">
            <div className="flex flex-col items-center justify-center flex-grow">
                <LoaderCircle className="animate-spin text-[#90e0ef] w-16 h-16 mb-4" />
                <p className="text-xl font-semibold text-[#00897b]">Loading...</p>
            </div>
        </div>
    );
}