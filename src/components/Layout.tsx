import Name from "./Name";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container">
        <Name />
        {children}
      </div>
    </>
  );
}
