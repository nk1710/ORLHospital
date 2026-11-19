export function generateSchema(blog) {
    const baseUrl = "https://www.drdhirendrasinghkushwah.com/blog/";
  
    // 🔹 MEDICAL SCHEMA
    if (blog.schema_type === "MedicalWebPage") {
      return {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": blog.meta_title || blog.title,
        "url": blog.canonical_url || `${baseUrl}${blog.slug}`,
        "description": blog.meta_description || blog.excerpt,
  
        "about": {
          "@type": "MedicalProcedure",
          "name": blog.title,
          "bodyLocation": "Ear, Nose, Throat",
          "procedureType": "Surgical",
          "relevantSpecialty": {
            "@type": "MedicalSpecialty",
            "name": "Otolaryngology"
          }
        },
  
        "publisher": {
          "@type": "MedicalClinic",
          "name": "ENT & Gynae Clinic",
          "telephone": "+91-9311449825"
        }
      };
    }
  
    // 🔹 DEFAULT: ARTICLE / BLOG
    return {
      "@context": "https://schema.org",
      "@type": blog.schema_type || "Article",
  
      "headline": blog.meta_title || blog.title,
      "description": blog.meta_description || blog.excerpt,
      "url": blog.canonical_url || `${baseUrl}${blog.slug}`,
  
      "image": blog.featured_image || blog.og_image,
  
      "author": {
        "@type": "Person",
        "name": blog.author_name || "Dr. Dhirendra Singh Kushwah",
        "url": `${baseUrl}author/${blog.author_slug || "admin"}`
      },
  
      "publisher": {
        "@type": "Organization",
        "name": "ENT & Gynae Clinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.drdhirendrasinghkushwah.com/logo.png"
        }
      },
  
      "datePublished": blog.published_at || blog.created_at,
      "dateModified": blog.updated_at
    };
  }