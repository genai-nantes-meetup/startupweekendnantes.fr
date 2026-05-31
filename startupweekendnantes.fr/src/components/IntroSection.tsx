import html from '../html/sections/IntroSection.html?raw';

export default function IntroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
