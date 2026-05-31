import html from '../html/sections/Header.html?raw';

export default function Header() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
