export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-xs">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}