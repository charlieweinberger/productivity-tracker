import Link from "next/link";

export default function LinkButton({ location, text }: { location: string, text: string }) {
  return (
    <Link href={location} className="w-fit p-4 bg-blue-500 text-white rounded-lg">
      {text}
    </Link>
  );
}