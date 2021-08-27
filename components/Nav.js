import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  //   const t = locale === "en" ? en : hi;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            name='locale'
            id='language-select'
          >
            <option value='en'>EN</option>
            <option value='hi'>Hi</option>
          </select>
        </li>
      </ul>
    </div>
  );
}
