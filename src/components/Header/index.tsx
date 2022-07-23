import { Input } from "../forms/Input";

export function Header() {
  return (
    <header
      className="bg-gradient-to-r  h-[250px] 
    from-gradient-dark from-gradient-dark to-gradient-light"
    >
      <div className=" px-[270px] py-11 flex justify-between">
        <h1 className="text-2xl leading-7">CodeBlog</h1>

        <button className="text-2xl leading-7">blog</button>
      </div>

      <Input type="button" className="w-full h-9 bg-slate-50 opacity-80" />
    </header>
  );
}
