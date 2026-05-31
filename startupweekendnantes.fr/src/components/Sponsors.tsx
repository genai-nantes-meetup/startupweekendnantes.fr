import html from '../html/sections/Sponsors.html?raw';

export default function Sponsors() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
