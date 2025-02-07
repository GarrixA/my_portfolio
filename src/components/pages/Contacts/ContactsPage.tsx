import Link from "next/link";
import ContactForm from "./components/ContactForm";

const ContactsPage = () => {
  const myAddress = [
    { name: "Address", location: "Kn 136 st, Mumena, Nyarugenge" },
    { name: "Phone", location: "+250789438437" },
    { name: "Email", location: "aphrodisu2019@gmail.com" },
    {
      name: "Instagram",
      location: "aphrodis garrix",
      link: "https://www.instagram.com/aphrodisgarrix/",
    },
    {
      name: "Twitter",
      location: "aphrodis garrix",
      link: "http://twitter.com/AphrodisGarrix",
    },
    {
      name: "LinkedIn",
      location: "Aphrodis Uwineza",
      link: "https://www.linkedin.com/in/aphrodis-uwineza-961079281/",
    },
  ];
  return (
    <div
      className=" bg-foreground flex flex-col gap-4 lg:gap-8 px-[7%] lg:px-[10%] mx-auto py-10"
      id="contacts"
    >
      <h1 className="text-4xl lg:text-5xl font-bold text-center">
        Let&apos;s <b className="text-accent">Connect</b>
      </h1>
      <p className="lg:text-center text-base md:text-xl">
        You can Reach out to me anytime at my physical address or just contact
        me on my social media or phone I am available 24/7
      </p>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="w-full text-2xl flex flex-col gap-3 mt-4">
          {myAddress.map((addres, idx) => (
            <div key={idx} className="text-base md:text-lg lg:text-xl">
              {addres.link ? (
                <Link href={addres.link} target="_blank">
                  <h1 className="flex items-center gap-2">
                    <b className="text-accent">{addres.name}:</b>{" "}
                    {addres.location}
                  </h1>
                </Link>
              ) : (
                <h1 className=" gap-2">
                  <b className="text-accent">{addres.name}:</b>{" "}
                  {addres.location}
                </h1>
              )}
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactsPage;
