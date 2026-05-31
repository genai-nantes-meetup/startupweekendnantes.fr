import html from '../html/sections/FAQ.html?raw';

export default function FAQ() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
