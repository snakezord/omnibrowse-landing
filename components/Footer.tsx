export default function Footer() {
  return (
    <footer className="mt-8 sm:mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <hr className="my-2 text-muted-foreground sm:mx-auto " />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://twitter.com/roman_zhydyk"
            className="hover:underline"
          >
            Built by Roman Zhydyk
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
