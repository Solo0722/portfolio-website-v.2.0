import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  // projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  projectId: "f4ws2hr0",
  dataset: "production",
  apiVersion: "2023-05-30",
  useCdn: true,
  // token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
  // token:
  //   "skfictjF2KbImTmQjClI7aG7QWKk77paGuTqHRZDnTCu5n8IIfSnEb0HuwjAKhEWNL6LQ3Ti5n4xlccCwFKNsppsTKe84tNL4rnvtBGeKoKTMx55S9eQmMQAyYe3S2u2ClFVMlUIvwChyA072uJz1cOyZRqr3jIRQpaxzfQvNPbEkwBPJyF4",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
