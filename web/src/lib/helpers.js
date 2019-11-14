import { format, isFuture } from "date-fns";

export const getTagsByType = tags => {
  const people = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("person"));
  const events = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("event"));
  const organisations = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("organisation"));
  const sponsors = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("sponsor"));
  const categories = tags.filter(tag => tag.tagTypes && tag.tagTypes.includes("category"));

  return {
    people,
    events,
    organisations,
    sponsors,
    categories
  };
};

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

// export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
//   return !isFuture(publishedAt);
// }

// export function getBlogUrl(publishedAt, slug) {
//   return `/blog/${format(publishedAt, "YYYY/MM")}/${slug.current || slug}/`;
// }

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
