import LinkButton from "./../../components/button";

export default function Dashboard() {
  return (
    <main className="h-screen flexContainer flex-col gap-4">
      <div className="p-4 blackBorder">
        Dashboard
      </div>
      <LinkButton location={"/"} text={"Go Home"} />
    </main>
  );
}
