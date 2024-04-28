import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Fake CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://github.com/merfdev" target="_blank" rel="noreferrer">
          MerfDev
        </a>{" "}
        Nextjs project | Fake CRM &copy
      </footer>
    </>
  );
}

export default Layout;
