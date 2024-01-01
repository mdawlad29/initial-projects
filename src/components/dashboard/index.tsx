import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between py-3 px-20 bg-cyan-600">
        <h1 className="text-2xl">Dashboard</h1>

        <ul className="flex items-center gap-4">
          <li>Willamson</li>
          <li>
            <Link href={""}>Login</Link>
          </li>
          <li>
            <Link href={""}>Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
