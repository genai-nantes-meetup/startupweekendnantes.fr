import html from '../html/sections/SponsorsFooter.html?raw';

export default function SponsorsFooter() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
