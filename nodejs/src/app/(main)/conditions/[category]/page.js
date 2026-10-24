import { notFound } from 'next/navigation';

export default function ConditionCategoryPage({ params }) {
    // Show 404 for unmapped category routes
    notFound();
}
