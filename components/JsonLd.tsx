/**
 * Renders a JSON-LD structured-data block. `<` is escaped so user-supplied
 * strings (portfolio bios, project titles) can't break out of the script tag.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
