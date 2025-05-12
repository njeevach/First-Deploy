import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
    return (

        <Fragment>
            <Head>
                <meta name="description" content="Send me your message!" />
            </Head>
            <ContactForm />
        </Fragment>
    )
}
export default ContactPage;