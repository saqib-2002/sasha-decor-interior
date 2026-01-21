import ContactHeader from "@/src/components/contact/ContactHeader";
import ContactInfo from "@/src/components/contact/ContactInfo";
import ContactForm from "@/src/components/contact/ContactForm";
import ContactMap from "@/src/components/contact/ContactMap";

export default function ContactPage(): JSX.Element {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ContactHeader />

        <div className="grid gap-12 lg:grid-cols-3">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </section>
  );
}
