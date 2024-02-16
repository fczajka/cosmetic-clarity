import { type LayoutProps } from "./interface";

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full h-screen">
      <div un-flex="~ center" className="w-full p-4">
        Cosmetic Clarity
      </div>
      <div>{props.children}</div>
    </div>
  );
}
