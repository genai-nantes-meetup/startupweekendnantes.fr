import html from '../html/sections/Contact.html?raw';

export default function Contact() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
