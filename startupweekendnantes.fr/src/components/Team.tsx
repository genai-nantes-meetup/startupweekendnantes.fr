import html from '../html/sections/Team.html?raw';

export default function Team() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
