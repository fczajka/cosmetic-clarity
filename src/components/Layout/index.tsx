import { type LayoutProps } from "./interface";

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full h-full min-h-screen bg-slate-50">
      <header
        un-flex="~ center"
        className="w-full font-headline text-3xl bg-slate-200 p-4 lg:p-6"
      >
        Cosmetic Clarity
      </header>
      <div className="w-full mx-auto my-0 p-4 sm:w-28rem lg:px-0">
        {props.children}
      </div>
    </div>
  );
}
