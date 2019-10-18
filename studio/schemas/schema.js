// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document types
import person from "./documents/tag";
import project from "./documents/project";
import siteSettings from "./documents/siteSettings";

// Object types
import figure from "./objects/figure";
import gallery from "./objects/gallery";
import mediaPlayer from "./objects/mediaPlayer";
import twitter from "./objects/twitter";
import facebook from "./objects/facebook";
import extendedPortableText from "./objects/extendedPortableText";
import simplePortableText from "./objects/simplePortableText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    gallery,
    figure,
    mediaPlayer,
    twitter,
    facebook,
    extendedPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    person,
    project,
    siteSettings
  ])
});
