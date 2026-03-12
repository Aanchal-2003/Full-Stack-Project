export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
                <p className="text-gray-600 text-sm">Loading...</p>
            </div>
        </div>
    );
}
