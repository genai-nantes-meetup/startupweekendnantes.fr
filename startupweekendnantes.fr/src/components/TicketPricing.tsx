import html from '../html/sections/TicketPricing.html?raw';

export default function TicketPricing() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
