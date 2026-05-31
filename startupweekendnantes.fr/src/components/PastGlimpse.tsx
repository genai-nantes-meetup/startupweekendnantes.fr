import html from '../html/sections/PastGlimpse.html?raw';

export default function PastGlimpse() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
