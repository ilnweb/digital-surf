import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary mt-3">
        Go to Homepage
      </Link>
    </div>
  );
}
