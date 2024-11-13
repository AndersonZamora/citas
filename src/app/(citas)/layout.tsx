import { Footer, TopMenu } from "@/components";

export default function CitasLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className="md:px-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}