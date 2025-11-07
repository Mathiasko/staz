import FactCard from "../components/card";

interface FactResponse {
  text?: string;
  source?: string;
}

export default async function About() {
  async function getFact(uniqueId = 1): Promise<FactResponse> {
    const res = await fetch(
      `https://uselessfacts.jsph.pl/api/v2/facts/random?t=${Date.now()}-${uniqueId*10}`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return (await res.json()) as FactResponse;
  }

  const facts = await Promise.all([getFact(), getFact(), getFact()]);
  return (
    <>
      <h1 className="text-5xl font-bold">About </h1>
      <p className="mt-4 max-w-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        reprehenderit eveniet odit laudantium ad illum consectetur fugiat harum
        laboriosam quibusdam. Possimus sequi dolore corporis velit, hic id
        mollitia deleniti harum!
      </p>
      {[0, 1, 2].map((item) => (
        <FactCard
          key={item}
          factText={facts[item]?.text ?? ""}
          author={facts[item]?.source ?? ""}
        />
      ))}
    </>
  );
}
