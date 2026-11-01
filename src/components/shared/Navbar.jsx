import { ArrowUpRight, ShoppingCartPlus } from "lucide-react";
import logo from "../../assets/images/batchbox-logo.png";
import Button from "../global/Button";

export default function Navbar() {
  return (
    <nav className="bg-white px-16 py-4 flex items-center justify-between">
      <div className="w-41">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <ul className="flex items-center gap-6 text-foreground">
        <li>
          <a href="#">Batches</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Membership</a>
        </li>
      </ul>
      <div className="flex items-center gap-5.5">
        <p className="p-2 border border-secondary rounded-full bg-background w-9.5 h-9.5 relative">
          <ShoppingCartPlus className="text-primary" />
          <p className="bg-secondary border border-border rounded-full w-3 h-3 text-[8px] text-center text-primary absolute left-6 -top-px">
            01
          </p>
        </p>
        <Button>Sign in</Button>
        <Button isBg>
          Sign up
          <ArrowUpRight className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
}
