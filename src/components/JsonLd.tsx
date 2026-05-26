import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps = {
  data: WithContext<Thing>;
};

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data),
    }}
  />
);
