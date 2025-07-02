export default function LoadingSkeleton() {
  return (
    <div className="p-4 space-y-4">
      <div className="w-[60%] h-4 bg-gray-200 animate-pulse rounded" />
      <div className="w-[70%] h-4 bg-gray-200 animate-pulse rounded" />
      <div className="w-[80%] h-4 bg-gray-200 animate-pulse rounded" />
      <div className="w-[100%] h-4 bg-gray-200 animate-pulse rounded" />
    </div>
  );
}
