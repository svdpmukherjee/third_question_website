function Footer() {
  return (
    <>
      <div className="py-2 ">
        <nav className="block">
          <ul className="flex pb-10 rounded list-none flex-wrap space-x-4 justify-center">
            <li>
              <a
                href="#"
                className="first:ml-0 text-xs font-semibold flex w-10 h-10 mx-1 p-0 rounded items-center justify-center leading-tight relative border border-solid  text-white bg-blue-400"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="first:ml-0 text-xs font-semibold flex w-10 h-10 mx-1 p-0 items-center justify-center leading-tight relative border border-solid  bg-white "
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="first:ml-0 text-xs font-semibold flex w-10 h-10 mx-1 p-0  items-center justify-center leading-tight relative border border-solid bg-white "
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="first:ml-0 text-xs font-semibold flex w-10 h-10 mx-1 p-0  items-center justify-center leading-tight relative border border-solid  bg-white "
              >
                4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Footer;
