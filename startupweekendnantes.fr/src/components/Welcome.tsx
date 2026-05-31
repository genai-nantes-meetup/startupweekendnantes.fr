import html from '../html/sections/Welcome.html?raw';

export default function Welcome() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
