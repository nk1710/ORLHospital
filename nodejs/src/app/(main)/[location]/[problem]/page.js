import { notFound } from "next/navigation";
import {
  getAllValidPaths,
  buildMetadata,
  buildH1,
  buildLocalBusinessSchema,
  buildMedicalConditionSchema,
  buildFAQSchema,
  getFAQs,
  getInternalLinks,
  getIntroVariant,
  getLocation,
  getProblem,
  validatePath,
} from "@/lib/seo-utils";
import ProgrammaticPage from "@/components/seo/ProgrammaticPage";

export async function generateStaticParams() {
  return getAllValidPaths()
    .filter((p) => !p.intent) // only base pages here
    .map(({ location, problem }) => ({ location, problem }));
}

export async function generateMetadata({ params }) {
  const { location, problem } = await params;
  return buildMetadata({ location, problem, intent: null });
}

export default async function ProblemPage({ params }) {
  const { location, problem } = await params;

  const validation = validatePath(location, problem, null);
  if (!validation.valid) notFound();

  const loc = getLocation(location);
  const prob = getProblem(problem);

  const schemas = [
    buildLocalBusinessSchema(location),
    buildMedicalConditionSchema(problem),
    buildFAQSchema(problem, null),
  ].filter(Boolean);

  const props = {
    h1: buildH1(location, problem, null),
    intro: getIntroVariant(location, problem),
    location: loc,
    problem: prob,
    intent: null,
    faqs: getFAQs(problem, null),
    costData: null,
    internalLinks: getInternalLinks(location, problem, null),
    schemas,
  };

  return <ProgrammaticPage {...props} />;
}
