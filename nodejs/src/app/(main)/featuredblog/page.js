import FeaturedBlog from "@/components/homee/FeaturedBlog";

export const metadata = {
    title: "Featured Blogs | Dr.(Prof.) Dhirendra Singh Kushwah",
    description: "Explore featured ENT health insights and expert guidance from Dr. Dhirendra Singh Kushwah.",
};

export default function FeaturedBlogPage() {
    return (
        <main className="min-h-screen pt-20 pb-12 bg-gray-50">
            <FeaturedBlog />
        </main>
    );
}