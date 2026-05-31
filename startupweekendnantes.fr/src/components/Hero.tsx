import html from '../html/sections/Hero.html?raw';

export default function Hero() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
